document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggle-btn");
    const navBar = document.querySelector(".nav-bar");
    const navList = document.querySelector(".nav-list");

    toggleBtn.addEventListener("click", () => {
        navBar.classList.toggle("active");
        navList.classList.toggle("active");
    });
});