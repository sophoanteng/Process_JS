
let todoList = [
    {name: "JavaScript"},
    {name: "PHP"},
    {name: "Java"},
    {name: "CMS"},
    {name: "Python"}
];

const done = document.querySelector('#did');

//clean code into function
const LISTDO = document.querySelector('input');
document.addEventListener("keydown", event => {
  if(event.key === "Enter"){
    let isEmpty = LISTDO.value != "";
    if(isEmpty){
      toDo(LISTDO.value);
    }
    LISTDO.value = "";
  }
});
function toDo(todo){
  const  todos = `
  <li>${todo}</li>
  `;
  done.insertAdjacentHTML("beforeend", todos);
}

const dayOfMonth = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const today = new Date();
document.querySelector('h1').innerHTML = today.toLocaleString('en-Us', dayOfMonth);
