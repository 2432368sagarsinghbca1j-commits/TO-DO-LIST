const input = document.getElementById('todo-input');
const btn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// Function to add a task
function addTask() {
    if (input.value.trim() === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${input.value}</span>
        <span class="delete-text">✕</span>
    `;

    // Click text to Toggle Done
    li.querySelector('.task-text').onclick = function() {
        this.classList.toggle('checked');
    };

    // Click X to Delete
    li.querySelector('.delete-text').onclick = function() {
        li.remove();
    };

    list.appendChild(li);
    input.value = ""; // Clear the box
}

// Add on button click
btn.onclick = addTask;

// Add on "Enter" key
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});