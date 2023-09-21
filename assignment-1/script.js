// Your JS code goes here
var table = document.getElementById("table");

//add data to table
var data = [];

function loadData() {
  var datalocal = localStorage.getItem("data");
  if (datalocal != undefined) {
    data = JSON.parse(datalocal);
    return data;
  } else {
    // data = JSON.parse(datalocal);
    return data;
  }
}

const item = [
  {
    name: "Name 1",
    author: "Author 1",
    topic: "Topic 1",
  },
  {
    name: "Name 2",
    author: "Author 2",
    topic: "Topic 2",
  },
  {
    name: "Name 3",
    author: "Author 3",
    topic: "Topic 3",
  },
];
data = loadData();
if (data.length == 0) {
  localStorage.setItem("data", JSON.stringify(item));
  data = item;
}

function loadDataToTable(e) {
  table.children[1].innerHTML = "";
  for (let i = 0; i < e.length; i++) {
    const element = document.createElement(`tr`);
    const name = document.createElement("td");
    name.textContent = e[i].name;
    element.appendChild(name);
    const author = document.createElement("td");
    author.textContent = e[i].author;
    element.appendChild(author);
    const topic = document.createElement("td");
    topic.textContent = e[i].topic;
    element.appendChild(topic);
    const action = document.createElement("td");
    action.className = "del";
    element.appendChild(action);
    table.children[1].appendChild(element);
  }
}
loadDataToTable(data);

//feature add
var btnCreate = document.getElementById("btnCreate");
btnCreate.addEventListener("click", function () {
  const name = document.getElementById("name");
  const author = document.getElementById("author");
  const topic = document.getElementById("topic");
  let dataAdd = {
    name: name.value,
    author: author.value,
    topic: topic.value,
  };
  Addmodal.style.display = "none";
  const element = document.createElement(`tr`);
  const Cellname = document.createElement("td");
  Cellname.textContent = dataAdd.name;
  element.appendChild(Cellname);
  const Cellauthor = document.createElement("td");
  Cellauthor.textContent = dataAdd.author;
  element.appendChild(Cellauthor);
  const Celltopic = document.createElement("td");
  Celltopic.textContent = dataAdd.topic;
  element.appendChild(Celltopic);
  const action = document.createElement("td");
  action.className = "del";
  element.appendChild(action);
  table.children[1].appendChild(element);

  data.push(dataAdd);
  console.log(data);
  localStorage.setItem("data", JSON.stringify(data));
});

//feature search
var input = document.getElementById("search");
input.addEventListener("input", (e) => {
  var searchData = data.filter((d) => {
    return d.name
      .toLocaleLowerCase()
      .includes(e.target.value.trim().toLocaleLowerCase());
  });
  loadDataToTable(searchData);
});
///////////////////////////////
var btnAdd = document.getElementById("btnAdd");
var Addmodal = document.getElementById("addModal");
var Deletemodal = document.getElementById("deleteModal");
var btnClose = document.querySelectorAll(".close");
var btnDelete = document.querySelectorAll(".del");
//Close modal
btnClose[0].addEventListener("click", () => {
  Deletemodal.style.display = "none";
});
btnClose[1].addEventListener("click", () => {
  Addmodal.style.display = "none";
});
window.onclick = function (event) {
  if (event.target == Addmodal || event.target == Deletemodal) {
    Addmodal.style.display = "none";
    Deletemodal.style.display = "none";
  }
};

//Open Modal
btnAdd.addEventListener("click", function () {
  Addmodal.style.display = "block";
});

table.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    let name = e.target.parentElement.children[0].textContent;
    Deletemodal.children[0].children[2].innerHTML = `Do you want to delete <strong>${name}</strong> book`;
    Deletemodal.style.display = "block";
    Deletemodal.children[0].children[3].children[0].addEventListener(
      "click",
      () => {
        e.target.parentElement.remove();
        data = data.filter((w) => {
          return w.name != name;
        });
        localStorage.setItem("data", JSON.stringify(data));
        Deletemodal.style.display = "none";
      }
    );
    Deletemodal.children[0].children[3].children[1].addEventListener(
      "click",
      () => {
        Deletemodal.style.display = "none";
      }
    );
  }
});
