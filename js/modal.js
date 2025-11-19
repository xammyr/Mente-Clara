// ======================= MODAL UNIVERSAL =========================

// Mostrar modal con texto dinámico
function mostrarModalExpediente(nombre) {
    const modal = document.getElementById("modalExpediente");
    const texto = document.getElementById("modalTexto");

    texto.innerText = `Mostrando expediente de ${nombre}`;
    modal.style.display = "flex";
}

// Cerrar modal
function cerrarModal() {
    document.getElementById("modalExpediente").style.display = "none";
}