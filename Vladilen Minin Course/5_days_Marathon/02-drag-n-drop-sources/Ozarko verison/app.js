// Create card

const createCard = (id, text, prioryty, position) => {
  const task = document.createElement("div");
  task.id = id;
  task.classList.add("task");
  task.setAttribute("draggable", "true");
  task.setAttribute("data-position", position);

  const taskPrioryty = document.createElement("div");
  taskPrioryty.classList.add("task-prioryty-color");
  taskPrioryty.style = `background: ${prioryty}`;
  task.append(taskPrioryty);

  const taskId = document.createElement("div");
  taskId.classList.add("task-id");
  taskId.innerHTML = `<span class="task-id-number">ID: ${id}</span>`;
  task.append(taskId);

  const taskTitle = document.createElement("h6");
  taskTitle.classList.add("task-title");
  taskTitle.innerText = text;
  task.append(taskTitle);

  const cancelBtn = document.createElement('button')
  cancelBtn.className = "cancel-btn hiden";
  cancelBtn.innerHTML = '<i class="fas fa-rocket"></i>';
  task.append(cancelBtn);

  cancelBtn.addEventListener('click', (event) => {
    console.log(event.target)
  })
  
  task.addEventListener("dragstart", (event) => {
    event.target.classList.add("hide");
    setTimeout(() => {
      event.target.classList.add("taskActive");
    }, 0);
  });

  task.addEventListener("dragend", (event) => {
    event.target.className = "task";
  });
  return task;
};

// First render

const placeHolders = document.querySelectorAll(
  ".table-board-body-position-item"
);

let state = JSON.parse(localStorage.getItem("state")) || [
  { position: "backlog-position", nodeArr: [] },
  { position: "planning-position", nodeArr: [] },
  { position: "doing-position", nodeArr: [] },
  { position: "done-position", nodeArr: [] },
];;

placeHolders.forEach(placeholder => {
  state.forEach(item => {
    if(placeholder.id === item.position) {
      item.nodeArr.forEach(node => {
        placeholder.append(createCard(node.id, node.text, node.prioryty, item.position));
      })
    }
  })
})

const counts = document.querySelectorAll(".count");

const renderCounts = () => {
  const counts = document.querySelectorAll(".count");
  counts.forEach((count, index) => {
    count.innerText = state[index].nodeArr.length;
  }); 
}

renderCounts()

// Change title
const boardTitle = document.getElementById("board-title");
const changeTitleForm = document.getElementById("change-title-form");

const boardTitleValue = localStorage.getItem("boardTitle") || "New Board";

boardTitle.innerText = boardTitleValue;

changeTitleForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("new-board-title");
  if (title.value) {
    boardTitle.innerText = title.value;
  }
  localStorage.setItem("boardTitle", title.value);
  title.value = "";
});

// Add task form

const backlog = document.getElementById("backlog-position");
const id = [0];

const select = document.getElementById("select-prioryty");
select.addEventListener("change", () => {
  if (select.value) {
    select.classList.add("selected");
  } else {
    select.classList.remove("selected");
  }
});

const addTaskForm = document.getElementById("add-task-form form");

addTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskTitle = document.getElementById("new-task-text");
  const id = Date.now();
  const newTask = createCard(
    id,
    taskTitle.value,
    select.value,
    "backlog-position"
  );

  state[0].nodeArr.push({
    id: id,
    text: taskTitle.value,
    prioryty: select.value,
    position: "backlog-position",
  });
  backlog.append(newTask);
  localStorage.setItem("state", JSON.stringify(state));
  renderCounts()
  select.value = "";
  taskTitle.value = "";
});

// Drag and Drop


const dragover = (event) => {
  event.preventDefault();
};

const dragenter = (event) => {
  event.target.classList.add("hovered");
};

const dragleave = (event) => {
  event.target.classList.remove("hovered");
};

const drop = (event) => {
  event.target.classList.remove("hovered");
  const item = document.querySelector(".taskActive");
  const itemInState = state
    .find((stateItem) => stateItem.position === item.dataset.position)
    .nodeArr.find((node) => node.id === +item.id);

  const newState = state.map(stateItem => {
    if(stateItem.position == item.dataset.position) {
      const newNodeArr = stateItem.nodeArr.filter(node => {
        return node.id !== +item.id
      })
      return {
        ...stateItem,
        nodeArr: newNodeArr,
      };
    }
    if(stateItem.position == event.target.id) {
      if (stateItem.position === "done-position") {
        item.childNodes[3].classList.remove("hiden");
      }
        stateItem.nodeArr.push({
          ...itemInState,
          position: event.target.id,
        });
      return stateItem;
    }else{
      return stateItem;
    }
  })
  state = newState
  item.dataset.position = event.target.id;
  localStorage.setItem("state", JSON.stringify(newState));
  renderCounts();
  event.target.append(item);
};

placeHolders.forEach((placeHolder) => {
  placeHolder.addEventListener("dragover", dragover);
  placeHolder.addEventListener("dragenter", dragenter);
  placeHolder.addEventListener("dragleave", dragleave);
  placeHolder.addEventListener("drop", drop);
});

