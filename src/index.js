import css from './style.css';
import * as Home from './home';
import * as DOM from './dom-manip';

(function() {
    const content = document.querySelector('.content');
    DOM.generateView(content, Home);
})();

