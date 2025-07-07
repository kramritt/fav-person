// Confetti Animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class ConfettiPiece {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.random() * 6 + 4;
    this.speed = Math.random() * 2 + 1;
    this.color = ["#ff69b4", "#ff66cc", "#ff99cc"][Math.floor(Math.random() * 3)];
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) this.y = -10;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

let confetti = Array.from({ length: 200 }, () => new ConfettiPiece());

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateConfetti);
}

animateConfetti();

// Music Toggle
const musicBtn = document.getElementById("toggle-music");
const bgMusic = document.getElementById("background-music");

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "🔇 Pause Music";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🔊 Play Music";
  }
});
