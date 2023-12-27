const nav = document.querySelector("nav");
const burgerOne = document.getElementById("burgerOne");
const burgerTwo = document.getElementById("burgerTwo");
const navLinks = document.getElementById("navLinks");
let clicked = false;

function toggleNavbar() {
    nav.style.height = clicked ? "0%" : "100%";
    nav.style.pointerEvents = clicked ? "none" : "auto";
    nav.style.transition = ".5s";

    burgerOne.style.transform = clicked ? "rotate(0deg) translateY(0)" : "rotate(45deg) translateY(5px)";
    burgerOne.style.transition = ".5s";

    burgerTwo.style.transform = clicked ? "rotate(0deg) translateY(0)" : "rotate(-45deg) translateY(-5px)";
    burgerTwo.style.transition = ".5s";

    switch (nav.style.height) {
        case "100%":
            setTimeout(function() {
                navLinks.style.opacity = "1";
                navLinks.style.transition = ".5s";
            }, 250);
            break;
        default:
            navLinks.style.opacity = "0";
            navLinks.style.transition = ".25s";
            break;
    }

    clicked = !clicked;
}
