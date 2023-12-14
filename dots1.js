const canvas = document.getElementById('DotsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dots = [];

class LightDot {
  constructor(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.fill();
  }

  update() {
    this.y -= this.speed;
    if (this.y < -this.radius * 2) {
      this.y = canvas.height + this.radius;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  }
}

function init() {
  for (let i = 0; i < 100; i++) {
    const radius = Math.random() * 3 + 1; // random radius between 1 and 4
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speed = Math.random() * 2 + 1; // random speed between 1 and 3
    dots.push(new LightDot(x, y, radius, speed));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dots.forEach(dot => {
    dot.update();
  });
}

init();
animate();
