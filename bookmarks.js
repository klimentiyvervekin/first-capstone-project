// bookmarks.js - this file shows it on the page bookmarks what we saved
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('[data-js="bookmarksContainer"]');

  const saved = JSON.parse(localStorage.getItem('bookmarks') || '[]');

  // if no cards (empty)
  if (saved.length === 0) {
    container.innerHTML = `
      <article class="card" style="padding: 20px; text-align: center; opacity: 0.7;">
        No bookmarks yet.
      </article>`;
    return;
  }

  // clear container and add cards from the localStorage
  container.innerHTML = '';
  saved.forEach(item => {
    container.insertAdjacentHTML('beforeend', item.html);
  });

  if (typeof window.initAllCards === 'function') {
    window.initAllCards();
  }
});