import pizzaImage from './pizza.jpg';
import * as Home from './home';
import * as About from './about';
import * as Reviews from './reviews';

export function generateNavBar(element) {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";

    homeButton.addEventListener('click', Home.generateView.bind(this, element));

    const aboutButton = document.createElement('button');
    aboutButton.textContent = "About";

    aboutButton.addEventListener('click', About.generateView.bind(this, element));

    const reviewsButton = document.createElement('button');
    reviewsButton.textContent = "Reviews";
    reviewsButton.addEventListener('click', Reviews.generateView.bind(this, element));

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


export function generateMenuPage(element) {

}

export function generateContactPage(element) {

}

export function clearContent(element) {
    element.innerHTML = '';
}





