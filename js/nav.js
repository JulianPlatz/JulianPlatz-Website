const elements = document.querySelectorAll("#nav, #navLinks, #burgerOne, #burgerTwo");
let isOpen = false;

function toggleNavbar() {
    isOpen = !isOpen;

    elements.forEach(element => {
        element.classList.toggle("open", isOpen);
    });
}