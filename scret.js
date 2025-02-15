const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

let timer = setTimeout(() => {
    window.location.href = 'error.html'; // Redirigir después de 1 minuto
}, 20000);

// Función para mover el botón "No"
function moveNoBtn() {
    const randomX = Math.random() * 80;  
    const randomY = Math.random() * 80;

    noBtn.style.position = 'absolute';
    noBtn.style.top = randomY + '%';
    noBtn.style.left = randomX + '%';

    yesBtn.style.transform = "scale(1.2)"; 
    yesBtn.style.transition = "transform 0.3s ease"; 
}

// Evento para PC (mouseover)
noBtn.addEventListener('mouseover', moveNoBtn);

// Evento para móviles (touchstart y touchmove)
noBtn.addEventListener('touchstart', moveNoBtn);
noBtn.addEventListener('touchmove', moveNoBtn);

// Restablecer el tamaño del botón "Sí"
yesBtn.addEventListener('transitionend', function () {
    yesBtn.style.transform = "scale(1)"; 
});

// Redirecciones al hacer clic
yesBtn.addEventListener('click', function () {
    clearTimeout(timer);  // Detener el temporizador si hace clic en "Sí"
    window.location.href = 'exito.html'; 
});

noBtn.addEventListener('click', function () {
    clearTimeout(timer);  // Detener el temporizador si hace clic en "No"
    window.location.href = 'error.html';
});





