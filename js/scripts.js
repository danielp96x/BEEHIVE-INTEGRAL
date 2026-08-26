// =====================================================
// BEE HIVE
// JAVASCRIPT GENERAL
// =====================================================


// =====================================================
// CATÁLOGO DE HERRAMIENTAS
// =====================================================
//
// Para agregar una nueva herramienta:
// 1. Agrega un nuevo objeto aquí.
// 2. Pon su imagen en:
//    assets/images/herramientas/
// 3. Escribe el nombre exacto de la imagen en "imagen".
//
// NO necesitas modificar herramientas.html.
// =====================================================

const herramientas = [

    // =================================================
    // 1. TALADRO TRUPER
    // =================================================

    {
        nombre: "Taladro percutor TRUPER",
        icono: "🔨",
        imagen: "taladro-truper.jpeg",
        marca: "TRUPER",
        modelo: "ROTO-1/2A7",
        estado: "Perfecto estado",
        cantidadDisponible: 1,
        precioHora: "$20.000",
        precioDia: "$480.000",
        deposito: "$80.000",
        descripcion:
            "Taladro percutor TRUPER para trabajos de perforación, construcción y mantenimiento. Incluye llave de mandril."
    },


    // =================================================
    // 2. PULIDORA
    // =================================================

    {
        nombre: "Pulidora",
        icono: "⚙️",
        imagen: "",
        marca: "Por definir",
        modelo: "Por definir",
        estado: "Por confirmar",
        cantidadDisponible: 1,
        precioHora: "Por definir",
        precioDia: "Por definir",
        deposito: "Por definir",
        descripcion:
            "Herramienta para trabajos de pulido, corte y mantenimiento."
    },


    // =================================================
    // 3. SEGUETA
    // =================================================

    {
        nombre: "Segueta",
        icono: "🪚",
        imagen: "",
        marca: "Por definir",
        modelo: "Por definir",
        estado: "Por confirmar",
        cantidadDisponible: 1,
        precioHora: "Por definir",
        precioDia: "Por definir",
        deposito: "Por definir",
        descripcion:
            "Herramienta para trabajos de corte y mantenimiento."
    },


    // =================================================
    // 4. JUEGO DE DESTORNILLADORES TRUPER
    // =================================================

    {
        nombre: "Juego de destornilladores TRUPER",
        icono: "🪛",
        imagen: "destornilladores-truper.jpeg",
        marca: "TRUPER",
        modelo: "14196 / DTJ-7D",
        estado: "Perfecto estado",
        cantidadDisponible: 1,
        piezas: "10 piezas",
        precioHora: "$20.000",
        precioDia: "$480.000",
        deposito: "$80.000",
        descripcion:
            "Juego de destornilladores eléctricos aislados TRUPER para trabajos de mantenimiento y reparación. Incluye 10 piezas y aislamiento de hasta 1000 V."
    },


    // =================================================
    // 5. JUEGO DE BRISTOL
    // =================================================

    {
        nombre: "Juego de Bristol",
        icono: "🔧",
        imagen: "",
        marca: "Por definir",
        modelo: "Por definir",
        estado: "Por confirmar",
        cantidadDisponible: 1,
        precioHora: "Por definir",
        precioDia: "Por definir",
        deposito: "Por definir",
        descripcion:
            "Juego de llaves Bristol para trabajos de reparación y mantenimiento."
    },


    // =================================================
    // 6. DESTORNILLADORES ELÉCTRICOS
    // =================================================

    {
        nombre: "Juego de destornilladores eléctricos",
        icono: "⚡",
        imagen: "",
        marca: "Por definir",
        modelo: "Por definir",
        estado: "Por confirmar",
        cantidadDisponible: 1,
        precioHora: "Por definir",
        precioDia: "Por definir",
        deposito: "Por definir",
        descripcion:
            "Herramientas para trabajos eléctricos, mantenimiento y reparación."
    },


    // =================================================
    // 7. TESTER DIGITAL
    // =================================================

    {
        nombre: "Tester digital",
        icono: "📟",
        imagen: "",
        marca: "Por definir",
        modelo: "Por definir",
        estado: "Por confirmar",
        cantidadDisponible: 1,
        precioHora: "Por definir",
        precioDia: "Por definir",
        deposito: "Por definir",
        descripcion:
            "Instrumento para realizar diferentes mediciones eléctricas."
    },


    // =================================================
    // 8. TESTER NORMAL
    // =================================================

    {
        nombre: "Tester normal",
        icono: "📏",
        imagen: "",
        marca: "Por definir",
        modelo: "Por definir",
        estado: "Por confirmar",
        cantidadDisponible: 1,
        precioHora: "Por definir",
        precioDia: "Por definir",
        deposito: "Por definir",
        descripcion:
            "Herramienta de medición para trabajos eléctricos y de mantenimiento."
    },


    // =================================================
    // 9. ALICATE TRUPER
    // =================================================

    {
        nombre: "Alicate TRUPER",
        icono: "🔧",
        imagen: "alicate-truper.jpeg",
        marca: "TRUPER",
        modelo: "N/A",
        estado: "Perfecto estado",
        cantidadDisponible: 1,
        precioHora: "$20.000",
        precioDia: "$480.000",
        deposito: "$80.000",
        descripcion:
            "Alicate TRUPER para trabajos de mantenimiento, reparación y diferentes labores de construcción."
    },


    // =================================================
    // 10. EXTENSIÓN TRUPER
    // =================================================

    {
        nombre: "Extensión eléctrica TRUPER",
        icono: "🔌",
        imagen: "extension-truper.jpeg",
        marca: "TRUPER",
        modelo: "N/A",
        estado: "Perfecto estado",
        cantidadDisponible: 1,
        precioHora: "$20.000",
        precioDia: "$480.000",
        deposito: "$80.000",
        descripcion:
            "Extensión eléctrica TRUPER para trabajos de construcción, mantenimiento y diferentes proyectos."
    }

];


// =====================================================
// PEDIDO DE HERRAMIENTAS
// =====================================================

let pedidoHerramientas = [];


// =====================================================
// GENERAR CATÁLOGO AUTOMÁTICAMENTE
// =====================================================

function generarCatalogo() {

    const catalogo =
        document.getElementById("catalogoHerramientas");

    if (!catalogo) {
        return;
    }


    catalogo.innerHTML = "";


    herramientas.forEach((herramienta, indice) => {

        const tarjeta =
            document.createElement("article");

        tarjeta.className =
            "quick-card herramienta-card";


        // ---------------------------------------------
        // IMAGEN
        // ---------------------------------------------

        let contenidoImagen = "";


        if (herramienta.imagen) {

            const rutaImagen =
                "../assets/images/herramientas/" +
                herramienta.imagen;


            contenidoImagen = `

                <div class="herramienta-imagen">
<img
    src="${rutaImagen}"
    alt="${herramienta.nombre}"
    loading="lazy"
    onerror="this.parentElement.innerHTML='<div style=&quot;padding:20px;text-align:center;&quot;>❌ Imagen no encontrada<br><small>${herramienta.imagen}</small></div>'">
                </div>

            `;

        } else {

            contenidoImagen = `

                <div class="quick-icon">

                    ${herramienta.icono}

                </div>

            `;

        }


        // ---------------------------------------------
        // PIEZAS
        // ---------------------------------------------

        const piezasHTML =
            herramienta.piezas
                ? `<strong>Piezas:</strong> ${herramienta.piezas}<br>`
                : "";


        // ---------------------------------------------
        // TARJETA
        // ---------------------------------------------

        tarjeta.innerHTML = `

            ${contenidoImagen}


            <div>

                <span class="herramienta-numero">

                    HERRAMIENTA #${indice + 1}

                </span>


                <h3>

                    ${herramienta.nombre}

                </h3>


                <p>

                    ${herramienta.descripcion}

                </p>


                <p>

                    <strong>Marca:</strong>
                    ${herramienta.marca}

                    <br>

                    <strong>Modelo:</strong>
                    ${herramienta.modelo}

                    <br>

                    <strong>Estado:</strong>
                    ${herramienta.estado}

                    <br>

                    ${piezasHTML}

                    <strong>Disponible:</strong>
                    ${herramienta.cantidadDisponible}

                    <br>

                    <strong>Precio/hora:</strong>
                    ${herramienta.precioHora}

                    <br>

                    <strong>Precio/día:</strong>
                    ${herramienta.precioDia}

                    <br>

                    <strong>Depósito:</strong>
                    ${herramienta.deposito}

                </p>


                <button
                    type="button"
                    class="btn btn-secondary btn-ver-herramienta"
                    onclick="verHerramienta(${indice})">

                    Ver detalles

                </button>


                <button
                    type="button"
                    class="btn btn-primary"
                    onclick="agregarHerramienta(${indice})">

                    + Agregar al pedido

                </button>

            </div>

        `;


        catalogo.appendChild(tarjeta);

    });

}


// =====================================================
// AGREGAR HERRAMIENTA
// =====================================================

function agregarHerramienta(indice) {

    const herramienta =
        herramientas[indice];

    if (!herramienta) {
        return;
    }


    const existente =
        pedidoHerramientas.find(
            item => item.indice === indice
        );


    if (existente) {

        if (
            existente.cantidad >=
            herramienta.cantidadDisponible
        ) {

            alert(
                "La cantidad disponible de esta herramienta es " +
                herramienta.cantidadDisponible + "."
            );

            return;

        }


        existente.cantidad += 1;

    } else {

        pedidoHerramientas.push({

            indice: indice,

            cantidad: 1

        });

    }


    actualizarPedido();


    const pedido =
        document.getElementById("pedido");


    if (pedido) {

        pedido.scrollIntoView({

            behavior: "smooth"

        });

    }

}


// =====================================================
// QUITAR UNA UNIDAD
// =====================================================

function quitarHerramienta(indice) {

    const item =
        pedidoHerramientas.find(
            elemento => elemento.indice === indice
        );


    if (!item) {
        return;
    }


    item.cantidad -= 1;


    if (item.cantidad <= 0) {

        pedidoHerramientas =
            pedidoHerramientas.filter(
                elemento => elemento.indice !== indice
            );

    }


    actualizarPedido();

}


// =====================================================
// ELIMINAR COMPLETAMENTE
// =====================================================

function eliminarHerramienta(indice) {

    pedidoHerramientas =
        pedidoHerramientas.filter(
            elemento => elemento.indice !== indice
        );


    actualizarPedido();

}


// =====================================================
// ACTUALIZAR PEDIDO
// =====================================================

function actualizarPedido() {

    const listaPedido =
        document.getElementById("listaPedido");

    const resumenPedido =
        document.getElementById("resumenPedido");

    const btnWhatsApp =
        document.getElementById("btnWhatsAppPedido");

    const btnVaciar =
        document.getElementById("btnVaciarPedido");


    if (!listaPedido) {
        return;
    }


    // =================================================
    // PEDIDO VACÍO
    // =================================================

    if (pedidoHerramientas.length === 0) {

        listaPedido.innerHTML = `

            <div class="quick-card">

                <div class="quick-icon">

                    🛒

                </div>


                <div>

                    <h3>

                        Tu pedido está vacío

                    </h3>


                    <p>

                        Agrega una o varias herramientas
                        desde nuestro catálogo.

                    </p>

                </div>

            </div>

        `;


        if (resumenPedido) {

            resumenPedido.textContent =
                "No has seleccionado herramientas todavía.";

        }


        if (btnWhatsApp) {
            btnWhatsApp.disabled = true;
        }


        if (btnVaciar) {
            btnVaciar.disabled = true;
        }


        return;

    }


    // =================================================
    // MOSTRAR PEDIDO
    // =================================================

    listaPedido.innerHTML = "";


    pedidoHerramientas.forEach(item => {

        const herramienta =
            herramientas[item.indice];


        if (!herramienta) {
            return;
        }


        const tarjeta =
            document.createElement("div");


        tarjeta.className =
            "quick-card";


        tarjeta.innerHTML = `

            <div class="quick-icon">

                ${herramienta.icono}

            </div>


            <div>

                <h3>

                    ${herramienta.nombre}

                </h3>


                <p>

                    Cantidad:
                    <strong>${item.cantidad}</strong>

                </p>


                <p>

                    Marca:
                    ${herramienta.marca}

                    <br>

                    Modelo:
                    ${herramienta.modelo}

                    <br>

                    Precio/hora:
                    ${herramienta.precioHora}

                    <br>

                    Precio/día:
                    ${herramienta.precioDia}

                </p>


                <div>

                    <button
                        type="button"
                        class="btn btn-secondary"
                        onclick="quitarHerramienta(${item.indice})">

                        −

                    </button>


                    <button
                        type="button"
                        class="btn btn-primary"
                        onclick="agregarHerramienta(${item.indice})">

                        +

                    </button>


                    <button
                        type="button"
                        class="btn btn-secondary"
                        onclick="eliminarHerramienta(${item.indice})">

                        🗑️ Eliminar

                    </button>

                </div>

            </div>

        `;


        listaPedido.appendChild(tarjeta);

    });


    // =================================================
    // CONTAR TOTAL
    // =================================================

    const cantidadTotal =
        pedidoHerramientas.reduce(
            (total, item) =>
                total + item.cantidad,
            0
        );


    if (resumenPedido) {

        resumenPedido.innerHTML =
            `🛠️ Has seleccionado <strong>${cantidadTotal}</strong> herramienta(s).`;

    }


    if (btnWhatsApp) {
        btnWhatsApp.disabled = false;
    }


    if (btnVaciar) {
        btnVaciar.disabled = false;
    }

}


// =====================================================
// VER DETALLES
// =====================================================

function verHerramienta(indice) {

    const herramienta =
        herramientas[indice];


    if (!herramienta) {
        return;
    }


    let mensaje =

        `${herramienta.icono} ${herramienta.nombre}\n\n` +

        `Descripción:\n${herramienta.descripcion}\n\n` +

        `Marca: ${herramienta.marca}\n` +

        `Modelo: ${herramienta.modelo}\n` +

        `Estado: ${herramienta.estado}\n` +

        `Disponible: ${herramienta.cantidadDisponible}\n` +

        `Precio por hora: ${herramienta.precioHora}\n` +

        `Precio por día: ${herramienta.precioDia}\n` +

        `Depósito de garantía: ${herramienta.deposito}`;


    if (herramienta.piezas) {

        mensaje +=
            `\nPiezas: ${herramienta.piezas}`;

    }


    alert(mensaje);

}


// =====================================================
// VACIAR PEDIDO
// =====================================================

function vaciarPedido() {

    if (pedidoHerramientas.length === 0) {
        return;
    }


    const confirmar =
        confirm(
            "¿Quieres eliminar todas las herramientas del pedido?"
        );


    if (!confirmar) {
        return;
    }


    pedidoHerramientas = [];


    actualizarPedido();

}


// =====================================================
// ENVIAR PEDIDO A WHATSAPP
// =====================================================

function enviarPedidoWhatsApp() {

    if (pedidoHerramientas.length === 0) {

        alert(
            "Primero agrega al menos una herramienta al pedido."
        );

        return;

    }


    const numeroWhatsApp =
        "573237900424";


    let texto =

        `🐝 *PEDIDO DE ALQUILER - BEE HIVE RENTALS*\n\n` +

        `Hola BEE HIVE, quiero consultar la disponibilidad ` +

        `y condiciones para alquilar las siguientes herramientas:\n\n`;


    pedidoHerramientas.forEach((item, posicion) => {

        const herramienta =
            herramientas[item.indice];


        texto +=

            `${posicion + 1}. *${herramienta.nombre}*\n` +

            `   Cantidad: ${item.cantidad}\n` +

            `   Marca: ${herramienta.marca}\n` +

            `   Modelo: ${herramienta.modelo}\n` +

            `   Precio/hora: ${herramienta.precioHora}\n` +

            `   Precio/día: ${herramienta.precioDia}\n` +

            `   Depósito: ${herramienta.deposito}\n\n`;

    });


    texto +=

        `━━━━━━━━━━━━━━━━━━━━\n\n` +

        `📌 *Importante:*\n` +

        `Deseo conocer la disponibilidad, duración del alquiler ` +

        `y condiciones correspondientes.\n\n` +

        `📍 Tocancipá, Cundinamarca\n\n` +

        `Gracias.\n` +

        `BEE HIVE INMOBILIARIA 🐝`;


    const urlWhatsApp =

        "https://api.whatsapp.com/send?phone=" +

        numeroWhatsApp +

        "&text=" +

        encodeURIComponent(texto);


    window.location.href =
        urlWhatsApp;

}


// =====================================================
// FORMULARIO DE CONTACTO → WHATSAPP
// =====================================================

function enviarWhatsApp(event) {

    if (event) {
        event.preventDefault();
    }


    const nombreElement =
        document.getElementById("nombre");

    const correoElement =
        document.getElementById("correo");

    const telefonoElement =
        document.getElementById("telefono");

    const servicioElement =
        document.getElementById("servicio");

    const mensajeElement =
        document.getElementById("mensaje");


    if (
        !nombreElement ||
        !correoElement ||
        !telefonoElement ||
        !servicioElement ||
        !mensajeElement
    ) {

        return;

    }


    const nombre =
        nombreElement.value.trim();

    const correo =
        correoElement.value.trim();

    const telefono =
        telefonoElement.value.trim();

    const mensaje =
        mensajeElement.value.trim();


    if (servicioElement.value === "") {

        alert(
            "Por favor selecciona el servicio que necesitas."
        );

        servicioElement.focus();

        return;

    }


    const servicio =
        servicioElement.options[
            servicioElement.selectedIndex
        ].text;


    if (nombre === "") {

        alert(
            "Por favor escribe tu nombre."
        );

        nombreElement.focus();

        return;

    }


    if (correo === "") {

        alert(
            "Por favor escribe tu correo electrónico."
        );

        correoElement.focus();

        return;

    }


    if (telefono === "") {

        alert(
            "Por favor escribe tu teléfono o WhatsApp."
        );

        telefonoElement.focus();

        return;

    }


    if (mensaje === "") {

        alert(
            "Por favor escribe tu mensaje."
        );

        mensajeElement.focus();

        return;

    }


    const numeroWhatsApp =
        "573237900424";


    const textoWhatsApp =

        `🐝 *NUEVA CONSULTA DESDE LA PÁGINA WEB*\n\n` +

        `👤 *Nombre:* ${nombre}\n\n` +

        `📧 *Correo:* ${correo}\n\n` +

        `📱 *Teléfono / WhatsApp:* ${telefono}\n\n` +

        `🏠 *Servicio solicitado:* ${servicio}\n\n` +

        `📝 *Mensaje:*\n${mensaje}\n\n` +

        `━━━━━━━━━━━━━━━━━━━━\n\n` +

        `*BEE HIVE INMOBILIARIA*\n\n` +

        `📍 Tocancipá, Cundinamarca\n\n` +

        `⏰ 7:00 a. m. a 7:00 p. m.`;


    const urlWhatsApp =

        "https://api.whatsapp.com/send?phone=" +

        numeroWhatsApp +

        "&text=" +

        encodeURIComponent(
            textoWhatsApp
        );


    window.location.href =
        urlWhatsApp;

}


// =====================================================
// MENÚ MÓVIL + INICIALIZACIÓN
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // ---------------------------------------------
        // MENÚ MÓVIL
        // ---------------------------------------------

        const menuBtn =
            document.getElementById("menuBtn");

        const nav =
            document.querySelector(".nav");


        if (menuBtn && nav) {

            menuBtn.addEventListener(
                "click",
                () => {

                    const abierto =
                        nav.classList.toggle("show");


                    menuBtn.setAttribute(
                        "aria-expanded",
                        abierto
                            ? "true"
                            : "false"
                    );

                }
            );

        }


        // ---------------------------------------------
        // GENERAR CATÁLOGO
        // ---------------------------------------------

        generarCatalogo();


        // ---------------------------------------------
        // INICIALIZAR PEDIDO
        // ---------------------------------------------

        actualizarPedido();

    }
);