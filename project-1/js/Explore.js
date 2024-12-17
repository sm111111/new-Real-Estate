let fetchdata;

fetch("Data.json")
  .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);  
    fetchdata = data;
    cardFetch(fetchdata);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


  function cardFetch(data) {
    const AllPropertiesContainer = document.querySelector('.All-Properties-container');
    AllPropertiesContainer.innerHTML = '';

    data.forEach(property => {
        // Use fallback values in case some properties are missing
        const rentmonthly = property.rentmonthly || "N/A";
        const housename = property.housename || "Unknown House";
        const address = property.address || "No address available";
        const sqftArea = property['sqft-area'] || "Not specified";
        const numberofBed = property.numberof_bed || "Not specified";
        const numberofShower = property.numberof_shower || "Not specified";
        const numberofCarParking = property.numberof_car_parking || "Not specified";

        AllPropertiesContainer.innerHTML += `
        <div class="all-cards">
            <div class="all-cards-img">
                <img src="https://cdn.prod.website-files.com/6704d32b156a64ece7cc9779/67091f3f674dafa04e4277ef_properties-thumb-1-p-500.jpg" alt="">
            </div>
            <div class="all-cards-img-top-tools">
                <span>Rent</span>
                <span>$${rentmonthly} / month</span>
            </div>
            <h2>${housename}</h2>
            <p><i class="bi bi-geo-alt"></i> ${address}</p>

            <div class="all-cards-img-bottom-tools">
                <div class="all-cards-box"><i class="bi bi-arrows-move"></i> ${sqftArea} </div>
                <div class="all-cards-box"><i class="bi bi-hdmi-fill"></i>${numberofBed} </div>
                <div class="all-cards-box"><i class="bi bi-hdmi-fill"></i>${numberofShower} </div>
                <div class="all-cards-box"><i class="bi bi-car-front"></i> ${numberofCarParking}  </div>
            </div>
        </div>
        `;
    });
}



document.getElementById('search').addEventListener('input', function(event) {
    const searchItem = event.target.value.toLowerCase();

    const filteredProperties = fetchdata.filter(property => {
        return property.housename.toLowerCase().includes(searchItem) || 
               property.address.toLowerCase().includes(searchItem) ||
               property.rentmonthly.toString().includes(searchItem) ||
               property['sqft-area'].toString().includes(searchItem) ||
               property.numberof_bed.toString().includes(searchItem) ||
               property.numberof_shower.toString().includes(searchItem) ||
               property.numberof_car_parking.toString().includes(searchItem);
    });

    cardFetch(filteredProperties);
});

// ----------------------------------cart----------------------------------

const cart = document.querySelector('.cart').addEventListener('click',()=>{
  cartPopup.style.display = 'block';
})
const cartPopup = document.getElementById('cartPopup');
const closeBtn = document.getElementById('closeBtn');


function closePopup() {
  document.getElementById('cartPopup').style.display = 'none';
}





