//Restaurant Landing Page 11/2/23

import {myFooter, createTabs} from './module.js';

const headerDiv = createTabs();
const contentDiv = document.querySelector('.content');
contentDiv.insertBefore(headerDiv, contentDiv.firstElementChild);

const footer = myFooter();
contentDiv.appendChild(footer);

console.log('home script.js');