const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];
const snowflakeCount = 200;

function createSnowflakes() {
    for (let i = 0; i < snowflakeCount; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 4 + 1,
            speed: Math.random() * 1 + 0.5,
            opacity: Math.random()
        });
    }
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    for (let i = 0; i < snowflakeCount; i++) {
        const flake = snowflakes[i];
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
    }
    ctx.fill();
    updateSnowflakes();
}

function updateSnowflakes() {
    for (let i = 0; i < snowflakeCount; i++) {
        const flake = snowflakes[i];
        flake.y += flake.speed;
        if (flake.y > canvas.height) {
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
        }
    }
}

function animateSnowflakes() {
    drawSnowflakes();
    requestAnimationFrame(animateSnowflakes);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

createSnowflakes();
animateSnowflakes();
