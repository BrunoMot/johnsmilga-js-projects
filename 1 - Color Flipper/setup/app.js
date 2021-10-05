const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function newColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

btn.addEventListener('click', () => {
  color.textContent = `#${newColor()}`;
});
