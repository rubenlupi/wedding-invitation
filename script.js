// Wedding Invitation JavaScript
console.log('Wedding Invitation loaded');

// Función para crear sonido de apertura de sobre
function playOpenSound() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Crear un sonido suave de "papel"
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Configurar el sonido
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.3);

    // Configurar volumen
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);

    // Reproducir
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.4);
  } catch (error) {
    console.log('Audio not supported:', error);
  }
}

// Función para crear efecto de confetti
function createConfetti() {
  const colors = ['#d4a574', '#b8935c', '#e8dfd5', '#f8f3ed', '#8b7355'];
  const confettiCount = 80;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 0.3 + 's';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(confetti);

    // Eliminar el confetti después de la animación
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

// Manejo de apertura del sobre
const envelopeScreen = document.getElementById('envelopeScreen');
const envelopeContainer = document.querySelector('.envelope-container');
const invitationWrapper = document.getElementById('invitationWrapper');

envelopeScreen.addEventListener('click', () => {
  // Reproducir sonido
  playOpenSound();

  // Animar el contenedor del sobre
  envelopeContainer.classList.add('opening');

  // Crear efecto de confetti
  setTimeout(() => {
    createConfetti();
  }, 400);

  // Animar salida del sobre
  envelopeScreen.classList.add('opening');

  // Después de la animación, ocultar el sobre y mostrar la invitación
  setTimeout(() => {
    envelopeScreen.style.display = 'none';
    invitationWrapper.classList.remove('hidden');

    // Pequeño delay para que el display none tome efecto antes del fade in
    setTimeout(() => {
      invitationWrapper.classList.add('show');
    }, 50);
  }, 1200);
});

// Animación de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
