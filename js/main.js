/*
==============================================================
Autor: Laura Dayren Elizalde Morales
Materia: Graficación 
Tema: API Canvas 2D
Descripción:
Dibujo programado de una fresa utilizando más de 30 figuras básicas.
Se utilizan arcos, curvas Bézier, líneas y elipses.
==============================================================
*/

const canvas = document.getElementById("canvasFresa");
const ctx = canvas.getContext("2d");

/* =============================
   FUNCIÓN PRINCIPAL
============================= */

function dibujarFresa() {
    dibujarCuerpo();
    dibujarHojas();
    dibujarSemillas();
}

window.onload = dibujarFresa;

/* =============================
   CUERPO DE LA FRESA
============================= */

function dibujarCuerpo() {

    ctx.beginPath();
    ctx.moveTo(250, 100);

    ctx.bezierCurveTo(400, 100, 450, 300, 250, 450);
    ctx.bezierCurveTo(50, 300, 100, 100, 250, 100);

    ctx.fillStyle = "#e63946";
    ctx.fill();
    ctx.strokeStyle = "#1d3557";
    ctx.lineWidth = 4;
    ctx.stroke();
}

/* =============================
   HOJAS
============================= */

function dibujarHojas() {

    ctx.fillStyle = "#2a9d8f";

    // Hoja central
    ctx.beginPath();
    ctx.ellipse(250, 80, 30, 60, 0, 0, Math.PI * 2);
    ctx.fill();

    // Hoja izquierda
    ctx.beginPath();
    ctx.ellipse(200, 90, 30, 60, -0.5, 0, Math.PI * 2);
    ctx.fill();

    // Hoja derecha
    ctx.beginPath();
    ctx.ellipse(300, 90, 30, 60, 0.5, 0, Math.PI * 2);
    ctx.fill();
}

/* =============================
   SEMILLAS (más de 30 figuras)
============================= */

function dibujarSemillas() {

    ctx.fillStyle = "#f1faee";

    for (let i = 0; i < 35; i++) {

        let x = Math.random() * 250 + 125;
        let y = Math.random() * 250 + 150;

        ctx.beginPath();
        ctx.ellipse(x, y, 6, 10, 0, 0, Math.PI * 2);
        ctx.fill();
    }
}