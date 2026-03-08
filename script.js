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

// Manejo de apertura del sobre
const envelopeScreen = document.getElementById('envelopeScreen');
const invitationWrapper = document.getElementById('invitationWrapper');

envelopeScreen.addEventListener('click', () => {
  // Reproducir sonido
  playOpenSound();

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
  }, 800);
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
