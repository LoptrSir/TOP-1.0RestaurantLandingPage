import {myFooter, createTabs, createContactContainer} from '../module.js';

const headerDiv = createTabs();
const contentDiv = document.querySelector('.content');
contentDiv.insertBefore(headerDiv, contentDiv.firstElementChild);

const footer = myFooter();
document.body.appendChild(footer);
console.log('contact script');

// const contact = document.querySelector('.contact');
// let phone = {Phone: '800.EAT.TACO'};
// let location = {location: '2345 Las Hacienda Ln. n\ Taco City Limits n\ 84123'};
// let website ={website: 'url'};

const contactDetailsContainer = createContactContainer('800.EAT.TACO', '2345 Las Hacienda Ln. Taco City Limits State of Euphoria 84123', 'FeedMySoul@TACOCAT.com');

const detailsDiv = document.querySelector('.details');
detailsDiv.appendChild(contactDetailsContainer);