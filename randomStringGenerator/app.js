const btn = document.querySelector('button');
const result = document.querySelector('.result');

const letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

btn.addEventListener('click', () => {
  let s = ''
  let random = Math.floor(Math.random() * 10) + 1;
  
  for (let i = 0; i < random; i++) {
      s += letters[Math.floor(Math.random() * 62)];
  }
  result.textContent = s;
});