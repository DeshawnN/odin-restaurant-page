import reviews from './reviews.json';
import pizzaImage from './pizza.jpg';
export function generateNavBar(element) {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";

    homeButton.addEventListener('click', generateMainPage.bind(this, element));

    const aboutButton = document.createElement('button');
    aboutButton.textContent = "About";

    aboutButton.addEventListener('click', generateAboutPage.bind(this, element));

    const reviewsButton = document.createElement('button');
    reviewsButton.textContent = "Reviews";
    reviewsButton.addEventListener('click', generateReviewPage.bind(this, element));


    navbar.appendChild(homeButton);
    navbar.appendChild(aboutButton);
    navbar.appendChild(reviewsButton);
    element.appendChild(navbar);
}

export function generateMainContent(element, img) {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-body');

    const heading = document.createElement('h1');
    heading.textContent = "Papa Giorno's Pizza Palace";

    const image = document.createElement('img');
    image.src = pizzaImage;
    image.width = 500;

    mainContent.appendChild(heading);
    mainContent.appendChild(image);
    element.appendChild(mainContent);
}

export function generateHomeContent(element) {
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

export function generateAboutContent(element) {
    const mainBody = element.querySelector('.main-body');

    const paragraph = document.createElement('p');
    paragraph.textContent = "Papa Giorno's was founded in the year 2002. In the last 20 years we have been providing a gold standard experience to the local area.";
    
    mainBody.appendChild(paragraph);
}

export function generateReviewContent(element) {
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

export function clearContent(element) {
    element.innerHTML = '';
}

export function generateMainPage(element) {
    clearContent(element);
    generateNavBar(element);
    generateMainContent(element);
    generateHomeContent(element);
}

export function generateAboutPage(element) {
    clearContent(element);
    generateNavBar(element);
    generateMainContent(element);
    generateAboutContent(element);
}

export function generateReviewPage(element) {
    clearContent(element);
    generateNavBar(element);
    generateMainContent(element);
    generateReviewContent(element);
}