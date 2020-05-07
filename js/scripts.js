document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector(".sidebar__hamburger");
    const closeButton = document.querySelector(".sidebar__close");

    hamburgerButton.addEventListener('click', function (e) {
        this.parentNode.classList.add("sidebar--opened");
    });

    closeButton.addEventListener('click', function (e) {
        this.closest(".sidebar").classList.remove("sidebar--opened");
    });
})