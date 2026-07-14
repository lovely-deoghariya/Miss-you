// Change Pages
function nextPage(page) {

let pages = document.querySelectorAll(".page");

pages.forEach(p => p.classList.remove("active"));

document.getElementById("page" + page).classList.add("active");

}

// YES Button
function yesAnswer() {

nextPage(4);

createHearts();

}

// NO Button Move
function moveNo() {

let btn = document.getElementById("noBtn");

let x = Math.random() * 250 - 125;

let y = Math.random() * 250 - 125;

btn.style.transform = `translate(${x}px, ${y}px)`;

}

// Floating Hearts
function createHearts() {

setInterval(() => {

let heart = document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";

heart.style.left = Math.random() * 100 + "vw";

heart.style.top = "-20px";

heart.style.fontSize = (20 + Math.random() * 25) + "px";

heart.style.pointerEvents = "none";

heart.style.animation = "heartFall 5s linear forwards";

document.body.appendChild(heart);

setTimeout(() => {

heart.remove();

}, 5000);

}, 300);

}

// Heart Animation
let style = document.createElement("style");

style.innerHTML = `
@keyframes heartFall{
0%{
transform:translateY(-20px) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}
}
`;

document.head.appendChild(style);
