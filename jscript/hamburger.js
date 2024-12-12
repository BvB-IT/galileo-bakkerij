// document.addEventListener('DOMContentLoaded', function () {
//     console.log("hamburger.js loaded");
//     const hamMenu = document.querySelector(".ham-menu");

//     const menuToggle = document.querySelector(".mobile-menu-toggle");
//     if (hamMenu && menuToggle) {
//         hamMenu.addEventListener("click", () => {
//             console.log('Elements found: toggleButton and mobileMenu');
//             hamMenu.classList.toggle("active");
//             menuToggle.classList.toggle("active");
//         });
//     } else {
//         console.error('hamMenu or toggleMenu not found');
//     }

// });
// console.log("hamburger.js loaded");
// const hamMenu = document.querySelector(".ham-menu");

// const toggleMenu = document.querySelector(".mobile-menu-toggle");

// hamMenu.addEventListener("click", () => {
//     hamMenu.classList.toggle("active");
//     toggleMenu.classList.toggle("active");
// });

document.addEventListener('DOMContentLoaded', function () {
    console.log("hamburger.js loaded");
});

document.addEventListener("click", (event) => {
    if (event.target.closest(".ham-menu")) {
        const hamMenu = event.target.closest(".ham-menu");
        const toggleMenu = document.querySelector(".mobile-menu-toggle");
        if (hamMenu && toggleMenu) {
            console.log('Elements found: toggleButton and mobileMenu');
            hamMenu.classList.toggle("active");
            toggleMenu.classList.toggle("active");
        } else onsole.error('hamMenu or toggleMenu not found');
    }
});