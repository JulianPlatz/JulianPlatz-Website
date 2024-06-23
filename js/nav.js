const elements = document.querySelectorAll("#nav, #navLinks, #burgerOne, #burgerTwo");
let isOpen = false;

function toggleNavbar() {
    isOpen = window.scrollY > 0 ? true : !isOpen;

    elements.forEach(element => {
        element.classList.toggle("open", isOpen);
    });

    document.body.style.overflow = isOpen ? "hidden" : "";
    document.body.style.height = isOpen ? "100dvh" : "";
}

window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        toggleNavbar();
    }
});

const button = document.getElementById("toggleButton");
button.addEventListener("click", toggleNavbar);