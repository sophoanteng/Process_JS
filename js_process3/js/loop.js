
let todoList = [
    {name: "JavaScript"},
    {name: "PHP"},
    {name: "Java"},
    {name: "CMS"},
    {name: "Python"}
];

const done = document.querySelector('#did');
  
  const LISTDO = document.querySelector('input');
  document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
      let isEmpty = LISTDO.value != "";
      if(isEmpty){
      const  todo = `
          <li>${LISTDO.value}</li>
         `;
         done.insertAdjacentHTML("beforeend", todo);
    }
         LISTDO.value = "";
     }
 });

 
