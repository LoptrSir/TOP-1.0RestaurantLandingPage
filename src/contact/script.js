import {myFooter, createTabs, createContactContainer} from '../module.js';

const headerDiv = createTabs(window.location.pathname);
// const headerDiv = createTabs();
const contentDiv = document.querySelector('.content');
contentDiv.insertBefore(headerDiv, contentDiv.firstElementChild);


// document.addEventListener('DOMContentLoaded', function(){
//     const headerDiv = createTabs();
//     const contentDiv = document.querySelector('.content');
//     contentDiv.insertBefore(headerDiv, contentDiv.firstElementChild);
//     contentDiv.appendChild(footer);
//     });


const contactDetailsContainer = createContactContainer('800.EAT.TACO', '2345 Las Hacienda Ln. Taco City Limits State of Euphoria 84123', 'FeedMySoul@TACOCAT.com');

const detailsDiv = document.querySelector('.details');
detailsDiv.appendChild(contactDetailsContainer);

const footer = myFooter();
document.body.appendChild(footer);
