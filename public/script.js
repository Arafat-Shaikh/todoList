const allBtn = document.getElementById("all");
const pendingBtn = document.getElementById("pending");
const completedBtn = document.getElementById("completed");
const clearBtn = document.getElementById("clearAll-btn");
const textInput = document.getElementById("text-input");
const taskContainer = document.querySelector(".task");
const taskText = document.querySelector(".task-text");

console.log(taskContainer);


textInput.addEventListener("keyup",(e)=>{
    if(e.key == "Enter"){
        taskText.innerHTML = ""
        let innerTask = document.createElement("div");
        innerTask.className = "inner-task";
        innerTask.innerHTML = `   
                                <div class="task-name">
                                <input type="checkbox" id="myCheckbox">
                                <label for="myCheckbox">${textInput.value}</label>
                                </div>
                                <i class="fa-solid fa-ellipsis"></i>`


    taskContainer.appendChild(innerTask);
    textInput.value = "";

    }
})

clearBtn.addEventListener("click",()=>{
    taskContainer.innerHTML = "";
})
