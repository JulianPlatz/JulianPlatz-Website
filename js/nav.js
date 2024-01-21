const nav       = document.querySelector("nav");
const burgerOne = document.getElementById("burgerOne");
const burgerTwo = document.getElementById("burgerTwo");
const navLinks  = document.getElementById("navLinks");
let clicked     = false;

function toggleNavbar() 
{
    nav.style.height            = clicked ? "0%" : "100%";
    nav.style.pointerEvents     = clicked ? "none" : "auto";

    burgerOne.style.transform   = clicked ? "rotate(0deg) translateY(0)" : "rotate(45deg) translateY(5px)";
    burgerTwo.style.transform   = clicked ? "rotate(0deg) translateY(0)" : "rotate(-45deg) translateY(-5px)";

    switch (nav.style.height) 
    {
        case "100%":
            setTimeout(() => 
            {
                navLinks.style.opacity = "1";
            }, 250);
            break;
        default:
            navLinks.style.opacity = "0";
            break;
    }

    clicked = !clicked;
}