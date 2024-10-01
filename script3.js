document.addEventListener('DOMContentLoaded', () => {
    const images2 = document.querySelectorAll('[name="classification"]');
    let currentImageIndex = 0;

    // Функция для отображения картинки
    function displayImage(index) {
        const oldImg2 = document.getElementById('container_img2').firstChild;
        if (oldImg2) {
            oldImg2.remove();
        }
        const imgElement = document.createElement('img');
        imgElement.src = `content/img/class/${images2[index].value}.jpg`;
        imgElement.width = 250;
        imgElement.height = 250;
        imgElement.style.borderRadius = '32px';
        container_img2.appendChild(imgElement);
    }

    // Обработка событий для кнопок
    images2.forEach((button, index) => {
        button.addEventListener('change', () => {
            if (button.checked) {
                currentImageIndex = index;
                displayImage(currentImageIndex);
            }
        });
    });

    // Инициализация изображения
    displayImage(currentImageIndex);
});
