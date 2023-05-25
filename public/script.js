const allBtn = document.getElementById("all");
const pendingBtn = document.getElementById("pending");
const completedBtn = document.getElementById("completed");
const clearBtn = document.getElementById("clearAll-btn");
const textInput = document.getElementById("text-input");
const taskContainer = document.querySelector(".task");
const taskText = document.querySelector(".task-text");
const container = document.querySelector(".container");


textInput.addEventListener("keyup",(e)=>{
    if(e.key == "Enter"){
        taskContainer.innerHTML = "";
        let count = localStorage.length;
        count++;
        localStorage.setItem(count,textInput.value);
        textInput.value = "";
        updateTask();
    }
})

function updateTask(){
    let index = localStorage.length
    for(let i=1; i<=localStorage.length; i++){
        let value = localStorage.getItem(i)
        let innerTask = document.createElement("div");
        innerTask.className = "inner-task";
        innerTask.innerHTML = `   
                                <div class="task-name">
                                <input type="checkbox" class="myCheckbox" id="checkbox${index}">
                                <label id="checkbox${index}" class="myLabel" for="checkbox${index}">${value}</label>
                                </div>
                                <i class="fa-solid fa-ellipsis"></i>`
    
    
        taskContainer.appendChild(innerTask);
        textInput.value = "";
    }
}


  

clearBtn.addEventListener("click",()=>{
    localStorage.clear();
    taskContainer.innerHTML = "";
    let div = document.createElement("div");
    let elementh5 = document.createElement("h5");
    elementh5.textContent = "Currently No Task Added";
    div.appendChild(elementh5);
    taskContainer.appendChild(div);
})





















 