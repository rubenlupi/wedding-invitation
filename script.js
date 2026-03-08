// Wedding Invitation JavaScript
console.log('Wedding Invitation loaded');

const rsvpBtn = document.getElementById('rsvpBtn');
const rsvpForm = document.getElementById('rsvpForm');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const thankYou = document.getElementById('thankYou');

rsvpBtn.addEventListener('click', () => {
  rsvpBtn.style.display = 'none';
  rsvpForm.classList.remove('hidden');
  setTimeout(() => {
    rsvpForm.classList.add('show');
  }, 10);
});

cancelBtn.addEventListener('click', () => {
  rsvpForm.classList.remove('show');
  setTimeout(() => {
    rsvpForm.classList.add('hidden');
    rsvpBtn.style.display = 'inline-block';
    resetForm();
  }, 300);
});

submitBtn.addEventListener('click', () => {
  const guestName = document.getElementById('guestName').value;
  const attending = document.querySelector('input[name="attending"]:checked').value;
  const guestCount = document.getElementById('guestCount').value;
  const message = document.getElementById('message').value;

  if (!guestName.trim()) {
    alert('Por favor, ingresa tu nombre');
    return;
  }

  // Aquí puedes agregar lógica para enviar los datos a un servidor
  console.log('RSVP Data:', {
    name: guestName,
    attending: attending,
    guestCount: guestCount,
    message: message
  });

  // Mostrar mensaje de agradecimiento
  rsvpForm.classList.remove('show');
  setTimeout(() => {
    rsvpForm.classList.add('hidden');
    thankYou.classList.remove('hidden');
    setTimeout(() => {
      thankYou.classList.add('show');
    }, 10);
    resetForm();
  }, 300);
});

function resetForm() {
  document.getElementById('guestName').value = '';
  document.getElementById('guestCount').value = '';
  document.getElementById('message').value = '';
  document.querySelector('input[name="attending"][value="yes"]').checked = true;
}

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
