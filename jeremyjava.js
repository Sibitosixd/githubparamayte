const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * 70 + 'vw'; /* Rango de movimiento */
    noBtn.style.top = Math.random() * 70 + 'vh';
});