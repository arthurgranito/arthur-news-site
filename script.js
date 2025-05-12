const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');
const body = document.getElementById('body');
const nav = document.getElementById('nav');

openButton.addEventListener('click', () => {
    nav.classList.remove('fechar');
    nav.classList.add('abrir');
    body.classList.add('escurecer');
});

closeButton.addEventListener('click', () => {
    nav.classList.remove('abrir');
    nav.classList.add('fechar');
    body.classList.remove('escurecer');
});
