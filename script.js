// --- Part 2: JS Functions Demonstrating Scope & Parameters ---

let globalMessage = "I am a global variable"; // Global scope

function greet(name) { // Function with parameter
  let localMessage = "I am local"; // Local scope
  console.log(`${globalMessage} and ${localMessage}. Hello, ${name}!`);
  return `Greeting sent to ${name}`;
}

// Test
console.log(greet("Winnie"));

// Reusable function to toggle CSS class
function toggleClass(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.toggle(className);
  return element.classList.contains(className);
}

// --- Part 3: JS Triggered Animations ---

// 1. Animate box
document.getElementById("jsAnimateBtn").addEventListener("click", () => {
  toggleClass("animatedBox", "js-animate");
});

// 2. Flip card
document.getElementById("flipCardBtn").addEventListener("click", () => {
  toggleClass("flipCard", "flipped");
});

// 3. Modal popup
document.getElementById("showModalBtn").addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
});
