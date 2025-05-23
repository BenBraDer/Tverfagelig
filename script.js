const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rainImage = new Image();
rainImage.src = "";

let drops = [];

function makeDrop() {
  let x = Math.random() * canvas.width;
  let y = -50;
  let speed = 1 + Math.random() * 1.5;
  drops.push({ x, y, speed });
}

function updateRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = drops.length - 1; i >= 0; i--) {
    let d = drops[i];
    d.y += d.speed;
    ctx.drawImage(rainImage, d.x, d.y, 20, 20);
    if (d.y > canvas.height) drops.splice(i, 1);
  }
}

setInterval(makeDrop, 150);
function animate() {
  updateRain();
  requestAnimationFrame(animate);
}

rainImage.onload = () => {
  animate();
};
