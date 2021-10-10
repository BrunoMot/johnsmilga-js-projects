const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function newColor() {
  let randomColor = '#';
  for (let index = 0; index < 6; index++) {
    const element = hex[Math.floor(Math.random() * hex.length)];
    randomColor += element;
  }
  return randomColor;
}

btn.addEventListener('click', () => {
  const randomColor = newColor();
  document.body.style.backgroundColor = randomColor;
  color.innerText = randomColor;
  color.style.color = randomColor;
});
