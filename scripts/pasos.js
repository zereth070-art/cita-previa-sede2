const pasos = document.querySelectorAll("form section");
const indicaciones = document.querySelectorAll(".lista-pasos li");
let  actual = 0;

function mostrarPaso(n) {
    pasos.forEach((p,i) => (p.hidden = i !== n));
    indicaciones.forEach((li, i) =>  {
        if(i === n ) li.setAttribute("aria-current", "step");
        else li.removeAttribute("aria-current");
    });
    actual = n;
    pasos[n].querySelector("h2").focus() 
}

document.addEventListener("click", (e) => {
    if (e.target.matches("[data-next]")) {
        mostrarPaso(actual + 1);
    }
    if (e.target.matches("[data-prev]")) mostrarPaso(actual -1);
});
mostrarPaso(0);