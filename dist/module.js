export const myFooter = () => {
    const footer = document.createElement('div');
    footer.style.backgroundColor = '#333';
    footer.style.fontSize = '0.6rem';
    footer.style.color = '#f8afe5';
    footer.style.padding = '3px';
    footer.style.textAlign = 'center';
    footer.style.position = 'fixed';
    footer.style.width = '100%';
    footer.style.bottom = '0';
    footer.innerHTML = 'loptrSir';
    return footer;
    };
    

export function createTabs() {
const tabsData = [
    { name: 'Home', url: './home/index.html'},
    { name: 'Menu', url: './menu/index.html'},
    { name: 'Contact', url: './contact/index.html'},
];

const headerDiv = document.createElement('div');
headerDiv.className = 'header';

tabsData.forEach(tabInfo => {
    const tab = document.createElement('a');
    tab.textContent = tabInfo.name;
    tab.href = tabInfo.url;
    headerDiv.appendChild(tab);
})
return headerDiv;
};