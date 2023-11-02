function Menu() {
  if (document.getElementById("navegador").className == "desplegado") {
    document.getElementById("navegador").className = "";
    document.getElementById("botonHamburguesa").innerHTML =
      '<i class="fa-solid fa-bars"></i>';
  } else {
    document.getElementById("navegador").className = "desplegado";
    document.getElementById("botonHamburguesa").innerHTML =
      '<i class="fa-solid fa-xmark"></i>';
  }
}

const icono = document.querySelector("#logoOficial");
const tooltip = document.querySelector("#descripcionLogo");
const close = document.querySelector("#botonCerrar");

icono.addEventListener("mouseenter", () => {
  tooltip.classList.add("hover");
});

let timer;
icono.addEventListener("mouseleave", () => {
  timer = setTimeout(() => {
    tooltip.classList.remove("hover");
  }, 200);
});
close.addEventListener("click", () => {
  tooltip.classList.remove("hover");
});
tooltip.addEventListener("mouseenter", () => clearTimeout(timer));
tooltip.addEventListener("mouseleave", () => tooltip.classList.remove("hover"));
