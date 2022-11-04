// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
// Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const controls = document.querySelector('#controls');
const input = controls.children[0];
const create = controls.children[1];
const destroy = controls.children[2];
const boxes = document.querySelector('#boxes');

let boxesAmount = 0;
let markup = [];
let size = 20;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    markup.push(`<div id="boxes__item" style="background-color:${getRandomHexColor()}; height: ${size}px; width: ${size}px;"></div>`)
  }
}

input.addEventListener('click', () => boxesAmount = input.value);

create.addEventListener('click', () => {
  createBoxes(boxesAmount);
  boxes.insertAdjacentHTML('afterbegin', markup.join(''));
});

destroy.addEventListener('click', () => {
  boxes.innerHTML = '';
  input.value = 0;
  boxesAmount = 0;
  markup = [];
  size = 20;
});