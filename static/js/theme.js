if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
    document.getElementById('img-theme').src = 'images/sun.svg'
    document.getElementById('theme-span').innerText = 'Set Light Theme';
} else {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
    document.getElementById('img-theme').src = 'images/moon.svg'
    document.getElementById('theme-span').innerText = 'Set Dark Theme';
}

const theme_btn = document.getElementById('theme-btn');
theme_btn.addEventListener('click', function() {
    if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
        document.getElementById('img-theme').src = 'images/moon.svg'
        document.getElementById('theme-span').innerText = 'Set Dark Theme';
    } else {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
        document.getElementById('img-theme').src = 'images/sun.svg'
        document.getElementById('theme-span').innerText = 'Set Light Theme';
    }
})
