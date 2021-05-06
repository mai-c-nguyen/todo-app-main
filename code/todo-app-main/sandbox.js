
const createToDo = document.querySelector('.create-todo');
const submit = document.querySelector('#submit');
const list = document.querySelector('.list');
const input = document.querySelector('#input');
const text = document.querySelector('#text');
const checkBox = document.querySelector('#checkbox');
submit.addEventListener('click', e => {
  e.preventDefault();
  const textInput = `<div>
        <input type="checkbox" value="todo" id="checkbox">
        <label for="todo" id="text">${input.value}</label>
        <span id="x">&#x2715</span
      </div>`;
  const position ="beforeend";
  list.insertAdjacentHTML(position, textInput);
});

checkBox.addEventListener('click', () => {
  checkBox.nextElementSibling.classList.toggle('text');

});
