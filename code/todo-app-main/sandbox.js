
const createToDo = document.querySelector('.create-todo');
const ul = document.querySelector('.list-todo');
const toDo = document.querySelector('#todo');

createToDo.addEventListener('keyup', e => {
  e.preventDefault();
  toDo.textContent = e.target.value;
});
