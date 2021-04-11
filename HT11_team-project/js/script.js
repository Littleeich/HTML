document.getElementById('btn-menu').addEventListener('click', () => { document.getElementById('wrapper').classList.add('menu-open') });
document.getElementById('menu-button-close').addEventListener('click', () => { document.getElementById('wrapper').classList.remove('menu-open') });

const navItems = document.getElementsByClassName('nav-item');

for (const elem of navItems) {
    elem.addEventListener('click', () => { document.getElementById('wrapper').classList.remove('menu-open') });
}