import pizzaImage from './pizza.jpg';
import * as Home from './home';
import * as About from './about';
import * as Reviews from './reviews';
import * as Menu from './menu';
import * as Contact from './contact';

export function generateNavBar(element) {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";

    homeButton.addEventListener('click', generateView.bind(this, element, Home));

    const aboutButton = document.createElement('button');
    aboutButton.textContent = "About";

    aboutButton.addEventListener('click', generateView.bind(this, element, About));

    const reviewsButton = document.createElement('button');
    reviewsButton.textContent = "Reviews";
    reviewsButton.addEventListener('click', generateView.bind(this, element, Reviews));

    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    menuButton.addEventListener('click', generateView.bind(this, element, Menu));

    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact Us";
    contactButton.addEventListener('click', generateView.bind(this, element, Contact));

    navbar.appendChild(homeButton);
    navbar.appendChild(aboutButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(reviewsButton);
    navbar.appendChild(contactButton);
    element.appendChild(navbar);
}

export function generateMainContent(element) {
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

export function generateView(element, view) {
    clearContent(element);
    generateNavBar(element);
    generateMainContent(element);
    view.generateContent(element);
}

export function clearContent(element) {
    element.innerHTML = '';
}





