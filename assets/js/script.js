// === Theme Toggle ===
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
htmlElement.classList.add("dark");
} else {
htmlElement.classList.remove("dark");
}

themeToggle?.addEventListener("click", () => {
htmlElement.classList.toggle("dark");

if (htmlElement.classList.contains("dark")) {
localStorage.setItem("theme", "dark");
} else {
localStorage.setItem("theme", "light");
}
});

// === Smooth Scroll for Navigation ===
document.querySelectorAll("a[href^='#']").forEach(anchor => {
anchor.addEventListener("click", function (e) {
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({ behavior: "smooth" });
});
});

// === Mascot Interactions ===
const mascot = document.getElementById("mascot");
const bubble = document.getElementById("mascot-bubble");

if (mascot && bubble) {
mascot.addEventListener("mouseover", () => {
mascot.classList.add("scale-110");
});

mascot.addEventListener("mouseleave", () => {
mascot.classList.remove("scale-110");
});

mascot.addEventListener("click", () => {
bubble.classList.toggle("hidden");
bubble.innerText = getRandomMessage();
});
}

// Random fun messages from mascot
function getRandomMessage() {
const messages = [
"Hey, I’m Orphy 🐧",
"Keep coding, you’re awesome!",
"Hack Club rocks 🚀",
"Did you drink water today? 💧",
"Let’s build something cool ✨",
];
return messages[Math.floor(Math.random() * messages.length)];
}

