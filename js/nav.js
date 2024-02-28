const elements = document.querySelectorAll("#nav, #navLinks, #burgerOne, #burgerTwo");
let isOpen = false;

function toggleNavbar() {
    isOpen = !isOpen;

    elements.forEach(element => {
        element.classList.toggle("open", isOpen);
    });
}

window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen) {
        toggleNavbar();
    }
});