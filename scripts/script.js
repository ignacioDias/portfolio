document.addEventListener('DOMContentLoaded', () => {
  const mailBtns = document.getElementsByClassName('mail-btn');
  const toast = document.getElementById('toast-mail');
  const email = 'ignaciodiasgundin@gmail.com';

  Array.from(mailBtns).forEach(mailBtn => {
    mailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(email);

      toast.style.display = 'flex';
      toast.textContent = '¡Correo copiado!';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 1800);
    });
  });
});