// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній,
//     у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameForm = {
  inputName: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

nameForm.inputName.addEventListener("input", onInputName);

function onInputName(elem) {
  console.log(elem.currentTarget.value);
  nameForm.outputName.textContent =
    elem.currentTarget.value.trim() !== ""
      ? elem.currentTarget.value
      : "Anonymous";
}
// console.log(nameForm.inputName);
