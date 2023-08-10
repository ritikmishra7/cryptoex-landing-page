const modeToggle = document.getElementById('toggle-mode');
const body = document.body;
const nav = document.getElementsByTagName('nav')[0];
const header = document.getElementById('header');
const navUL = document.getElementById('nav-ul');
const navLIs = document.getElementsByClassName('nav-li');
const brandName = document.getElementById('brand-name');
const hamburger = document.getElementById('hamburger-btn');
const hamburgerDropDown = document.getElementById('hamburger-dropdown');
const brandFullName = document.getElementById('brand-full-name');


const sections = document.getElementsByTagName('section');
const tagline = document.getElementById('tagline');
const documentationBtn = document.getElementById('documentation-btn');
const featureh3 = document.getElementsByClassName('feature-h3');
const featurep = document.getElementsByClassName('feature-p');

const advantageSection = document.getElementById('advantage-section');

const advantageh4 = document.getElementsByClassName('advantage-h4');
const advantagep = document.getElementsByClassName('advantage-p');
const advantageInfoH2 = document.getElementById('advantage-info-h2');
const darkLogo = document.getElementsByClassName('dark-logo');

const partners = document.getElementById('partners');
const tokenomics = document.getElementById('tokenomics');
const dpx = document.getElementById('dpx');
const rdpx = document.getElementById('rdpx');
const dpxh3 = document.getElementById('dpx-h3');
const rdpxh3 = document.getElementById('rdpx-h3');
const tokenModelLeftPartH2 = document.getElementById('token-model-left-part-h2');
const tokenModelAllInfo = document.getElementsByClassName('token-model-all-info');

const footer = document.getElementsByTagName('footer')[0];
const footerH4 = document.getElementsByClassName('footer-item-h4');
const footerP = document.getElementsByClassName('footer-item-p');
const lightModeIcon = document.getElementById('light-mode-icon');
const darkModeIcon = document.getElementById('dark-mode-icon');
const copyRight = document.getElementById('copyright-time');

const currYear = new Date().getFullYear();
copyRight.innerText = `© ${currYear} Ritik Mishra`

modeToggle.addEventListener('click', () => {
    toggleMode();
});

hamburger.addEventListener('click', () => {
    if (hamburgerDropDown.classList.contains('show-hamburger-dropdown')) {
        hamburgerDropDown.classList.remove('fade-in');
        hamburgerDropDown.classList.add('fade-out');
    } else {
        hamburgerDropDown.classList.remove('fade-out');
        hamburgerDropDown.classList.add('fade-in');
    }
    hamburgerDropDown.classList.toggle('show-hamburger-dropdown');
});



function toggleMode() {
    if (lightModeIcon.classList.contains('show-icon')) {
        lightModeIcon.classList.remove('show-icon');
        lightModeIcon.classList.add('hide-icon');
        darkModeIcon.classList.remove('hide-icon');
        darkModeIcon.classList.add('show-icon');
    } else {
        lightModeIcon.classList.remove('hide-icon');
        lightModeIcon.classList.add('show-icon');
        darkModeIcon.classList.remove('show-icon');
        darkModeIcon.classList.add('hide-icon');
    }
    body.classList.toggle('light-mode-bg-color');
    nav.classList.toggle('light-mode-bg-color');
    header.classList.toggle('light-mode-bg-color');
    navUL.classList.toggle('light-mode-primary-text-color');

    for (let i = 0; i < navLIs.length; i++) {
        navLIs[i].classList.toggle('light-mode-nav-items');
    }

    brandName.classList.toggle('light-mode-secondary-text-color');
    hamburger.classList.toggle('light-mode-secondary-text-color');
    brandFullName.classList.toggle('light-mode-secondary-text-color');

    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.toggle('light-mode-bg-color');
    }

    tagline.classList.toggle('light-mode-primary-text-color');
    documentationBtn.classList.toggle('light-mode-documentation-btn');

    for (let i = 0; i < featureh3.length; i++) {
        featureh3[i].classList.toggle('light-mode-secondary-text-color');
    }

    for (let i = 0; i < featurep.length; i++) {
        featurep[i].classList.toggle('light-mode-primary-text-color');
    }

    advantageSection.classList.toggle('light-mode-advantage-section');

    for (let i = 0; i < advantageh4.length; i++) {
        advantageh4[i].classList.toggle('light-mode-secondary-text-color');
    }

    for (let i = 0; i < advantagep.length; i++) {
        advantagep[i].classList.toggle('light-mode-primary-text-color');
    }

    advantageInfoH2.classList.toggle('light-mode-secondary-text-color');

    for (let i = 0; i < darkLogo.length; i++) {
        darkLogo[i].classList.toggle('light-mode-logo');
    }

    partners.classList.toggle('light-mode-secondary-text-color');
    tokenomics.classList.toggle('light-mode-blue-color');
    dpx.classList.toggle('light-mode-white-bg');
    rdpx.classList.toggle('light-mode-white-bg');

    dpxh3.classList.toggle('light-mode-secondary-text-color');
    rdpxh3.classList.toggle('light-mode-secondary-text-color');
    tokenModelLeftPartH2.classList.toggle('light-mode-secondary-text-color');

    for (let i = 0; i < tokenModelAllInfo.length; i++) {
        tokenModelAllInfo[i].classList.toggle('light-mode-primary-text-color');
    }

    footer.classList.toggle('light-mode-bg-color');

    for (let i = 0; i < footerH4.length; i++) {
        footerH4[i].classList.toggle('light-mode-secondary-text-color');
    }

    for (let i = 0; i < footerP.length; i++) {
        footerP[i].classList.toggle('light-mode-primary-text-color');
    }
}

// Check preferred color scheme and set initial mode
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (prefersLight) {
    toggleMode();
}


