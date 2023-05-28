const allBtn = document.getElementById("all");
const pendingBtn = document.getElementById("pending");
const completedBtn = document.getElementById("completed");
const clearBtn = document.getElementById("clearAll-btn");
const textInput = document.getElementById("text-input");
const taskContainer = document.querySelector(".task");
const taskText = document.querySelector(".task-text");
const container = document.querySelector(".container");


textInput.addEventListener("keyup", (e) => {
    if (e.key == "Enter" && textInput.value) {
        taskContainer.innerHTML = "";
        let count = localStorage.length;
        count++;
        localStorage.setItem(count, textInput.value);
        textInput.value = "";
        updateTask();
    }
})


let complete = [];



function updateTask() {
    let index = localStorage.length;
    let completedTaskIndex = JSON.parse(localStorage.getItem("completed"));
  
    let num = 0;
    if (completedTaskIndex) num = 1;
    if (index) {
        for (let i = 1; i <= localStorage.length - num; i++) {
            let value = localStorage.getItem(i);
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
            index++;
        }
    }


    if (localStorage.length) {
        const checkboxes = document.querySelectorAll(".myCheckbox");
        const labels = document.querySelectorAll(".myLabel");


        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("click", () => {
                labels.forEach((label) => {
                    if (checkbox.id == label.id) {
                        label.classList.toggle("labelText");
                        if (label.classList.contains("labelText")) {
                            completeTask(label.textContent);

                        }
                        if (!(label.classList.contains("labelText"))) {
                            let index = complete.indexOf(label.textContent);
                            complete.splice(index, 1);
                            updateLocalStorage();
                        }

                    }
                })
            })
        })

        completedBtn.addEventListener("click", () => {
        })

    }

}

function completeTask(labelName) {
    complete.push(labelName);
    updateLocalStorage();
}
function updateLocalStorage() {
    let arrayString = JSON.stringify(complete);
    localStorage.removeItem("completed");
    localStorage.setItem("completed", arrayString);
}





clearBtn.addEventListener("click", () => {
    localStorage.clear();
    taskContainer.innerHTML = "";
    let div = document.createElement("div");
    let elementh5 = document.createElement("h5");
    elementh5.textContent = "Currently No Task Added";
    div.appendChild(elementh5);
    taskContainer.appendChild(div);
})

window.onload = () => {
    updateTask();
    let updateCompleteTask = JSON.parse(localStorage.getItem("completed"));
if (updateCompleteTask) {
    const checkboxes = document.querySelectorAll(".myCheckbox");
    const labels = document.querySelectorAll(".myLabel");
    updateCompleteTask.forEach((element) => {
        if(checkboxes && labels){
            checkboxes.forEach((checkbox)=>{
                labels.forEach((label)=>{
                    if(checkbox.id == label.id){
                        if(element == label.textContent){
                            label.classList.add("labelText");
                            checkbox.checked = true;
                            console.log(label.textContent);
                            complete.push(element);
                        }
                    }
                })
            })
        }

    })
}
}























