import menuMacker from './menu';
let menu = menuMacker(['Главная','О себе', 'Контакты'], 'menu');
document.body.appendChild(menu);

console.log('in index.js');