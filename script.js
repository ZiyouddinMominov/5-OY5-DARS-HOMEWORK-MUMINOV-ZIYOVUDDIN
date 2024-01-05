{
  let todoList = [];

  function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoValue = todoInput.value.trim();

    if (todoValue !== "") {
      todoList.push(todoValue);
      renderTodoList();
      todoInput.value = "";
    }
  }

  function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
  }

  function renderTodoList() {
    const todoListContainer = document.getElementById("todoList");
    todoListContainer.innerHTML = "";

    todoList.forEach((todo, index) => {
      const li = document.createElement("li");
      li.textContent = todo;
      li.style.paddingRight = "5px";
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "O'chirish";
      deleteButton.style.marginLeft = "10px";
      deleteButton.style.backgroundColor = "red";
      deleteButton.style.border = "none";
      deleteButton.style.padding = "5px 10px";
      deleteButton.style.cursor = "pointer";
      deleteButton.style.color = "white";
      deleteButton.style.borderRadius = "2px";
      deleteButton.id = `deleteButton${index}`;
      deleteButton.addEventListener("click", function () {
        const currentIndex = parseInt(this.id.slice(-1));
        deleteTodo(currentIndex);
      });

      li.appendChild(deleteButton);
      todoListContainer.appendChild(li);
    });
  }
}
