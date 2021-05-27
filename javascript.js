const aabningstider = document.querySelector(".aabningstider")
const findvej = document.querySelector(".findvej")
const overskrift = document.querySelector("p")


aabningstider.addEventListener("click", toggleheading);

function toggleheading () {
    console.log("toggleheading kører");
    overskrift.classList.add("red");
}

