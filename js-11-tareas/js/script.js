// let taskInput, addButton, taskList;

const taskInput = document.querySelector("#taskInput");

// const addButton = document.getElementById("addButton");
const addButton = document.querySelector("#addButton");

const taskList = document.querySelector("#taskList");

// function addTask() {}
// const addTask = function () {};
const addTask = () => {
  const inputValue = taskInput.value.trim();
  // taskInput.value.trim() != ''
  if (inputValue.length > 0) {
    // const li = document.createElement("li");
    // li.textContent = inputValue;
    // taskList.appendChild(li);

    // li.addEventListener("click", () => {
    //   taskList.removeChild(li);
    // });

    const li = `<li>
      <span>${inputValue}</span>
      <i class="bx bx-check"></i>
      <i class="bx bx-trash"></i>
    </li>`;
    // taskList.innerHTML = taskList.innerHTML + li;
    taskList.innerHTML += li;

    taskInput.value = "";
  }
};

// addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
  // console.log(event.keyCode)
  if (event.keyCode == 13) {
    addTask();
  }
});

taskList.addEventListener("click", (event) => {
  // event.target.remove();
  // event.target.closest("ul").removeChild(event.target)
  if (event.target.classList.contains("bx-trash")) {
    event.target.closest("li").remove();
  }

  if (event.target.classList.contains("bx-check")) {
    event.target.closest("li").querySelector("span").classList.toggle("done");
  }
});
