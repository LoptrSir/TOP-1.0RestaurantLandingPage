export const myFooter = () => {
  const footer = document.createElement("div");
  footer.style.backgroundColor = "#333";
  footer.style.fontSize = "0.6rem";
  footer.style.color = "#f8afe5";
  footer.style.padding = "3px";
  footer.style.textAlign = "center";
  footer.style.position = "fixed";
  footer.style.width = "100%";
  footer.style.bottom = "0";
  footer.innerHTML = "loptrSir";
  return footer;
};

// export function createTabs() {
//   let activeTabIndex = 0;

//   const tabsData = [
//     { name: "Home", url: "../index.html" }, // live-server mod './<folders>.html'
//     { name: "Menu", url: "../menu/index.html" },
//     { name: "Contact", url: "../contact/index.html" },
//   ];

//   const headerDiv = document.createElement("div");
//   headerDiv.className = "header";

//   function setActiveTab(index) {
//     const previousActiveTab = document.querySelector(".tab.active");
//     if (previousActiveTab) {
//       previousActiveTab.classList.remove("active");
//     }
//     const clickedTab = document.querySelector(`.tab:nth-child(${index + 1})`);
//     if (clickedTab) {
//       clickedTab.classList.add("active");
//     }
//     activeTabIndex = index;
//     console.log("setActiveTab", index);
//   }

//   headerDiv.addEventListener("click", function (event) {
//     const clickedTab = event.target.closest(".tab");
//     if (clickedTab) {
//       const index = Array.from(clickedTab.parentNode.children).indexOf(
//         clickedTab
//       );
//       setActiveTab(index);
//       console.log("ModuleListener", index);
//     }
//   });

//   tabsData.forEach((tabInfo, index) => {
//     const tab = document.createElement("a");
//     tab.classList.add("tab");

//     if (index === activeTabIndex) {
//       tab.classList.add("active");
//     }

//     tab.textContent = tabInfo.name;
//     tab.href = tabInfo.url;

//     headerDiv.appendChild(tab);
//   });
//   console.log("export", activeTabIndex);

//   return {
//     createTabs: () => headerDiv,
//     setActiveTab: setActiveTab,
//     activeTabIndex: () => activeTabIndex,
//   };
// }

export function createTabs() {
  let activeTabIndex = 0;

  const tabsData = [
    { name: "Home", url: "../index.html" }, // live-server mod './<folders>.html'
    { name: "Menu", url: "../menu/index.html" },
    { name: "Contact", url: "../contact/index.html" },
  ];

  const headerDiv = document.createElement("div");
  headerDiv.className = "header";

  function setActiveTab(index) {
    const previousActiveTab = document.querySelector(".tab.active");
    if (previousActiveTab) {
      previousActiveTab.classList.remove("active");
    }
    const clickedTab = document.querySelector(`.tab:nth-child(${index + 1})`);
    if (clickedTab) {
      clickedTab.classList.add("active");
    }
    activeTabIndex = index;
    console.log('setActiveTab', index);
  }

  headerDiv.addEventListener('click', function (event) {
    const clickedTab = event.target.closest('.tab');
    if (clickedTab) {
      const index = Array.from(clickedTab.parentNode.children).indexOf(clickedTab);
      setActiveTab(index);
      console.log('ModuleListener', index);
    }
  });

  tabsData.forEach((tabInfo, index) => {
    const tab = document.createElement("a");
    tab.classList.add("tab");

    if (index === activeTabIndex) {
      tab.classList.add("active");
    }

    tab.textContent = tabInfo.name;
    tab.href = tabInfo.url;

tab.addEventListener("click", () => {
  setActiveTab(index);
  console.log("setActiveTab", index);
});

    headerDiv.appendChild(tab);
  });
  console.log('export', activeTabIndex );
  return headerDiv;
}

export const imagePaths = [
  "src/images/tacosSign.jpeg",
  "src/images/streetGrill.jpg",
  "src/images/tacoAssembly.jpg",
  "src/images/tacocat.jpg",
  "src/images/tacoPlate.jpg",
  "src/images/tacoPlate2.jpg",
];

export function createContactContainer(phone, address, email) {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const createContactItem = (label, value) => {
    const item = document.createElement("div");
    item.classList.add("contact-item");

    const itemLabel = document.createElement("span");
    itemLabel.classList.add("label");
    itemLabel.textContent = label;

    const itemValue = document.createElement("span");
    itemValue.classList.add("value");
    itemValue.textContent = value;

    item.appendChild(itemLabel);
    item.appendChild(itemValue);

    return item;
  };

  const phoneItem = createContactItem("Phone: ", phone || "");
  const addressItem = createContactItem("Address: ", address || "");
  const emailItem = createContactItem("Website: ", email || "");

  contactContainer.appendChild(phoneItem);
  contactContainer.appendChild(addressItem);
  contactContainer.appendChild(emailItem);

  return contactContainer;
}

export function createMenuContent(menu) {
  const menuContent = document.createElement("div");
  menuContent.classList.add("menuContent");
  const menus = document.querySelector(".menus");
  menus.appendChild(menuContent);

  const menuItem = document.createElement("p");
  menuItem.innerHTML = menu;

  menuContent.appendChild(menuItem);

  return menuContent;
}
