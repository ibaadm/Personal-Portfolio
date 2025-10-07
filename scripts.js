document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.changing');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF6'];
    let colorIndex = 0;

    setInterval(() => {
        textElement.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);
});