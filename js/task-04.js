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

const counterPlugin = function ({ rootSelector, step = 1, initial = 0 } = {}) {
  this.value = initial;
  this.step = step;
  this.refs = this.getRefs(rootSelector);
  this.bindEvent();
};

counterPlugin.prototype.decrement = function () {
  this.value -= 1;
};

counterPlugin.prototype.increment = function () {
  this.value += 1;
};

counterPlugin.prototype.getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
  refs.incremetBtn = refs.container.querySelector('[data-action="increment"]');
  refs.value = refs.container.querySelector("#value");

  return refs;
};
counterPlugin.prototype.bindEvent = function () {
  this.refs.decrementBtn.addEventListener("click", () => {
    this.decrement();
    this.updateValue();
  });
  this.refs.incremetBtn.addEventListener("click", () => {
    this.increment();
    this.updateValue();
  });
};
counterPlugin.prototype.updateValue = function () {
  this.refs.value.textContent = this.value;
};

new counterPlugin({ rootSelector: "#counter", step: 1, initial: 0 });
