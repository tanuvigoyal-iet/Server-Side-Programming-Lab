document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});


function addTask() {
    let taskInput = document.getElementById("todoInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="deleteTask(this)">❌</button>`;
    document.getElementById("todoList").appendChild(li);
    
    saveTask(taskText);
    taskInput.value = "";
}

function deleteTask(btn) {
    if (confirm("Are you sure you want to delete this task?")) {
        let li = btn.parentElement;
        li.remove();
        removeTask(li.innerText.split("❌")[0].trim());
    }
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button onclick="deleteTask(this)">❌</button>`;
        document.getElementById("todoList").appendChild(li);
    });
}

function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
