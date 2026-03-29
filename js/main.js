const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

// Harfleri tüm canvas'a rastgele daðýt - hemen baþlasýn
for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * (canvas.height / fontSize));
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35);

const aside = document.querySelector('aside');
aside.addEventListener('click',(eventData)=>{
    eventData.stopImmediatePropagation();

});

const apps = document.querySelector('#apps');
apps.addEventListener('click',(eventData)=>{
    eventData.stopImmediatePropagation();
    aside.style.visibility = 'visible';

});
document.querySelector('html').addEventListener('click',(eventData)=>{
    aside.style.visibility = 'hidden';

});
document.querySelector('#svg-close').addEventListener('click',(eventData)=>{ eventData.preventDefault(); window.location.href = 'index.html'; });





