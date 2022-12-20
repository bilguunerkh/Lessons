const addBtn = document.getElementById("add");
const taskList = document.getElementById("tasks");
const inputText = document.getElementById("to-do-input");
const selectItem = document.getElementById("priority");
const dates = document.getElementById("date");



const addTodo = () => {
  // allTask array ruu ruu text iig nemne.
  let text = inputText.value;
  let pr = selectItem;
  const newTask = {name: text, status: false, priority: pr,};
  allTask.push(newTask);
  renderTodoApp();
};
addBtn.addEventListener("click", addTodo);

const deleteTodo = (index) => {
  console.log("DELETE INDEX", index);
  allTask.splice(index, 1);
  renderTodoApp();
};

let  Date = () => {
    const dates = new Date();
    dates.innerHTML = "";
}
dates.addEventListener("change",Date);

const ustah = (e) => {
    const parent = e.parentNode.parentNode.parentNode;
    const child = e.parentNode.parentNode;
    parent.removeChild(child);                          
}

let edit = (e) => {
    const edita = e.parentNode.parentNode.children[0];
    edita.setAttribute("value",edita.value);

    if(edita.hasAttribute("readonly")){
        edita.removeAttribute("readonly");
    }
    else{
        edita.setAttribute("readonly",true);
    }
}

const done = (index) => {
    allTask[index].status = !allTask[index].status;
    renderTodoApp();
}

function changed() {
    console.log(priority.value);
}
priority.addEventListener("change",changed);


const allTask = [];



const renderTodoApp = () => {
  //All-Task array aar delgetsend list haruulna
  tasks.innerHTML = "";
  for (let i = 0; i < allTask.length; i++) {
    const done = allTask[i].status ? "strikethrough" : "";

    const item = `   
                <div class="task ${allTask[i].pr}">
                    <input type="text" class="text" ${done} strikethrough readonly value="${allTask[i].name}" />
                    <div class="actions">
                        <button class="edit" onclick="edit(this)"><i class="fas fa-pen"></i></button>
                        <button class="done" onclick="done(${i})" ><i class="fas fa-check"></i></button>
                        <button class="delete" onclick="deleteTodo(${i})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
    taskList.innerHTML += item;
  }

  
};




