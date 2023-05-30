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





function updateTask() {
    let index = localStorage.length;
    let completedTaskIndex = JSON.parse(localStorage.getItem("completed"));

    let num = 0;
    if (completedTaskIndex) num = 1;
    if (index) {
        for (let i = 1; i <= (localStorage.length - num); i++) {
            let value = localStorage.getItem(i);
            let innerTask = document.createElement("div");
            innerTask.className = "inner-task";
            innerTask.innerHTML = `   
                                    <div class="task-name">
                                    <input type="checkbox" class="myCheckbox" id="checkbox${index}">
                                    <label id="checkbox${index}" class="myLabel" for="checkbox${index}">${value}</label>
                                    </div>
                                    `


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
                            updateLocalStorage(label.textContent);
                        }

                    }
                })
            })
        })



    }

}

function completeTask(labelName) {
    let complete = [];
    let completeCompleteTask = JSON.parse(localStorage.getItem("completed"));
    if(completeCompleteTask){
         completeCompleteTask.forEach((element)=>{
            complete.push(element);
        })        
    }
    complete.push(labelName);
    let arrayString = JSON.stringify(complete);
    localStorage.setItem("completed",arrayString);


}
function updateLocalStorage(labelName) {
    let complete = [];
    let completeTask = JSON.parse(localStorage.getItem("completed"));
    if(completeTask){
        completeTask.forEach((element)=>{
            complete.push(element)
        })
    }
    for(let i=0; i<complete.length; i++){
        if(complete[i] == labelName){
            complete.splice(complete.indexOf(complete[i]));
            break;
        }
    }
    localStorage.setItem("completed",JSON.stringify(complete));
  
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

    const checkboxes = document.querySelectorAll(".myCheckbox");
    const labels = document.querySelectorAll(".myLabel");

    if(checkboxes && labels){
        let completed = JSON.parse(localStorage.getItem("completed"));
        if(completed.length){
            completed.forEach((value)=>{
                checkboxes.forEach((checkbox)=>{
                    labels.forEach((label)=>{
                        if(checkbox.id == label.id){
                            if(value == label.textContent){
                                checkbox.checked = true;
                                label.classList.toggle("labelText");
                            }
                        }
                    })
                })
            })
        }
    }
}






















