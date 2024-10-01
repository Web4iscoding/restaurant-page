export default function() {
    const menu = document.createElement("div");
    menu.className = "menu";
    const menuTitle = document.createElement("div");
    menuTitle.textContent = "Menu";
    menu.appendChild(menuTitle);
    const menuList = document.createElement("div");
    menuList.className = "menu-list";
    for(let i = 1; i <= 6; i++) {
        const card = document.createElement("div");
        const firstDiv = document.createElement("div");
        const secondDiv = document.createElement("div");
        firstDiv.textContent = i;
        secondDiv.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id provident quam adipisci similique earum doloribus, consectetur ipsam debitis harum voluptas, a sequi repellendus eum repudiandae quisquam nisi exercitationem corrupti.";
        card.appendChild(firstDiv);
        card.appendChild(secondDiv);
        menuList.appendChild(card);
    }
    menu.appendChild(menuList);

    document.querySelector("#content").appendChild(menu);
};
