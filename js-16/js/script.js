const taskList = document.querySelector("#taskList");
const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
let tareas;

const loadTask = async () => {
  taskList.innerHTML = "";
  tareas = localStorage.getItem("tareas");

  if (tareas == null) {
    const response = await fetch("json/tareas.json");
    tareas = await response.json();

    localStorage.setItem("tareas", JSON.stringify(tareas));
  }

  if (typeof tareas == "string") {
    tareas = JSON.parse(tareas);
  }

  tareas.forEach(createTask);
};

const createTask = (tarea) => {
  const li = document.createElement("li");

  //   const money = new Intl.NumberFormat("es-Ar", {
  //     style: "currency",
  //     currency: "ARS",
  //   });

  //   li.textContent = money.format(tarea.precio);

  li.textContent = tarea.texto;

  li.setAttribute("data-id", tarea.id);

  //   li.addEventListener("click", (event) => {
  //     const id = event.target.dataset.id;
  //     tareas = tareas.filter((tarea) => tarea.id != id);
  //     updateLocalStorage(tareas);
  //     taskList.removeChild(event.target);
  //   });

  taskList.appendChild(li);
};

const addTask = () => {
  const taskText = taskInput.value.trim();

  if (taskText != "") {
    const tarea = {
      id: Date.now(),
      texto: taskText,
    };

    createTask(tarea);

    tareas.push(tarea);

    taskInput.value = "";

    updateLocalStorage(tareas);
  }
};

const updateLocalStorage = (tareas) => {
  localStorage.setItem("tareas", JSON.stringify(tareas));
};

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addTask();
  }
});

loadTask();

document.addEventListener("click", (event) => {
  if (event.target.tagName == "LI") {
    const id = event.target.dataset.id;
    // tareas = tareas.filter((tarea) => tarea.id != id);
    // updateLocalStorage(tareas);
    // taskList.removeChild(event.target);

    sessionStorage.setItem("id", id);
    window.location = "detalle.html";
  }
});

let numero = 1000000.67;
let numeroFormateado = numero.toLocaleString();

console.log("$ " + numeroFormateado);
