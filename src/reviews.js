import reviews from './reviews.json';

export function generateContent(element) {
    const mainBody = element.querySelector('.main-body');

    for (const review of reviews) {
        const div = document.createElement('div');
        div.classList.add('review');

        const quoteText = document.createElement('p');
        quoteText.textContent = review.text;
        div.appendChild(quoteText);

        const quoteAuthor = document.createElement('div');
        quoteAuthor.textContent = review.author;
        quoteAuthor.classList.add('quote');
        div.appendChild(quoteAuthor);

        mainBody.appendChild(div);
    }
}