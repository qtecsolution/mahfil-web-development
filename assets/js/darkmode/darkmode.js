const body = document.querySelector('#pagebody');
const btnDarkmode = document.querySelector('#btn-darkmode');

btnDarkmode.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
