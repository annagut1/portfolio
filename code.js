let seeLogoButton = document.querySelector('#seeLogoButton');
let logoWrapper = document.querySelector('.logoWrapper');
let homepageInput = document.querySelector('#homepageInput');
let p = document.querySelector('#greetings');


//------------------ Function to show logo ------------------//
function showLogo() {
    logoWrapper.style.visibility = 'visible';
    seeLogoButton.style.display = 'none';
}

//------------------ Function to show greeting ------------------//
function updateValue(e) {
    
    if (e.keyCode === 13) {
        let name = homepageInput.value;
        homepageInput.style.visibility = 'hidden';
        p.innerText = "Welcome to my website, " + name;
    }
} 

//-----------------------------------------------------------
seeLogoButton.addEventListener('click', showLogo);
homepageInput.addEventListener("keyup", updateValue);


