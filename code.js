let seeLogoButton = document.querySelector('#seeLogoButton');
let logoWrapper = document.querySelector('.logoWrapper');

seeLogoButton.addEventListener('click', function() {
    logoWrapper.style.visibility = 'visible';
    seeLogoButton.style.display = 'none';
});