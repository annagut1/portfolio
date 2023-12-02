let seeLogoButton = document.querySelector('#seeLogoButton');
let logoWrapper = document.querySelector('.logoWrapper');
let homepageInput = document.querySelector('#homepageInput');
let p = document.querySelector('#greetings');



//------------------ Function to show logo ------------------//
function showLogo() {
        // Make the logo wrapper visible
    logoWrapper.style.visibility = 'visible';
        // Hide the 'See Logo' button
    seeLogoButton.style.display = 'none';
}

//------------------ Function to show greeting ------------------//
function updateValue(e) {
        // Check if the 'Enter' key is pressed
    if (e.keyCode === 13) {
        // Get the value from the homepage input
        let name = homepageInput.value;
        // Hide the homepage input
        homepageInput.style.visibility = 'hidden';
        // Update the greeting paragraph with the entered name
        p.innerText = "Welcome to my website, " + name;
    }
} 

//----------------------------- Function for the form ------------------------------

document.getElementById("submitBtn").addEventListener("click", submitFunction);

function submitFunction() {
// Display an alert when the form is submitted
  alert ("Your message has been sent!");
}

//-----------------------------------------------------------
// Event listeners for the 'See Logo' button and homepage input
seeLogoButton.addEventListener('click', showLogo);
homepageInput.addEventListener("keyup", updateValue);


