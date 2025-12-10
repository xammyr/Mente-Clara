// Verificar si hay sesión activa
const rol = localStorage.getItem("sesionActiva");

if (!rol) {
    alert("Debes iniciar sesión.");
    window.location.href = "login.html";
}