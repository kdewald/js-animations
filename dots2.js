const canvas = document.getElementById('DotsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.mouseX = 0;
window.mouseY = 0;

const dots = [];

function createDots(numDots) {
  for (let i = 0; i < numDots; i++) {
    dots.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 5,
      vx: Math.random() * 2 - 1, // Velocity in X direction
      vy: Math.random() * 2 - 1, // Velocity in Y direction
    });
  }
}

function updateDots() {
  for (const dot of dots) {
    dot.x += dot.vx; // Update X position
    dot.y += dot.vy; // Update Y position

    // Bounce off canvas edges
    if (dot.x < dot.radius || dot.x > canvas.width - dot.radius) {
      dot.vx *= -1;
    }
    if (dot.y < dot.radius || dot.y > canvas.height - dot.radius) {
      dot.vy *= -1;
    }
  }
}

function drawDots() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const dot of dots) {
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.fill();
  }
}

function animate() {
  requestAnimationFrame(animate);
  updateDots();
  drawDots();
}

createDots(100); // Adjust number of dots
addEventListener('mousemove', (event) => {
  window.mouseX = event.clientX;
  window.mouseY = event.clientY;
});

animate();
