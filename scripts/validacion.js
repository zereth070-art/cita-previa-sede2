const LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

function dniValido(texto) {
    //8 numeros o XYZ + 7 numeros + 1 letra en mayusculas
    if (!/^(\d{8}|[XYZ]\d{7})[A-Z]$/.test(texto)) return false;
    //En un NIE, la X/Y/Z inicial cuenta como 0/1/2
    const numero = texto.slice(0, -1).replace("X", "0").replace("Y","1").replace("Z","2");
    //La letra es la posicion (numero % 23) de la tabla
    return LETRAS_DNI[Number(numero) % 23] === texto.slice(-1);
}

function hoy() {
    const d = new Date();
    d.setHours(0,0,0,0); //sin hora par compara solo los dias
    return d;    
}

const hayMarcado = (nombre) => {
    document.querySelector(`input[name="${nombre}"]:checked`) != null;

    const vacio = (c) => c.value.trim() === "";
    
    const reglas = [
        // --- Paso 1 ---
        [
            {
                campo: "dni", error:"err-dni",
                comprobar: (c) =>{
                    c.value = c.value.trim().toUpperCse(); //normalizo lo que se escribió
                    if(!c.value) return "Escribe tu DNI o NIE.";
                    if(!dniValido(c.value)) return "El DNI o NIE no es válido. Revisa los números y la letra";
                    return "";
                },
            },
                { campo: "nombre", error:"err-nombre", comprobar: (c) => (vacio(c) ? "Escribe tu nombre." : "")},
                { campo:"apellido1", error:"err-apellido1", comprobar:(c) => (vacio(c)? "Escribe tu primer apellido" : "")},
                {
                campo:"dia", error:"err-nacimiento",
                comprobar:() => {
                    const dia = Number(document.getElementById("dia").value);
                    const mes = Number(document.getElementById("mes").value);
                    const anio = Number(document.getElementById("anio").value);
                    if(!dia || !mes || !anio) return "Selecciona un día, mes y año de nacimiento. ";
                    return "";
                },
                },
                {
                    campo: "ec-soltero", error:"err-estadocivil",
                    comprobar: () => (hayMarcado("estadocivil") ? "" : "Selecciona tu estado civil."),
                },
            ],
     // ---- PASO 2 ----
    [
        { campo:"especialidad", error:"err-especialidad", comprobar: (c) => (c.value ? "" : "Seleccione una especialidad" )},
        { campo:"centro", error:"err-centro", comprobar: (c) => (c.value ? "" : "Seleccione un centro" )},
        { campo:"tipo-presencial", error:"err-tipo", comprobar: (c) => (hayMarcado("tipo") ? ""  : "Elige presencial o telefonica" )},
        {
            campo: "fecha-cita", error: "err-fecha-cita",
            comprobar: (c) => {
                if(!c.value) return "Elige una fecha.";
                if (new Date(c.value + "T00:00:00") < hoy()) return "La fecha no puede ser anterior a hoy";
                return "";
            },
        },
        { campo: "franja-manana", error:"err-franja", comprobar: () => (hayMarcado("franja") ? "":  "Elige mañana o tarde")},
    ],
    ];

    function validarPaso(n) {
        let primerFallo = null;
        for (const regla of reglas[n]) {
            const campo = document.getElementById(regla.campo);
            const error = document.getElementById(regla.error);
            const mensaje = regla.comprobar(campo);

            error.textContent = mensaje;
            error.hidden = mensaje === "";
            if(mensaje) campo.setAttribute("aria-invalid", "true");
            else campo.removeAttribute("aria-invalid");

            if (mensaje && !primerFallo) primerFallo = campo;            
        }
        if (primerFallo) {
            primerFallo.focus() //llevo al usuario al primer error
            return false;
        }
        return true;
    }
}