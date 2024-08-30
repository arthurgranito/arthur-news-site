const botaoAbrir = document.getElementById('botao-abrir');
const botaoFechar = document.getElementById('botao-fechar');
const body = document.getElementById('body');
const nav = document.getElementById('nav');

botaoAbrir.addEventListener('click', () => {
    nav.classList.remove('fechar');
    nav.classList.add('abrir');
    body.classList.add('escurecer');
});

botaoFechar.addEventListener('click', () => {
    nav.classList.remove('abrir');
    nav.classList.add('fechar');
    body.classList.remove('escurecer');
})