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

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  console.log(todo);
  if(todo.length){
  generateTemplate(todo);
  // addForm.reset();
  }
});


list.addEventListener('click', e => {
  if(e.target.classList.contains('checkbox')){
    e.target.nextElementSibling.classList.toggle('text');
  }
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

const getToDos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
      // console.log(request.responseText);
      callback(undefined, request.responseText);
    } else if(request.readyState === 4){
      callback('could not fetch data', undefined);
    }
  });
  request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
  request.send();
};

getToDos((err, data) => {
  console.log('callback fired');
  if(err){
    console.log(err);
  } else {
    console.log(data);
  }
});


