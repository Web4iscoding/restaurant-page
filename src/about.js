export default function() {
    const about = document.createElement("div");
    about.className = "about";
    const firstDiv = document.createElement("div");
    firstDiv.textContent = "About";
    const secondDiv = document.createElement("div");
    secondDiv.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus distinctio fugiat odit nemo eveniet optio ipsum qui, similique atque accusantium neque, maxime cum ipsa a placeat ducimus officia eligendi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus distinctio fugiat odit nemo eveniet optio ipsum qui, similique atque accusantium neque, maxime cum ipsa a placeat ducimus officia eligendi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus distinctio fugiat odit nemo eveniet optio ipsum qui, similique atque accusantium neque, maxime cum ipsa a placeat ducimus officia eligendi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus distinctio fugiat odit nemo eveniet optio ipsum qui, similique atque accusantium neque, maxime cum ipsa a placeat ducimus officia eligendi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus distinctio fugiat odit nemo eveniet optio ipsum qui, similique atque accusantium neque, maxime cum ipsa a placeat ducimus officia eligendi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus distinctio fugiat odit nemo eveniet optio ipsum qui, similique atque accusantium neque, maxime cum ipsa a placeat ducimus officia eligendi?";
    const photo = document.createElement("div");
    photo.className = "photo";
    about.appendChild(firstDiv);
    about.appendChild(secondDiv);
    about.appendChild(photo);
    document.querySelector("#content").appendChild(about);
}