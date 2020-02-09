const toDoForm = document.querySelector('.js-to-do'),
      toDoInput = toDoForm.querySelector('.js-add-to-do');
const toDoList = document.querySelector('.js-list');
const TODOS = 'toDos';

let toDosArray = [];

function removeToDo(e) {
  const parent_li = e.target.parentElement;
  toDoList.removeChild(parent_li);
  toDosArray = toDosArray.filter(function(toDo){
    return toDo.id !== parseInt(parent_li.id);
  });
  toDoSave();
}

function toDoSave() {
  localStorage.setItem(TODOS, JSON.stringify(toDosArray));
}

function addList(e) {
  e.preventDefault();
  const text = toDoInput.value;
  const toDoObj = {
    id : new Date().getTime(),
    text: text
  };
  toDosArray.push(toDoObj);
  toDoSave();
  paintToDo(toDoObj);
  toDoInput.value = '';
}

function paintToDo(toDo) {
   const li = document.createElement('li');
   const span = document.createElement('span');
   const delBtn = document.createElement('span');

   delBtn.innerText = '❌';
   delBtn.classList.add('toDo__button');
   delBtn.addEventListener('click', removeToDo);
   span.innerText = toDo.text;
   li.id = toDo.id;
   li.appendChild(delBtn);
   li.appendChild(span);
   toDoList.appendChild(li);
}

function toDoLoad() {
  const toDos = localStorage.getItem(TODOS);
  if(toDos !== null){
    const parseToDos = JSON.parse(toDos);
    toDosArray = parseToDos;
    parseToDos.forEach((toDo) => {
      paintToDo(toDo);
    });
  }
}

function init() {
  toDoLoad();
  toDoForm.addEventListener('submit', addList);
}
init();
