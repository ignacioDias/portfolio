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


let currentTechnology = null;

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.technologies button[data-tech]');

  function showAllProjects() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => card.style.display = '');
  }

  function filterProjectsByTech(tech) {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      const tagEls = card.querySelectorAll('.tag-badge[data-tech]');
      const techNames = Array.from(tagEls).map(t => (t.dataset.tech && t.dataset.tech.trim().toLowerCase()) || '');
      const target = (tech && tech.trim().toLowerCase()) || '';

      // Safer matching:
      // - exact match
      // - token match (split by non-alphanum) so 'spring boot' matches 'spring' but 'c' won't match 'javascript'
      const matches = techNames.some(tn => {
        if (!tn || !target) return false;
        if (tn === target) return true;

        const splitTokens = s => s.split(/[^a-z0-9]+/).filter(Boolean);
        const tnTokens = splitTokens(tn);
        const targetTokens = splitTokens(target);

        // if any token equals between sets, consider it a match
        return tnTokens.some(token => targetTokens.includes(token)) || targetTokens.some(token => tnTokens.includes(token));
      });

      card.style.display = matches ? '' : 'none';
    });
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tech = button.getAttribute('data-tech');

      // Toggle: if same tech clicked again, clear filter
      if (currentTechnology === tech) {
        currentTechnology = null;
        buttons.forEach(b => b.classList.remove('active'));
        showAllProjects();
        return;
      }

      // Set new tech and filter
      currentTechnology = tech;
      buttons.forEach(b => b.classList.toggle('active', b === button));
      filterProjectsByTech(currentTechnology);
    });
  });

  // If there is an active button in the DOM by default, apply its filter
  const preActive = document.querySelector('.technologies button.active[data-tech]');
  if (preActive) {
    currentTechnology = preActive.dataset.tech;
    filterProjectsByTech(currentTechnology);
  }
});
