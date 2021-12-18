export function generateContent(element) {
    const mainBody = element.querySelector('.main-body');

    const paragraph = document.createElement('p');
    paragraph.textContent = "At Papa Giorno's, every Pizza is a ";

    const strongText = document.createElement('strong');
    strongText.textContent = "Gold Experience";
    paragraph.appendChild(strongText)

    const quote = document.createElement('div');
    quote.classList.add("review");
    
    const quoteText = document.createElement('p');
    quoteText.textContent = 'I, Giorno Giovanna, will make you an amazing Pizza';
    quote.appendChild(quoteText);

    const quoteAuthor = document.createElement('div');
    quoteAuthor.classList.add('quote');
    quoteAuthor.textContent = "Giorno Giovanna (Founder)";
    quote.append(quoteAuthor);
    
    mainBody.appendChild(paragraph);
    mainBody.appendChild(quote);
}