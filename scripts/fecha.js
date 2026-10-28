const selectorDia = document.getElementById("dia");
const selectorMes = document.getElementById("mes");
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const selectorAnio = document.getElementById("anio");
const anioActual = new Date().getFullYear();
const primerAnio = anioActual - 120;

for (let dia = 1; dia <= 31; dia++) {
  const option = document.createElement("option");
  option.value = dia;
  option.textContent = dia;
  selectorDia.appendChild(option);
}

meses.forEach((mes, indice) => {
  const opcion = document.createElement("option");
  opcion.value = indice + 1;
  opcion.textContent = mes;
  selectorMes.appendChild(opcion);
});

for (let anio = anioActual; anio >= primerAnio; anio--) {
  const opcion = document.createElement("option");
  opcion.value = anio;
  opcion.textContent = anio;
  selectorAnio.appendChild(opcion);
}
function actualizarDias() {
  const mes = Number(selectorMes.value);
  const anio = Number(selectorAnio.value);

  if (!mes || !anio) return;

  const maximoDias = new Date(anio, mes, 0).getDate();
  const diaAnterior = selectorDia.value;

  // Deja solo la opción inicial: «Selecciona un día».
  selectorDia.length = 1;

  // Crea de nuevo los días válidos para el mes y año elegidos.
  for (let dia = 1; dia <= maximoDias; dia++) {
    const opcion = document.createElement("option");
    opcion.value = dia;
    opcion.textContent = dia;
    selectorDia.appendChild(opcion);
  }

  // Conserva el día elegido si sigue siendo válido.
  if (Number(diaAnterior) <= maximoDias) {
    selectorDia.value = diaAnterior;
  }
}

selectorMes.addEventListener("change", actualizarDias);
selectorAnio.addEventListener("change", actualizarDias);
