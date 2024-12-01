function randomRotate() {
    const rotateValue = Math.random() < 0.5 ? 2 : -2;
    return `rotate(${rotateValue}deg)`;
}

// Получаем все элементы с классом .rotate-element
const elements = document.querySelectorAll('.card');

// Применяем обработчик событий ко всем элементам
elements.forEach(function(element) {
    element.addEventListener('mouseenter', function() {
        element.style.transform = randomRotate();
    });

    element.addEventListener('mouseleave', function() {
        element.style.transform = 'rotate(0deg)';
    });
});