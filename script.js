const menuToggle = document.getElementById("menuToggle");
const parent = document.querySelector(".parent");

if (menuToggle && parent) {
    menuToggle.addEventListener("click", function (event) {
        event.preventDefault();
        parent.classList.toggle("collapsed");
    });
}