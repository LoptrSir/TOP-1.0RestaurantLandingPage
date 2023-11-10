import {myFooter, createTabs} from '../module.js';

const headerDiv = createTabs();
const contentDiv = document.querySelector('.content');
contentDiv.insertBefore(headerDiv, contentDiv.firstElementChild);

const footer = myFooter();
document.body.appendChild(footer);