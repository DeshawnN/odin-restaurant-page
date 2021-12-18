export function generateContent(element) {
    const mainBody = element.querySelector('.main-body');

    const div = document.createElement('div');
    div.classList.add('contact');

    const heading = document.createElement('h2');
    heading.textContent = "Contact Us";
    div.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Make your order today! Dial 1-(800) 555-5555";
    div.appendChild(paragraph);

    mainBody.appendChild(div);
}