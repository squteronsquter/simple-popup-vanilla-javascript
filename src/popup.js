// Popup with a message
console.log('Hello from popup.js');

const button = document.querySelector('button');
const popup = document.getElementById('popup-wrapper');
const closeMe = document.getElementById('close-me');
button.addEventListener('click', () => {
  popup.classList.remove('invisible');
});
closeMe.addEventListener('click', () => {
  popup.classList.add('invisible');
});
