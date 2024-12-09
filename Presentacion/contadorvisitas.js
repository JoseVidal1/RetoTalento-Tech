if (!sessionStorage.getItem('visited')) {

    let visitas = localStorage.getItem('contador');

    // Si no hay visitas almacenadas, inicializa a 0
    if (!visitas) {
        visitas = 0;
    }
    // Incrementa el contador
    visitas++;

    sessionStorage.setItem('visited', true);

    // Guarda el nuevo contador en el almacenamiento local
    localStorage.setItem('contador', visitas);
}
// Muestra el contador en la página
const visitCountDisplay = localStorage.getItem('contador') || 0;
document.getElementById('visit-count').textContent = visitCountDisplay;