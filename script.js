
const starContainer = document.getElementById("stars");

// Background stars
for (let i = 0; i < 100; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.textContent = "✦";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.fontSize = (Math.random() * 12 + 5) + "px";
  star.style.animationDelay = Math.random() * 3 + "s";
  starContainer.appendChild(star);
}

// Navigate between screens
function show(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

// Enter universe
function enterUniverse() {
  show("home");
}

// Planet messages
const planetData = [
  {
    emoji: "🌸",
    title: "Planet of Happiness",
    message: "Some people make ordinary moments beautiful just by being themselves. Never lose that little magic, Hermione. 💗"
  },
  {
    emoji: "🪐",
    title: "Planet of Memories",
    message: "Every conversation, every laugh and every little moment can become a beautiful memory. Here's to many more! ✨"
  },
  {
    emoji: "🌙",
    title: "Planet of Dreams",
    message: "Keep dreaming, keep growing and never stop believing in yourself. Your story has so many beautiful chapters ahead. 🌙"
  }
];

function planet(index) {
  const data = planetData[index];

  document.getElementById("planetEmoji").textContent = data.emoji;
  document.getElementById("planetTitle").textContent = data.title;
  document.getElementById("planetMessage").textContent = data.message;

  document.getElementById("planetModal").classList.add("show");
}

function closeModal() {
  document.getElementById("planetModal").classList.remove("show");
}

// Secret stars
const messages = [
  "You deserve happiness on ordinary days too. 🌸",
  "Your presence matters more than you know. 💖",
  "Never stop being wonderfully yourself. 🦋",
  "Some friendships become beautiful chapters of life. ✨"
];

let opened = new Set();

function reveal(button, index) {
  if (opened.has(index)) return;

  opened.add(index);
  button.classList.add("unlocked");
  button.textContent = "★";

  document.getElementById("starMessage").textContent =
    messages[index];

  if (opened.size === 4) {
    document.getElementById("starMessage").textContent =
      "You unlocked every secret! The entire sky belongs to you. 🌌";
  }
}

// Plot twist
function twist() {
  document.getElementById("twistMessage").classList.add("show");
}

// Restart
function restart() {
  opened.clear();

  document.querySelectorAll(".star-grid button").forEach(button => {
    button.classList.remove("unlocked");
    button.textContent = "✦";
  });

  document.getElementById("starMessage").textContent =
    "Your surprises are waiting...";

  document.getElementById("twistMessage").classList.remove("show");

  closeModal();
  show("intro");
}
