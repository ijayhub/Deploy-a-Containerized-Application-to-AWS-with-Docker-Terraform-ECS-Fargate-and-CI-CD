// Simple dark/light mode toggle
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('theme-toggle');
    const THEME_KEY = 'theme';
    const body = document.body;
    // Set initial theme
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark') body.classList.add('dark');
    btn.addEventListener('click', function() {
      body.classList.toggle('dark');
      localStorage.setItem(THEME_KEY, body.classList.contains('dark') ? 'dark' : 'light');
    });
  });
})();
