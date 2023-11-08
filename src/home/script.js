//Restaurant Landing Page 11/2/23

import {myFooter, createTabs} from '../module.js';

const headerDiv = createTabs();
document.body.insertBefore(headerDiv, document.body.firstChild);

const footer = myFooter();
document.body.appendChild(footer);

console.log('home script.js');