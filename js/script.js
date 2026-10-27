document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // EJERCICIO 1: La poción mágica de Alicia
    // ==========================================
    const formPocion = document.getElementById("form-pociom");
    const resultadoEj1 = document.getElementById("resultado-ej1");

    formPocion.addEventListener("submit", (evento) => {
        evento.preventDefault(); // Evita recargar la página

        // Captura de datos con getElementById y conversión numérica
        let alturaInicial = parseFloat(document.getElementById("altura-inicial").value);
        let cantidadPocion = parseFloat(document.getElementById("cantidad-pocion").value);
        let alturaPuertaFija = 120; // cm

        // Validación de entradas
        if (isNaN(alturaInicial) || isNaN(cantidadPocion) || alturaInicial <= 0 || cantidadPocion < 0 || cantidadPocion > 500) {
            resultadoEj1.textContent = "Error: Ingrese valores válidos. La altura debe ser mayor a 0 y la poción debe estar entre 0 y 500 ml.";
            return;
        }

        // Regla matemática: Cada ml reduce 0.2 cm o aumenta 0.3 cm según el umbral, o regla directa: 
        // Nueva altura = Altura inicial + (Cantidad * 0.1) - (Cantidad > 200 ? 50 : 0) -> Hagamos una regla clara:
        // Supongamos que la regla es: Nueva Altura = Altura Inicial + (Cantidad de poción * 0.25)
       let nuevaAltura = alturaInicial - (cantidadPocion * 0.25);
        // Regla mostrada en interfaz
        let reglaTexto = "Regla aplicada: Nueva Altura = Altura Inicial + (Cantidad de Poción * 0.25)\n";

        let mensajeFinal = "";
        if (nuevaAltura === alturaPuertaFija) {
            mensajeFinal = "¡Alicia encaja perfectamente en el marco de la puerta!";
        } else if (nuevaAltura < alturaPuertaFija) {
            mensajeFinal = "¡Puede pasar! Alicia es lo suficientemente pequeña para cruzar la puerta.";
        } else {
            mensajeFinal = "No puede pasar. Alicia es demasiado alta y no cabe por la puerta.";
        }

        // Mostrar resultados en la interfaz con textContent
        resultadoEj1.textContent = `${reglaTexto}Altura inicial: ${alturaInicial} cm\nCantidad consumida: ${cantidadPocion} ml\nAltura calculada: ${nuevaAltura.toFixed(2)} cm\nEstado: ${mensajeFinal}`;
    });


    // ==========================================
    // EJERCICIO 2: La merienda del Sombrerero Loco
    // ==========================================
    const formMerienda = document.getElementById("form-merienda");
    const resultadoEj2 = document.getElementById("resultado-ej2");

    formMerienda.addEventListener("submit", (evento) => {
        evento.preventDefault();

        let nombreInvitado = document.getElementById("nombre-invitado").value.trim();
        let tipoBebida = document.getElementById("tipo-bebida").value;
        let cantidadTazas = parseInt(document.getElementById("cantidad-tazas").value);

        // Validaciones
        if (nombreInvitado === "" || !tipoBebida || isNaN(cantidadTazas) || cantidadTazas < 1 || cantidadTazas > 20) {
            resultadoEj2.textContent = "Error: Complete todos los campos correctamente. La cantidad de tazas debe ser de 1 a 20.";
            return;
        }

        let precioUnitario = 0;
        let nombreBebidaLegible = "";

        // Estructura switch para determinar el precio unitario
        switch (tipoBebida) {
            case "te":
                precioUnitario = 10;
                nombreBebidaLegible = "Té Loco";
                break;
            case "cafe":
                precioUnitario = 12;
                nombreBebidaLegible = "Café del Lirón";
                break;
            case "infusion":
                precioUnitario = 15;
                nombreBebidaLegible = "Infusión de Rosas de la Reina";
                break;
            case "chocolate":
                precioUnitario = 18;
                nombreBebidaLegible = "Chocolate del Gato de Cheshire";
                break;
            default:
                precioUnitario = 0;
        }

        let subtotal = precioUnitario * cantidadTazas;
        let descuento = 0;

        // Condición explícita para aplicar descuento (ej. si compra más de 5 tazas, 10% de descuento)
        if (cantidadTazas >= 5) {
            descuento = subtotal * 0.10;
        }

        let total = subtotal - descuento;

        // Salida estructurada
        resultadoEj2.textContent = 
            `Invitado: ${nombreInvitado}\n` +
            `Bebida seleccionada: ${nombreBebidaLegible}\n` +
            `Cantidad de tazas: ${cantidadTazas}\n` +
            `Precio unitario: Bs. ${precioUnitario.toFixed(2)}\n` +
            `Subtotal: Bs. ${subtotal.toFixed(2)}\n` +
            `Descuento aplicado: Bs. ${descuento.toFixed(2)}\n` +
            `Total a pagar: Bs. ${total.toFixed(2)}`;
    });


    // ==========================================
    // EJERCICIO 3: El desafío de la Reina de Corazones
    // ==========================================
    const formReina = document.getElementById("form-reina");
    const resultadoEj3 = document.getElementById("resultado-ej3");

    formReina.addEventListener("submit", (evento) => {
        evento.preventDefault();

        let cantidadCartas = parseInt(document.getElementById("cantidad-cartas").value);

        // Validación
        if (isNaN(cantidadCartas) || cantidadCartas < 1 || cantidadCartas > 100) {
            resultadoEj3.textContent = "Error: Ingrese un número entero válido entre 1 y 100.";
            return;
        }

        let secuencia = [];
        let cantidadPares = 0;
        let cantidadImpares = 0;
        let sumaPares = 0;
        let sumaImpares = 0;

        // Estructura repetitiva (for)
        for (let i = 1; i <= cantidadCartas; i++) {
            secuencia.push(i);
            if (i % 2 === 0) {
                cantidadPares++;
                sumaPares += i;
            } else {
                cantidadImpares++;
                sumaImpares += i;
            }
        }

        let evaluacionMayor = "";
        if (sumaPares > sumaImpares) {
            evaluacionMayor = "El grupo de números PARES tiene mayor suma.";
        } else if (sumaImpares > sumaPares) {
            evaluacionMayor = "El grupo de números IMPARES tiene mayor suma.";
        } else {
            evaluacionMayor = "¡Empate exacto entre las sumas de pares e impares!";
        }

        // Mostrar resultados
        resultadoEj3.textContent = 
            `Secuencia analizada: [ ${secuencia.join(", ")} ]\n\n` +
            `--- ESTADÍSTICAS DEL JUICIO ---\n` +
            `Cantidad de números pares: ${cantidadPares} (Suma total: ${sumaPares})\n` +
            `Cantidad de números impares: ${cantidadImpares} (Suma total: ${sumaImpares})\n\n` +
            `Veredicto de la Reina: ${evaluacionMayor}`;
    });

});