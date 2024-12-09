//Visitas
const visitCountElement = document.getElementById('visit-count');
let visitCount = localStorage.getItem('visitCount') || 0;

// Verificacion
if (!localStorage.getItem('isUserCounted')) {
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    localStorage.setItem('isUserCounted', 'true');
}
visitCountElement.textContent = visitCount;
