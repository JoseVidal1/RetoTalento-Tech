function validateForm() {
    const tarjeta = document.getElementById('tarjeta').value.trim();
    const fecha = document.getElementById('fecha').value.trim();
    const cvc = document.getElementById('CVC').value.trim();

    // Validación de número de tarjeta (16 dígitos numéricos)
    const tarjetaRegex = /^\d{16}$/;
    if (!tarjetaRegex.test(tarjeta)) {
        alert('Por favor, ingresa un número de tarjeta válido (16 dígitos).');
        return false;
    }

    // Validación de fecha de expiración (no vacía y no pasada)
    if (!fecha) {
        alert('Por favor, selecciona una fecha de expiración válida.');
        return false;
    }
    const fechaActual = new Date();
    const fechaExpiracion = new Date(fecha + '-01');
    if (fechaExpiracion < fechaActual) {
        alert('La fecha de expiración no puede ser en el pasado.');
        return false;
    }

    // Validación de CVC (3 dígitos numéricos)
    const cvcRegex = /^\d{3}$/;
    if (!cvcRegex.test(cvc)) {
        alert('Por favor, ingresa un código CVC válido (3 dígitos).');
        return false;
    }

    // Si todo está correcto
    alert('Pago procesado con éxito.');
    return true;
}
