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
  const allBtn = document.querySelector('.technologies .tech-all');

  function showAllProjects() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => card.style.display = '');
  }

  function setActiveTech(activeButton) {
    currentTechnology = activeButton ? activeButton.getAttribute('data-tech') : null;
    buttons.forEach(b => {
      const active = b === activeButton;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    if (allBtn) allBtn.setAttribute('aria-pressed', activeButton ? 'false' : 'true');
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

        // Special case: Java button also shows Spring projects
        if (target === 'java' && tn === 'spring') return true;

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
        setActiveTech(null);
        showAllProjects();
        return;
      }

      // Set new tech and filter
      setActiveTech(button);
      filterProjectsByTech(currentTechnology);
    });
  });

  if (allBtn) {
    allBtn.addEventListener('click', () => {
      setActiveTech(null);
      showAllProjects();
    });
  }

  // If there is an active button in the DOM by default, apply its filter
  const preActive = document.querySelector('.technologies button.active[data-tech]');
  if (preActive) {
    currentTechnology = preActive.dataset.tech;
    preActive.setAttribute('aria-pressed', 'true');
    if (allBtn) allBtn.setAttribute('aria-pressed', 'false');
    filterProjectsByTech(currentTechnology);
  }
});
