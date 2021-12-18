import menu from './menu.json';

export function generateContent(element) {
    const mainBody = element.querySelector('.main-body');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    for (const item of menu) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        
        const name = document.createElement('div');
        name.textContent = item.name;
        itemDiv.appendChild(name);

        const price = document.createElement('div');
        price.textContent = item.price.toFixed(2);
        itemDiv.appendChild(price);
        
        menuDiv.appendChild(itemDiv);
    }
    mainBody.appendChild(menuDiv);
}