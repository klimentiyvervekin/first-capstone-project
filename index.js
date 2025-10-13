// --- toggle for each ---
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const answerBtn = card.querySelector('[data-js="show-answerBtn"]');
  const answer = card.querySelector('[data-js="answerBtn"]');
  const bookmarkImg = card.querySelector('[data-js="bookmarkImg"]');

  // toggle answer button
  answerBtn.addEventListener("click", () => {
    answer.classList.toggle("hidden");
  });

  // toggle bookmark button
  bookmarkImg.addEventListener("click", () => {
    const currentSrc = bookmarkImg.getAttribute("src");

    if (currentSrc.includes("bookmark_unreaded")) {
      bookmarkImg.setAttribute("src", "./assets/bookmark_readed.png");
    } else {
      bookmarkImg.setAttribute("src", "./assets/bookmark_unreaded.png");
    }
  });
});