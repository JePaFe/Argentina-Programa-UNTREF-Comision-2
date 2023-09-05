const tareas = [];

const searchInput = document.querySelector("#searchInput");

let timeout = null;

function doDelayedSearch(event) {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(function () {
    searchTask(event);
    clearTimeout(timeout);
  }, 500);
}

const renderFilter = (tareas) => {
  taskList.innerHTML = "";

  tareas.forEach((tarea) => {
    const li = `<li>
      <span>${tarea}</span>
      <i class="bx bx-check"></i>
      <i class="bx bx-trash"></i>
    </li>`;

    taskList.innerHTML += li;
  });
};

const searchTask = (event) => {
  if (event.target.value.length == 0) {
    renderTask();
  } else {
    const filtered = tareas.filter((tarea) =>
      tarea.includes(event.target.value)
    );

    renderFilter(filtered);
  }
};

searchInput.addEventListener("input", doDelayedSearch);

const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

const renderTask = () => {
  taskList.innerHTML = "";

  tareas.forEach((tarea) => {
    const li = `<li>
      <span>${tarea}</span>
      <i class="bx bx-check"></i>
      <i class="bx bx-trash"></i>
    </li>`;

    taskList.innerHTML += li;
  });
};

const addTask = () => {
  const tarea = taskInput.value;

  if (tarea.trim().length > 0) {
    // const li = document.createElement("li");
    // li.textContent = tarea;
    // taskList.appendChild(li);

    // const li = `<li>
    //   <span>${tarea}</span>
    //   <i class="bx bx-check"></i>
    //   <i class="bx bx-trash"></i>
    // </li>`;
    // taskList.innerHTML += li;

    tareas.push(tarea);

    renderTask();

    taskInput.value = "";
    taskInput.focus();
  }
};

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    addTask();
  }
});

// taskList.addEventListener("click", (event) => {
//   if (event.target.tagName == "LI") {
//     event.target.remove();
//   }
// });

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("bx-trash")) {
    const index = Array.prototype.slice
      .call(event.target.parentNode.parentNode.children)
      .indexOf(event.target.parentNode);

    tareas.splice(index, 1);

    event.target.closest("li").remove();
  }

  if (event.target.classList.contains("bx-check")) {
    event.target.closest("li").querySelector("span").classList.toggle("done");
  }
});
