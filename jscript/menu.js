

document.addEventListener('DOMContentLoaded', function () {
    console.log("menu.js loaded");

    const toggleButton = document.querySelector('.mobile-nav .mobile-menu-toggle .mobile-menu-items');
    // toggleButton.addEventListener('mouseenter', function () {
    //     console.log('Hover detected');
    // });

    const mobileMenu = document.querySelector('.mobile-nav .mobile-menu-toggle .mobile-menu-list');

    if (toggleButton && mobileMenu) {
        console.log('Elements found: toggleButton and mobileMenu');
        toggleButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            console.log(mobileMenu.classList);
        });
    } else {

        console.error('Toggle button or mobile menu not found');

    }
});