//Restaurant Landing Page 11/2/23

import { myFooter, createTabs } from "./module.js";

const headerDiv = createTabs();
const contentDiv = document.querySelector('.content');
contentDiv.insertBefore(headerDiv, contentDiv.firstElementChild);


// document.addEventListener('DOMContentLoaded', function(){
//     const headerDiv = createTabs();
//     const contentDiv = document.querySelector('.content');
//     contentDiv.insertBefore(headerDiv, contentDiv.firstElementChild);
//     contentDiv.appendChild(footer);
//     });


// document.addEventListener("DOMContentLoaded", function () {
//   const { createTabs, setActiveTab, activeTabIndex } = createTabs();
//   const headerDiv = createTabs();
//   const contentDiv = document.querySelector(".content");
//   contentDiv.insertBefore(headerDiv, contentDiv.firstElementChild);
//   contentDiv.appendChild(footer);
// });
// const { createTabs, setActiveTab, activeTabIndex } = createTabs();

const footer = myFooter();
// contentDiv.appendChild(footer);

console.log("home script");
