window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const taskList = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = input.value.trim();
        if (!taskText) {
            alert("Please enter a task.");
            return;
        }

        const taskElement = document.createElement("div");
        taskElement.className = "task";

        const contentElement = document.createElement("div");
        contentElement.className = "content";
        const textElement = document.createElement("input");
        textElement.className = "text";
        textElement.type = "text";
        textElement.value = taskText;
        textElement.setAttribute("readonly", "readonly");
        contentElement.appendChild(textElement);

        const actionsElement = document.createElement("div");
        actionsElement.className = "actions";
        const editButton = document.createElement("button");
        editButton.className = "edit";
        editButton.textContent = "Edit";
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.textContent = "Delete";
        actionsElement.appendChild(editButton);
        actionsElement.appendChild(deleteButton);

        taskElement.appendChild(contentElement);
        taskElement.appendChild(actionsElement);
        taskList.appendChild(taskElement);

        input.value = "";

        editButton.addEventListener('click', () => {
            if (textElement.hasAttribute("readonly")) {
                textElement.removeAttribute("readonly");
                textElement.focus();
                editButton.textContent = "Save";
            } else {
                textElement.setAttribute("readonly", "readonly");
                editButton.textContent = "Edit";
            }
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskElement);
        });
    });
});
