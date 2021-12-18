import css from './style.css';
import * as DOM from './dom-manip';

(function() {
    const content = document.querySelector('.content');
    DOM.generateMainPage(content);
})();

