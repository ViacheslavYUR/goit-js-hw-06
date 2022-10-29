// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const arrayIngredientsEl = [];
const elemStringRef = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = item;
  console.log(ingredientEl.textContent);
  ingredientEl.classList.add("item");
  arrayIngredientsEl.push(ingredientEl);
});
// console.log(ingredientsRefs);

elemStringRef.append(...arrayIngredientsEl);
