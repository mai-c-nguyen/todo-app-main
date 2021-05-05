
const createToDo = document.querySelector('.create-todo');
const submit = document.querySelector('#submit');
const list = document.querySelector('.list');
const input = document.querySelector('#input');
const text = document.querySelector('#text');

submit.addEventListener('click', () => {

  const text = `<div>
        <input type="checkbox" value="todo">
        <label for="todo" id="text">${input.value}</label>
        <span id="x">X</span
      </div>`;
  const position ="beforeend";
  list.insertAdjacentHTML(position, text);

});
