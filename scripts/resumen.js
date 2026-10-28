function rellenarResumen() {
    const dni = document.getElementById('dni').value;
    const nombre = document.getElementById('nombre').value;
    const apellido1 = document.getElementById('apellido1').value;
    const apellido2 = document.getElementById('apellido2').value;
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const anio = document.getElementById('anio').value;
    
    const fechaNacimiento = `${dia}/${mes}/${anio}`;

    const estadoCivil = document.querySelector('input[name="estadocivil"]:checked')?.value || "No indicado";
    const tipo = document.querySelector('input[name="tipo"]:checked')?.value || "No indicado";
    const franja = document.querySelector('input[name="franja"]:checked')?.value || "No indicado";

    const especialidad = document.getElementById('especialidad').value;
    const centro = document.getElementById('centro').value;

    const fechaCita = document.getElementById('fecha-cita').value;
    
    const motivoVal = document.getElementById('motivo').value.trim();
    const motivo = motivoVal === "" ? "No indicado" : motivoVal;

    // Aquí iría pintar todo en #paso-3
}