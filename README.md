# Cita previa · Sede 2.0

Formulario web para pedir cita previa en atención primaria. Ejercicio de
maquetación con **Bootstrap 5**: la sede pide identificación, cita y
especialidad, y confirmación, repartidas en tres pasos.

## Estado

El proyecto está **a medias**: solo está maquetado y validado el paso 1.

- [x] Cabecera, lista de pasos y estructura de la tarjeta.
- [x] Paso 1 · Identificación (DNI/NIE, nombre, apellidos, fecha de nacimiento y
      estado civil).
- [ ] Paso 2 · Cita y especialidad (la sección existe, pero está vacía).
- [ ] Paso 3 · Confirmación (la sección existe, pero está vacía).
- [ ] JavaScript del asistente: mostrar/ocultar pasos, validar y avanzar.
      El botón **Continuar** no hace nada todavía.
- [ ] Envío del formulario.

## Estructura

```text
.
├── index.html                 # página del asistente (paso 1)
├── css/
│   └── estilos.css            # variables de color y ajustes sobre Bootstrap
├── docs/
│   └── reto-diseno.png        # imagen de referencia del diseño pedido
├── plantilla/
│   └── plantilla-base-bootstrap.html   # plantilla de clase (Bootstrap + ejemplos)
└── _legacy/
    └── index-v1.html          # primera versión, maquetada con tablas
```

## Cómo verlo

No hay compilación ni dependencias locales: abre `index.html` en el navegador.
Bootstrap 5.3 se carga desde CDN y los estilos propios están en `css/estilos.css`.

## Notas

- `plantilla/plantilla-base-bootstrap.html` es material de clase, no forma parte
  de la página; se conserva como referencia.
- `_legacy/index-v1.html` es la versión anterior (tablas, un solo formulario).
  Se guarda solo como histórico.
