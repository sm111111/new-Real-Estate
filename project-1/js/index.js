const hamburger = document.querySelector('.hamburger'); 
const ulNavbar = document.querySelector('#ul-navbar'); 

hamburger.addEventListener('click', () => {
  ulNavbar.classList.toggle('active'); 
  
});

ulNavbar.addEventListener('click', ()=>{
   ulNavbar.classList.remove('active');
})


window.addEventListener('load',()=>{
   setTimeout(function(){

      document.getElementById('loading-screen').style.display = 'none';

      document.querySelector('header').style.display = 'block';
      document.querySelector('#home').style.display = 'block';
      document.querySelector('section').style.display = 'block';
      document.querySelector('footer').style.display = 'block';

   },2000)
});


document.getElementById('myButton').addEventListener('click', function() {
   window.location.href = "#Explore.html";
});

// -------------------------------------------sing and login----------------------------------





