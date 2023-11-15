//Restaurant Landing Page 11/2/23

import { myFooter, createTabs } from "./module.js";

document.addEventListener("DOMContentLoaded", function () {
  const headerDiv = createTabs(window.location.pathname);
  const contentDiv = document.querySelector(".content");
  contentDiv.insertBefore(headerDiv, contentDiv.firstElementChild);
});

// const headerDiv = createTabs();
// const contentDiv = document.querySelector('.content');
// contentDiv.insertBefore(headerDiv, contentDiv.firstElementChild);
// const footer = myFooter();
// contentDiv.appendChild(footer);

const footer = myFooter();
document.body.appendChild(footer);

console.log("home script");
