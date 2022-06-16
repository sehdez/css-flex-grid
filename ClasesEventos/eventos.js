// Referencias en HTML
const menu = document.querySelector('.menu');
const btnCollapse = document.querySelector('.btn-collapse');
const btnExpanded = document.querySelector('.btn-expanded');

btnCollapse.addEventListener('click', () => {
    menu.classList.toggle('expanded');
}); 
btnExpanded.addEventListener('click', () => {
    menu.classList.toggle('expanded');

    // Para agregar una clase extra a un elemento
    // menu.classList.add('expanded');
});