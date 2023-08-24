const lenguajes = ["HTML", "CSS", "JS", "React"];

const menu = document.querySelector(".menu");

// menu.className += " destacado";

// menu.classList.add("destacado");
// menu.classList.remove("menu");

// menu.classList.toggle("menu");

console.log(menu.classList.contains("menu"));

for (let i = 0; i < lenguajes.length; i++) {
  menu.innerHTML += `<li>
                        <a href="#">${lenguajes[i]}</a>
                     </li>`;

  //   let li = document.createElement("li");

  //   let a = document.createElement("a");
  //   a.setAttribute("href", "#");
  //   a.textContent = lenguajes[i];

  //   li.appendChild(a);

  //   menu.appendChild(li);
}

// console.log(menu.innerHTML);

// let num = 1;
// num++
// num += 1;
