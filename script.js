// Fecha de desbloqueo (Cambia la fecha a la que desees)
const fechaDesbloqueo = new Date("May 9, 2025 19:10:00").getTime();

const countdown = setInterval(function() {
    const ahora = new Date().getTime();
    const diferencia = fechaDesbloqueo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (diferencia < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").style.display = "none";
    document.getElementById("mensaje").style.display = "block"; 
}
}, 1000);

