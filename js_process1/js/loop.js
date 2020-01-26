// part 1 just loop todolist by use insertAdjacentHTML
let todoList = [
    {name: "JavaScript"},
    {name: "PHP"},
    {name: "Java"},
    {name: "CMS"},
    {name: "Python"}
];

const done = document.querySelector('#did');
 todoList.forEach(item =>{
   const  todo = `
      <li>${item.name}</li>
    `;
    done.insertAdjacentHTML("beforeend", todo);
 });
 
 //part 2 we can enter key to show value in input
 const LISTDO = document.querySelector('input');
 document.addEventListener("keydown", event => {
     if(event.key === "Enter"){
        (LISTDO.value);
//part 3 we just clear value in input
        LISTDO.value = "";
     }
 });

 
