const form = document.querySelector('[data-js="questionForm"]');
const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');

const tag1Input = document.querySelector('[data-js="tag1"]');
const tag2Input = document.querySelector('[data-js="tag2"]');
const tag3Input = document.querySelector('[data-js="tag3"]');

const opt1Input = document.querySelector('[data-js="opt1"]');
const opt2Input = document.querySelector('[data-js="opt2"]');
const opt3Input = document.querySelector('[data-js="opt3"]');

const newCardsSection = document.querySelector('[data-js="newCards"]');

// console.log(form, questionInput, answerInput, tagInput, newCardsSection);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const question =  questionInput.value.trim();
    const rightAnswer = answerInput.value.trim();

    const tag1 = tag1Input.value.trim();
    const tag2 = tag2Input.value.trim();
    const tag3 = tag3Input.value.trim();

    const opt1 = opt1Input.value.trim();
    const opt2 = opt2Input.value.trim();
    const opt3 = opt3Input.value.trim();

    //  add new card
    const card = document.createElement('article');
    card.classList.add("card");
    card.innerHTML = `
      <img src="./assets/bookmark_unreaded.png" alt="" class="card__bookmark-img" aria-hidden="true" data-js="bookmarkImg">

        <p class="card__question">${question}</p>

        <button quiz-button class="button card__button">${opt1}</button>
        <button quiz-button class="button card__button">${opt2}</button>
        <button quiz-button class="button card__button">${opt3}</button>

          <button type="button" class="button card__button" data-js="show-answerBtn">Show Answer:</button>
            <p class="card__answer hidden" data-js="answerBtn">${rightAnswer}</p>

          <section class="tags">
            <span class="tag">${tag1}</span>
            <span class="tag">${tag2}</span>
            <span class="tag">${tag3}</span>
          </section>
          `;

          // show new card
          newCardsSection.prepend(card);

          // ----- buttons -----
        const showAnswerBtn = card.querySelector('[data-js="show-answerBtn"]');
        const answerBtn = card.querySelector('[data-js="answerBtn"]');
        const bookmarkImg = card.querySelector('[data-js="bookmarkImg"]');

        // show answer button
        showAnswerBtn.addEventListener("click", () => {
          answerBtn.classList.toggle('hidden');
        });

        // bookmark button
        bookmarkImg.addEventListener('click', () => {
  const currentSrc = bookmarkImg.getAttribute('src');
  
  if (currentSrc.includes('bookmark_unreaded')) {
    bookmarkImg.setAttribute('src', './assets/bookmark_readed.png');
  } else {
    bookmarkImg.setAttribute('src', './assets/bookmark_unreaded.png');
  }
        });

        // form reset
        form.reset();
});