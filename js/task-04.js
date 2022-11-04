// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і
// зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
//  та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй
//  або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterRef ={
  span : document.querySelector('#value'),
  btnDecrement : document.querySelector('[data-action="decrement"]'),
  btnIncrement : document.querySelector('[data-action="increment"]')
}
counterRef.btnDecrement.addEventListener('click', onDecrementBtn)
counterRef.btnIncrement.addEventListener('click', onIncrementBtn)


function onDecrementBtn () {
  counterRef.span.textContent -= 1;
  // console.log(counterRef.span.textContent);

}

function onIncrementBtn () {
  counterRef.span.textContent = Number(counterRef.span.textContent) + 1;
  // console.log(counterRef.span.textContent);

}

