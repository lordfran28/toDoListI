// WHEN USER CLICK ON THE ENTER BUTTON IT SHOULD ADD LI TO UL
// THAT LI SHOULD BE THE VALUE OF WHATEVER USER PUTS IN THE INPUT 
const toDoList =document.querySelector (".toDoList")
const todoInput = document.querySelector(".todo-input")
const enterButton = document.querySelector (".enterButton")

const todos = JSON.parse(localStorage.getItem('todos')) || []

console.log(todos)
for (let todo of todos) {
    const li = document.createElement("li")
    li.textContent = todo
    toDoList.append (li)
}

// when user clicks on the enterButton what should happen?


enterButton.addEventListener("click", handleClick)



function handleClick() {
    if(todoInput.value !== "") {
        // make an li element
        const li = document.createElement("li")  // <li></li>
        // put text value in the li
        li.textContent = todoInput.value // <li>Workout</li>
        // put li into ul element
        toDoList.append(li)

       // push todo into todos array
       todos.push(todoInput.value)

        // save todos array into localStorage
        localStorage.setItem("todos", JSON.stringify(todos))
       
       
    }
}



// load data from localStorage




// function GreetUser(){
//     console.log ("Hello!")
//     console.log ("how are you")

// }

// GreetUser()
// GreetUser()
// GreetUser()










// console.log ("hello world!")
// const username = "cupOfWater23"
// const password = "coke"
// let age = 10
// let quality = "good"
// console.log (`I am ${username} I am ${age} years old. I am ${quality} `)
// console.log (age+10)
// let canDrive = false
// if (canDrive) {
//     console.log (`Hey, @You are 18+. You can drive`)
// }
// else {
//     console.log (`You can not drive`)
// }
// console.log (age==11)
// if (username =="cupOfWater" && password == "coke") {
//     console.log (`Welcome! You logged in`)
// }
// else {
//     console.log (`Invalid credentials`)
// }

// let numbers = [100, 1000]
// console.log (numbers)

// for (let index = 1; index <= 10; index++) {
//     console.log(index)toedo
// }
