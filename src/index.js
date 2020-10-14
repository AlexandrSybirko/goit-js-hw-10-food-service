import './styles.css';
import menuTpl from './templates/menu-markup.hbs';
import menu from './menu.json';

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// делаем разметку
const galleryMenu = document.querySelector('ul.js-menu');

const markupMenu = menuTpl(menu);
galleryMenu.insertAdjacentHTML('beforeend', markupMenu);
