let estado = 0;

function cambiarLuz() {
    const roja = document.getElementById("luz-roja");
    const amarilla = document.getElementById("luz-amarilla");
    const verde = document.getElementById("luz-verde");
    const mensaje = document.getElementById("mensaje");

    // Apagamos todas las luces
    roja.className = "luz";
    amarilla.className = "luz";
    verde.className = "luz";

    estado++;

    if (estado === 1) {
        roja.classList.add("activa-roja");
        mensaje.textContent = "🔴 Rojo: ¡Detente!";
    }

    else if (estado === 2) {
        amarilla.classList.add("activa-amarilla");
        mensaje.textContent = "🟡 Amarillo: ¡Precaución!";
    }

    else if (estado === 3) {
        verde.classList.add("activa-verde");
        mensaje.textContent = "🟢 Verde: Puedes avanzar.";
    }

    else {
        estado = 1;
        roja.classList.add("activa-roja");
        mensaje.textContent = "🔴 Rojo: ¡Detente!";
    }
}

function corregirEncuesta() {
    let puntaje = 0;

    const rojo = document.querySelector('input[name="rojo"]:checked');
    const amarillo = document.querySelector('input[name="amarillo"]:checked');
    const verde = document.querySelector('input[name="verde"]:checked');

    if (rojo && rojo.value === "correcto") {
        puntaje++;
    }

    if (amarillo && amarillo.value === "correcto") {
        puntaje++;
    }

    if (verde && verde.value === "correcto") {
        puntaje++;
    }

    const resultado = document.getElementById("resultadoEncuesta");

    if (puntaje === 3) {
        resultado.textContent = "🎉 ¡Excelente! Respondiste las 3 correctamente.";
        resultado.style.color = "green";
    } else if (puntaje === 2) {
        resultado.textContent = "👍 ¡Muy bien! Respondiste 2 de 3 correctamente.";
        resultado.style.color = "orange";
    } else if (puntaje === 1) {
        resultado.textContent = "🙂 Respondiste 1 de 3 correctamente. ¡Podés intentarlo de nuevo!";
        resultado.style.color = "orange";
    } else {
        resultado.textContent = "❌ No acertaste ninguna. ¡Volvé a intentarlo!";
        resultado.style.color = "red";
    }
}
