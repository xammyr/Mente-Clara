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
        "psicologo@correo.com": {
            pass: "psicologo123",
            rol: "psicologo"
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
            window.location.href = "psicologo.html";
        }

    } else {
        alert("Correo o contraseña incorrectos.");
    }
});