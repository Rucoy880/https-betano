let saldo = 0;
const saldoElement = document.getElementById('saldo');
const ultimoGanho = document.getElementById('ultimo-ganho');
const spinBtn = document.getElementById('spinBtn');
const mensagem = document.getElementById('mensagem');
const winSound = document.getElementById('winSound');
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// Confete
function createParticles(count = 150) {
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 10 + 5,
      speed: Math.random() * 6 + 3,
      color: ['#ff0000', '#00ff00', '#ffff00', '#ff00ff', '#00ffff', '#ffd700'][Math.floor(Math.random() * 6)],
      rotation: Math.random() * 360,
      rotSpeed: Math.random() * 12 - 6
    });
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.y < canvas.height);
  particles.forEach(p => {
    p.y += p.speed;
    p.rotation += p.rotSpeed;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation * Math.PI / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
    ctx.restore();
  });
  requestAnimationFrame(animateConfetti);
}

// Saldo animado
function animateSaldo(target) {
  let current = saldo;
  const increment = (target - current) / 100;
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
      winSound.play();
      createParticles();
      mensagem.textContent = "JACKPOT! VOCÊ É O REI DA TIGRE!";
      mensagem.style.color = "#ffd700";
    }
    saldoElement.textContent = `R$ ${current.toFixed(2).replace('.', ',')}`;
  }, 30);
}

// Spin falso
function spin() {
  spinBtn.disabled = true;
  spinBtn.textContent = "GIRANDO...";
  mensagem.textContent = "Girando... Boa sorte! 🍀";

  const reels = document.querySelectorAll('.reel');
  reels.forEach(reel => reel.style.animationPlayState = 'running');

  setTimeout(() => {
    reels.forEach(reel => reel.style.animationPlayState = 'paused');
    const ganhou = Math.random() > 0.2;
    if (ganhou) {
      const ganho = Math.floor(Math.random() * 12000) + 3000;
      saldo += ganho;
      ultimoGanho.textContent = `Último ganho: + R$ ${ganho.toLocaleString('pt-BR')}`;
      animateSaldo(saldo);
    } else {
      mensagem.textContent = "Quase... tenta de novo!";
      mensagem.style.color = "#ff0000";
    }
    spinBtn.disabled = false;
    spinBtn.textContent = "GIRAR AGORA (R$ 1,00)";
  }, 3500);
}

spinBtn.addEventListener('click', spin);
animateConfetti();

// Saldo inicial fake alto
setTimeout(() => {
  saldo = 18567.45;
  animateSaldo(saldo);
  mensagem.textContent = "Bem-vindo ao Fortune Tiger VIP! Já entrou ganhando!";
}, 1500);
