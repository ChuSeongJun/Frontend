const toggle = document.querySelector(".navbar_toggle");
const menu = document.querySelector(".navbar_menu");
const icon = document.querySelector(".navbar_icon");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    icon.classList.toggle("active");
});
