// Toggle the navlinks visibility when the hamburger icon is clicked
const hamburger = document.getElementById('hamburger');
const navlinks = document.querySelector('.navlinks');

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('show'); // Toggle "show" class to display links
    
});

//  new page open
function openNewPage(){
    window.open("cafe.html");
}
function openNewPage(){
    window.open("coffee.html");
}


// order summary

  fetch('order-summary.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('order-summary-container').innerHTML = data;
    });

