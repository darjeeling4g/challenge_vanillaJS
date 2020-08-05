// const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "Hi! from JS";
document.title = "HI! there";

console.dir(title);
console.dir(document);
// modifying the DOM

function handleResize(event) {
    console.log("I have been resized");
    console.log(event);
}
window.addEventListener("resize", handleResize);

function handleClick() {
    title.style.color = "blue";
}
title.addEventListener("click", handleClick);
// event handlers
