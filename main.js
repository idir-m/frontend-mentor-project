const primaryHeader = document.querySelector('.primary-header');
const humBtn = document.querySelector('.mobile-nav-toggle');
const mainNav = document.querySelector(".primary-navigation");
const closeNavIcon = document.querySelector(".icon-close"); 
const openNavIcon = document.querySelector(".icon-humberger");


humBtn.addEventListener('click', () => {
    
    mainNav.hasAttribute('data-visible') ? 
    humBtn.setAttribute('aria-expanded', false) : 
    humBtn.setAttribute('aria-expanded', true);


    mainNav.toggleAttribute('data-visible');

    closeNavIcon.toggleAttribute('data-visible');
    openNavIcon.toggleAttribute('data-hidden'); 
    
    primaryHeader.toggleAttribute('data-overlay');
})