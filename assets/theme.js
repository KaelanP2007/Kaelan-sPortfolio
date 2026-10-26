// Dark on the first visit; remember an explicit light/dark choice afterwards.
(() => {
  const key = 'kp-theme-v2';
  let saved;
  try { saved = localStorage.getItem(key); } catch {}
  const apply = theme => {
    document.documentElement.dataset.theme = theme;
    const button = document.querySelector('[data-theme-toggle]');
    if (button) {
      button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    }
  };
  apply(saved === 'light' ? 'light' : 'dark');
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('[data-theme-toggle]');
    if (!button) return;
    button.hidden = false;
    apply(document.documentElement.dataset.theme);
    button.addEventListener('click', () => {
      saved = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(saved);
      try { localStorage.setItem(key, saved); } catch {}
    });
  });
})();
