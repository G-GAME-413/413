document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('DarkBackground');
    const bgImage = document.getElementById('backgroundGeneral');

    bgImage.style.backgroundImage = 'url(content/img/background/backgroundDark.jpg)';

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            bgImage.style.backgroundImage = 'url(content/img/background/background3.jpg)';
            document.documentElement.style.setProperty('--color-bg', 'rgba(79, 34, 63, 0.65)');
            document.documentElement.style.setProperty('--color-cell', 'rgba(40, 21, 33, 1)');
            document.documentElement.style.setProperty('--color-checkbox', 'rgb(148, 66, 104)');
            
            
        }

        else {
            bgImage.style.backgroundImage = 'url(content/img/background/backgroundDark.jpg)';
            document.documentElement.style.setProperty('--color-bg', 'rgba(0, 0, 0, 0.65)');
            document.documentElement.style.setProperty('--color-cell', 'rgba(18, 25, 40, 1)');
            document.documentElement.style.setProperty('--color-checkbox', 'rgb(61, 62, 94)');
        }
    });
});
