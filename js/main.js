/*
==============================================================
Autor: Laura Dayren Elizalde Morales
Materia: Graficación 
Tema: API Canvas 2D
Descripción:
Dibujo programado de una fresa utilizando más de 30 figuras
básicas (curvas Bézier, elipses, líneas y arcos).
Se utiliza técnica de recorte (clip) para mantener las
semillas dentro del cuerpo de la fresa.
==============================================================
*/

const canvas = document.getElementById("canvasFresa");
const ctx = canvas.getContext("2d");

/* =============================
   FUNCIÓN PRINCIPAL
============================= */
window.onload = function () {
    dibujarCuerpo();
    dibujarHojas();
    dibujarSemillas();
};

/* =============================
   CUERPO DE LA FRESA
============================= */
function dibujarCuerpo() {

    ctx.beginPath();
    ctx.moveTo(250, 120);

    ctx.bezierCurveTo(420, 120, 450, 300, 250, 460);
    ctx.bezierCurveTo(50, 300, 80, 120, 250, 120);

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
    ctx.ellipse(250, 95, 35, 65, 0, 0, Math.PI * 2);
    ctx.fill();

    // Hoja izquierda
    ctx.beginPath();
    ctx.ellipse(200, 105, 35, 65, -0.6, 0, Math.PI * 2);
    ctx.fill();

    // Hoja derecha
    ctx.beginPath();
    ctx.ellipse(300, 105, 35, 65, 0.6, 0, Math.PI * 2);
    ctx.fill();
}

/* =============================
   SEMILLAS (recortadas)
============================= */
function dibujarSemillas() {

    ctx.save(); // Guardar estado

    // Crear contorno del cuerpo para recorte
    ctx.beginPath();
    ctx.moveTo(250, 120);
    ctx.bezierCurveTo(420, 120, 450, 300, 250, 460);
    ctx.bezierCurveTo(50, 300, 80, 120, 250, 120);
    ctx.clip(); // Limita dibujo al interior

    ctx.fillStyle = "#f1faee";

    // Distribución en filas ordenadas
    for (let fila = 0; fila < 6; fila++) {
        for (let col = 0; col < 6; col++) {

            let x = 150 + col * 40;
            let y = 180 + fila * 45;

            ctx.beginPath();
            ctx.ellipse(x, y, 6, 10, 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    ctx.restore(); // Restaurar estado
}