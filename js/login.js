// Esperar a que el usuario envíe el formulario
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();

    // Credenciales válidas (simulación local)
    const cuentas = {
        "cliente@correo.com": {
            pass: "cliente123",
            rol: "cliente"
        },
        "psiquiatra@correo.com": {
            pass: "psiquiatra123",
            rol: "psiquiatra"
        }
    };

    // Validación
    if (cuentas[email] && cuentas[email].pass === password) {

        // Guardar sesión
        localStorage.setItem("sesionActiva", cuentas[email].rol);

        // Redirección según rol
        if (cuentas[email].rol === "cliente") {
            window.location.href = "cliente.html";
        } else {
            window.location.href = "psiquiatra.html";
        }

    } else {
        alert("Correo o contraseña incorrectos.");
    }
});