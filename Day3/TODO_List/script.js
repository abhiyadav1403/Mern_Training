
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Add Task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    todoItem.innerHTML = `
        <span>${taskText}</span>
        <span class="delete">❌</span>
    `;

    todoList.appendChild(todoItem);

    taskInput.value = "";
});

// Delete Task
todoList.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("delete") ||
        e.target.classList.contains("plus") ||
        e.target.classList.contains("minus")
    ) {
        e.target.parentElement.remove();
    }
});
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});