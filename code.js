let seeLogoButton = document.querySelector('#seeLogoButton');
let logoWrapper = document.querySelector('.logoWrapper');
let homepageInput = document.querySelector('#homepageInput');
let p = document.querySelector('#greetings');


//------------------ Function to show logo ------------------//
// Make the logo wrapper visible
// Hide the 'See Logo' button

function showLogo() {
    logoWrapper.style.visibility = 'visible';
    seeLogoButton.style.display = 'none';
}

//------------------ Function to show greeting ------------------//
// Check if the 'Enter' key is pressed
// Get the value from the homepage input
// Hide the homepage input
// Update the greeting paragraph with the entered name

function updateValue(e) {
    
    if (e.keyCode === 13) {
        let name = homepageInput.value;
        homepageInput.style.visibility = 'hidden';
        p.innerText = "Welcome to my website, " + name;
    }
} 

//-----------------------------------------------------------
// Event listeners for the 'See Logo' button and homepage input
seeLogoButton.addEventListener('click', showLogo);
homepageInput.addEventListener("keyup", updateValue);

//----------------------------- Function for the form ------------------------------//

document.getElementById("submitBtn").addEventListener("click", submitFunction);

function submitFunction() {
// Display an alert when the form is submitted
  alert ("Your message has been sent!");
}



