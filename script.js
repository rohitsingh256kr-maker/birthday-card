function openHeart() {
  const heart = document.querySelector('.heart');
  const celebration = document.getElementById('celebration');

  // Animate heart opening
  heart.style.transform = "scale(1.5) rotate(-45deg)";
  heart.style.opacity = "0";

  // After animation, hide heart and show celebration
  setTimeout(() => {
    heart.style.display = "none";
    celebration.style.display = "block";
    startFlowerRise();
  }, 1000);
}

// Function to create rising flowers
function startFlowerRise() {
  const container = document.getElementById('falling-flowers');
  const flowers = ["🌸","🌹","🌻","🌼","🌷","💐"];
  
  setInterval(() => {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (3 + Math.random() * 2) + "s";
    container.appendChild(flower);

    // Remove flower after rising
    setTimeout(() => {
      flower.remove();
    }, 5000);
  }, 500);
}
