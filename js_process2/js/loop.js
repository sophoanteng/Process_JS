// part 1 just loop todolist by use insertAdjacentHTML
let todoList = [
    {name: "JavaScript"},
    {name: "PHP"},
    {name: "Java"},
    {name: "CMS"},
    {name: "Python"}
];

const done = document.querySelector('#did');
 //part 2 we can enter key to show value in input
  const LISTDO = document.querySelector('input');
  document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
      const  todo = `
          <li>${LISTDO.value}</li>
         `;
         done.insertAdjacentHTML("beforeend", todo);
         LISTDO.value = "";
     }
 });

 
