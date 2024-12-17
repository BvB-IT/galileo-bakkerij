document.addEventListener('DOMContentLoaded', function () {
    console.log("hamburger.js loaded");
    document.addEventListener("click", (event) => {
        if (event.target.closest(".ham-menu")) {
            const hamMenu = event.target.closest(".ham-menu");
            const toggleMenu = document.querySelector(".mobile-menu-toggle");
            const toggleHero = document.querySelector(".hero");
            if (hamMenu && toggleMenu && toggleHero) {
                console.log('Elements found: toggleButton and mobileMenu');
                hamMenu.classList.toggle("active");
                toggleMenu.classList.toggle("active");
                toggleHero.classList.toggle("active");
            } else onsole.error('hamMenu or toggleMenu not found');
        }
    });
});
