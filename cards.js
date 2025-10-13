// cards.js logic of bookmarks without show button

function initBookmarksForCard(card) {
  try {
    const bookmarkImg = card.querySelector('[data-js="bookmarkImg"]');
    if (!bookmarkImg) return; // if in the card there is not icon then we go out

    if (bookmarkImg.dataset.active === undefined) {
      bookmarkImg.dataset.active = bookmarkImg.src.includes("bookmark_readed")
        ? "true"
        : "false";
    }

    // <---- main part! ---->

    bookmarkImg.addEventListener("click", () => {
      // we took a card as id; if not - dont touch localStorage
      const questionEl = card.querySelector(".card__question");
      const questionId = questionEl ? questionEl.textContent.trim() : null;

      const isActive = bookmarkImg.dataset.active === "true";
      const newState = !isActive;

      // visual switch
      bookmarkImg.src = newState
        ? "./assets/bookmark_readed.png"
        : "./assets/bookmark_unreaded.png";
      bookmarkImg.dataset.active = String(newState);

      // if we have a card but not question then we dont go to localStorage
      if (!questionId) return;

      // rec LS
      let saved;
      try {
        saved = JSON.parse(localStorage.getItem("bookmarks") || "[]");
        if (!Array.isArray(saved)) saved = [];
      } catch {
        saved = [];
      }

      if (newState) {
        // add card
        if (!saved.find((it) => it.id === questionId)) {
          saved.push({ id: questionId, html: card.outerHTML });
        }
      } else {
        // delete card
        saved = saved.filter((it) => it.id !== questionId);
      }

      localStorage.setItem("bookmarks", JSON.stringify(saved));

      // if we on bookmarks page — can delete card if bookmark not clicked
      if (!newState && location.pathname.includes("bookmarks")) {
        card.remove();
      }
    });
  } catch (e) {
    console.warn("Bookmark init failed for a card:", e);
  }
}

function initBookmarksOnPage() {
  document.querySelectorAll(".card").forEach(initBookmarksForCard);
}

window.initBookmarksOnPage = initBookmarksOnPage;

document.addEventListener("DOMContentLoaded", initBookmarksOnPage);
