import {myFooter, createTabs, createMenuContent} from '../module.js';

const headerDiv = createTabs();
const contentDiv = document.querySelector('.content');
contentDiv.insertBefore(headerDiv, contentDiv.firstElementChild);

// document.addEventListener('DOMContentLoaded', function(){
//     const headerDiv = createTabs();
//     const contentDiv = document.querySelector('.content');
//     contentDiv.insertBefore(headerDiv, contentDiv.firstElementChild);
//     contentDiv.appendChild(footer);
//     //  console.log('DOMListener');
//     });

const menus = ['<strong>Birria Tacos:</strong> <em>(pronounced “bee-ree-ah”)</em> This traditional slow-cooked stew made from a combination of sweet, spicy, and smoky dried chiles from Jalisco, Mexico. It is served with limes, tortillas, white onions, cilantro. and a cup of birria consume.', '<strong>Tacos Al Pastor</strong> Thinly sliced pork is marinated in a combination of dried chilies, spices, pineapple, and achiote paste. Charcoal roasted on a vertical trompo. As the meat browns it\'s shaved off and served in corn tortillas with finely chopped onions, cilantro, diced pineapple, and a wedge of lime.', '<strong>Barbacoa Tacos</strong> Shredded beef that has been slowly braised in a broth of toasted chile de arbol, quajillo, onion, garlic, and spices. Served on corn tortillas with finely chopped onion, cilantro avacado, and a wedge of lime.' , '<strong>Fish Tacos</strong> Choice of grilled or fried haddock or salmon. Served on corn tortillas with chredded cabbbage, pico de gallo, and a citrus sour cream sauce.', ];

menus.forEach(menu => {
        createMenuContent(menu);
    });

const footer = myFooter();
// document.body.appendChild(footer);

console.log('Menu script');