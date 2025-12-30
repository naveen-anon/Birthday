const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let hearts = [];

function createHeart(x = Math.random() * canvas.width, y = canvas.height) {
    hearts.push({
        x,
        y,
        size: Math.random() * 6 + 6,
        speed: Math.random() * 1.5 + 0.5,
        alpha: 1
    });
}

function drawHeart(h) {
    ctx.globalAlpha = h.alpha;
    ctx.fillStyle = "#ff4d88";
    ctx.font = `${h.size * 3}px serif`;
    ctx.fillText("❤", h.x, h.y);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((h, i) => {
        h.y -= h.speed;
        h.alpha -= 0.003;
        drawHeart(h);
        if (h.alpha <= 0) hearts.splice(i, 1);
    });
    requestAnimationFrame(animate);
}

setInterval(() => createHeart(), 200);

canvas.addEventListener("click", e => {
    for (let i = 0; i < 12; i++) {
        createHeart(e.clientX + Math.random()*20 -10, e.clientY);
    }
});

animate();
