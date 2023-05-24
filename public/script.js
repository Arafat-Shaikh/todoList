const allBtn = document.getElementById("all");
const pendingBtn = document.getElementById("pending");
const completedBtn = document.getElementById("completed");
const clearBtn = document.getElementById("clearAll-btn");
const textInput = document.getElementById("text-input");
const taskContainer = document.querySelector(".task");
const taskText = document.querySelector(".task-text");
const container = document.querySelector(".container");

container.scrollTop = container.scrollHeight;
let task = 1;

textInput.addEventListener("keyup", (e) => {

    if (e.key == "Enter") {
        task = localStorage.length;
        console.log(task)
        task += 1;
        localStorage.setItem(task, textInput.value)
        renderTask(textInput.value)


    }
})

function renderTask(task) {
    taskText.innerHTML = "";
    let innerTask = document.createElement("div");
    innerTask.className = "inner-task";
    innerTask.innerHTML = `   
                            <div class="task-name">
                            <input type="checkbox" id="myCheckbox">
                            <label for="myCheckbox">${task}</label>
                            </div>
                            <i class="fa-solid fa-ellipsis"></i>`


    taskContainer.appendChild(innerTask);
    textInput.value = "";
}

clearBtn.addEventListener("click", () => {
    taskContainer.innerHTML = "";
    localStorage.clear();
})

window.onload = ()=>{
    for(let i=1; i<localStorage.length; i++){
        let value = localStorage.getItem(i);
        renderTask(value)
    }
}

