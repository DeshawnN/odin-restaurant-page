import css from './style.css';
import * as HOME from './home.js';

(function() {
    const content = document.querySelector('.content');
    HOME.generateView(content);
})();

