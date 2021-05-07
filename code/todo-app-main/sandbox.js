
// const createToDo = document.querySelector('.create-todo');
// const submit = document.querySelector('#submit');
// const list = document.querySelector('.list');
// const input = document.querySelector('#input');
// const text = document.querySelector('#text');
// const checkBox = document.querySelector('#checkbox');
// createToDO.addEventListener('click', e => {
//   e.preventDefault();
//   const textInput = `<div>
//         <input type="checkbox" value="todo" id="checkbox">
//         <label for="todo" id="text">${input.value}</label>
//         <span id="x">&#x2715</span
//       </div>`;
//   const position ="beforeend";
//   list.insertAdjacentHTML(position, textInput);
// });

// checkBox.addEventListener('click', () => {
//   checkBox.nextElementSibling.classList.toggle('text');

// });

// element.parentNode.parentNode.removeChild(element.parentNode);
const addForm = document.querySelector('.add')
const list = document.querySelector('.list-group-todos');

const generateTemplate = todo => {
  const html = `
    <li class="list-group">
        <input type="checkbox" value="todo" id="checkbox">
        <label for="todo" id="text">${todo}</label>
        <img src="images/icon-cross.svg" alt="">
    </li>`
    list.innerHTML += html;

};

addForm.addEventListener('keyup', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if(todo.length){
  generateTemplate(todo);
  addForm.reset();
  }

});


list.addEventListener('click', e => {
  if(e.target.classList.contains('checkbox')){
    e.target.nextElementSibling.classList.toggle('text');
  }


});

list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

