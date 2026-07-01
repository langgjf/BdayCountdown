const targetDate = new Date("August 16, 2026 00:00:00").getTime();

let birthdayMode = false;

function triggerBirthday() {

    birthdayMode = true;

    document.body.style.background = "white";

    document.querySelector(".container").innerHTML = `

        <img src="spoiledRabbit.gif" class="gif">

        <h1 class="birthday-title">
    ✨ Happy Birthdayyy Baby Princess Sharkie Rhea!! ✨
        </h1>

    `;

    startFireworks();

}

document.addEventListener("keydown", e => {

    if (e.code === "Space") {

        triggerBirthday();

    }

});

function updateCountdown() {

    if (birthdayMode) return;

    const now = new Date().getTime();

    const difference = targetDate - now;

    if (difference <= 0) {

        triggerBirthday();

        return;

    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysElement.innerText = String(days).padStart(2, "0");
    hoursElement.innerText = String(hours).padStart(2, "0");
    minutesElement.innerText = String(minutes).padStart(2, "0");
    secondsElement.innerText = String(seconds).padStart(2, "0");

}

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

setInterval(updateCountdown, 1000);

updateCountdown();


// FLOWERS

const effects = document.getElementById("background-effects");

const flowers = ["🌸", "🌼", "🍃", "🌺"];

function createFlower() {

    const f = document.createElement("div");

    f.className = "falling";

    f.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

    f.style.left = Math.random() * 100 + "vw";

    f.style.fontSize = (18 + Math.random() * 18) + "px";

    f.style.animationDuration = (8 + Math.random() * 8) + "s";

    effects.appendChild(f);

    setTimeout(() => f.remove(), 17000);

}

setInterval(createFlower, 500);


// HEARTS

function createHeart() {

    const h = document.createElement("div");

    h.className = "heart";

    h.innerHTML = "💖";

    h.style.left = Math.random() * 100 + "vw";

    h.style.bottom = "-40px";

    h.style.fontSize = (20 + Math.random() * 20) + "px";

    h.style.animationDuration = (5 + Math.random() * 3) + "s";

    effects.appendChild(h);

    setTimeout(() => h.remove(), 9000);

}

setInterval(createHeart, 1800);


// FIREWORKS

const canvas = document.getElementById("fireworks");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

let particles = [];

function explode() {

    const x = Math.random() * canvas.width;

    const y = Math.random() * canvas.height * 0.7;

    for (let i = 0; i < 70; i++) {

        particles.push({

            x: x,

            y: y,

            dx: (Math.random() - 0.5) * 8,

            dy: (Math.random() - 0.5) * 8,

            life: 100,

            color: `hsl(${Math.random() * 360},100%,60%)`

        });

    }

}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {

        p.x += p.dx;

        p.y += p.dy;

        p.life--;

        ctx.fillStyle = p.color;

        ctx.beginPath();

        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);

        ctx.fill();

        if (p.life <= 0) {

            particles.splice(index, 1);

        }

    });

    requestAnimationFrame(animate);

}

function startFireworks() {

    canvas.style.display = "block";

    animate();

    setInterval(explode, 700);

}