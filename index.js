const buttonEl = document.querySelector('a');
const hiddenEl = document.querySelector('.hidden');

buttonEl.addEventListener('click', () => {
    hiddenEl.classList.toggle('active');
})