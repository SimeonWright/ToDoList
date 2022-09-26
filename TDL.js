const AddButton = document.querySelector(".button").addEventListener('click', runIt)
const toDoContainer =  document.querySelector('.ToDoAnswers')
const InputField = document.querySelector('.EnterHere')

function runIt(event){
    event.preventDefault() 
    let paragraph = document.createElement('p')
    paragraph.innerText = InputField.value;
    InputField.value = "";
    toDoContainer.appendChild(paragraph);
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    document.querySelector(".delbutton").addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
}
