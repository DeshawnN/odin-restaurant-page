import { clearContent, generateNavBar, generateMainContent } from './dom-manip';

export function generateContent(element) {
    const mainBody = element.querySelector('.main-body');

    const paragraph = document.createElement('p');
    paragraph.textContent = "Papa Giorno's was founded in the year 2002. In the last 20 years we have been providing a gold standard experience to the local area.";
    
    mainBody.appendChild(paragraph);
}

export function generateView(element) {
    clearContent(element);
    generateNavBar(element);
    generateMainContent(element);
    generateContent(element);
}