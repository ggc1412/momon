const nameDiv = document.querySelector('.js-name'),
      nameForm = nameDiv.querySelector('form'),
      nameSpan = nameDiv.querySelector('span');
const nameInput = nameForm.querySelector('input');
const toDoDiv = document.querySelector('.js-to-do-div');


function saveName(e) {
  e.preventDefault();
  const name = nameInput.value;
  localStorage.setItem('name', name);
  paintGreeting(name);
}

function paintGreeting(name) {
  nameForm.classList.add('none');
  nameSpan.classList.remove('none');
  toDoDiv.classList.remove('none');
  nameSpan.innerText = `Hello ${name}!`;
}

function checkName(){
  const name = localStorage.getItem('name');
  if(name){
    paintGreeting(name);
  }else {
    toDoDiv.classList.add('none');
    nameSpan.classList.add('none');
  }
}

function init() {
  checkName();
  nameForm.addEventListener('submit', saveName);
}
init();
