const addBtn = document.getElementById("add");
const taskList = document.getElementById("tasks");
const inputText = document.getElementById("to-do-input");




const ustah = (e) => {
    const parent = e.parentNode.parentNode.parentNode;
    const child = e.parentNode.parentNode;
    parent.removeChild(child);                         
}

let edit = (e) =>{
    const edita = e.parentNode.parentNode.children[0];
    
    if(edita.hasAttribute("readonly")){
        edita.removeAttribute("readonly");
    }else{
        edita.setAttribute("readonly",true);
    }


}


const cardItem = (text) => {
    const item = `
    <div class="task">
        <input type="text" class="text" readonly value="${text}"/>
        <div class="actions">
            <button class="edit" id="edit" onclick="edit(this)"><i class="fas fa-pen"></i></button>
            <button class="done"><i class="fas fa-check"></i></button>
            <button class="delete" onclick="ustah(this)" ><i class="fas fa-trash"></i></button>
        </div>
    </div>`;
    
    return item;
}  


const taskAdd = () => {
    let text = inputText.value;
    if(text === ""){
        alert("Хоосон утга оруулсан байна!!!");
    }else{
        taskList.innerHTML += cardItem(text);
        // console.log(taskList.innerHTML);

    }
}

// let check = () => {
//     const message = documet.getElementById("chat");
//     if(taskList.innerHTML !== 0){
//         message = taskList.innerHTML;
//         console.log(message);
//     }
//     else{
//         console.log("BIsheeeee");
//     }
// }


addBtn.addEventListener("click",taskAdd);
editBtn.addEventListener("click",edit);



