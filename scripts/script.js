document.addEventListener('DOMContentLoaded', () => {
  const mailBtn = document.getElementById('mail-btn');
  const toast = document.getElementById('toast-mail');
  const email = 'ignaciodiasgundin@gmail.com';

  mailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(email);

    toast.style.display = 'flex';
    toast.textContent = '¡Correo copiado!';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 1800);
  });
});