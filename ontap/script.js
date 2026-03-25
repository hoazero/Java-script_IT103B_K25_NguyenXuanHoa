// let todos = [
//     {id: 1, todo: "học", deadLine: "26/3", status: "todo"},
//     {id: 2, todo: "chơi", deadLine: "27/3", status: "pending"},
//     {id: 3, todo: "làm việc nhà", deadLine: "26/3", status: "todo"},
// ]

// localStorage.setItem("todos", JSON.stringify(todos));

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos(todos) {
    const todosListElement = document.getElementById("todoList");
    todosListElement.innerHTML = "";
    todos.forEach((todo) => {
        todosListElement.innerHTML += `
        <li>Công việc ${todo.id}: ${todo.todo} - ${todo.deadLine} - ${todo.status} <button>sửa</button> <button onclick="deleteTodos(${todo.id})">xóa</button></li>
        `
    });
    
}

function pushDataTodos(e) {
    e.preventDefault();
    let nameTodo = document.getElementById("nameTodo");
    let deadLineTodo = document.getElementById("deadLine-todo");
    let statusTodo = document.getElementById("status-todo");
    // let btnCreate = document.getElementById("btn-push");
    
    let newTodo = {
        id: todos.length !== 0 ? todos[todos.length - 1].id + 1 : 1,
        todo: nameTodo.value.trim(),
        deadLine: deadLineTodo.value,
        status: statusTodo.value
    }

    todos.push(newTodo);
    // todosListElement.reset();
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos(todos);
}

function deleteTodos(id) {
    todos = todos.filter((e) => e.id !== id);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos(todos);
}

function findTodoByName() {
    const findInput = document.getElementById("findInput");
    let findTodos = todos.filter(todo => todo.todo.includes(findInput.value));
    renderTodos(findTodos);
}
renderTodos(todos);
