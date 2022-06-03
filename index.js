const buttonEl = document.querySelector(
    'button');
const hiddenEl = document.querySelector('.hidden');

buttonEl.addEventListener('click', () => {
    hiddenEl.classList.toggle('active');
})