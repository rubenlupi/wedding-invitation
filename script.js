// Wedding Invitation JavaScript
console.log('Wedding Invitation loaded');

// Función para reproducir sonido de apertura de sobre
function playOpenSound() {
  try {
    const audio = new Audio('sounds/envelope-open.mp3');
    audio.volume = 0.5;
    audio.play().catch(error => {
      console.log('Audio playback failed:', error);
    });
  } catch (error) {
    console.log('Audio not supported:', error);
  }
}

// Función para efecto de máquina de escribir
function typewriterEffect(element, text, speed = 80) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
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
const thankYouScreen = document.getElementById('thankYouScreen');
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

  // Después de la animación del sobre, mostrar pantalla de agradecimiento
  setTimeout(() => {
    envelopeScreen.style.display = 'none';
    thankYouScreen.classList.remove('hidden');

    // Pequeño delay para mostrar con fade in
    setTimeout(() => {
      thankYouScreen.classList.add('show');

      // Iniciar efecto de máquina de escribir
      const typewriterElement = document.getElementById('typewriterText');
      const text = 'Dos corazones<br>latiendo al compás de uno';
      setTimeout(() => {
        typewriterEffect(typewriterElement, text, 80);
      }, 500);
    }, 50);

    // Después de 6.5 segundos, ocultar agradecimiento y mostrar invitación
    setTimeout(() => {
      thankYouScreen.style.transition = 'opacity 1s ease-out';
      thankYouScreen.classList.remove('show');

      setTimeout(() => {
        thankYouScreen.style.display = 'none';
        invitationWrapper.classList.remove('hidden');

        // Pequeño delay para que el display none tome efecto antes del fade in
        setTimeout(() => {
          invitationWrapper.classList.add('show');
        }, 50);
      }, 1000);
    }, 6500);
  }, 1000);
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
