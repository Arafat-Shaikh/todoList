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
let complete = [];
let incomplete = [];
function updateTask(){
    let index = localStorage.length
    if(localStorage.length){
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
            index++;
        }
    }


    if(localStorage.length){
        const checkboxes = document.querySelectorAll(".myCheckbox");
        const labels = document.querySelectorAll(".myLabel");
    
        checkboxes.forEach((checkbox)=>{
            checkbox.addEventListener("click",()=>{
                labels.forEach((label)=>{
                    if(checkbox.id == label.id){
                        label.classList.toggle("labelText");
                        if(label.classList.contains("labelText")){
                            completeTask(label.textContent);
                            let index = incomplete.indexOf(label.textContent);
                            if(index){
                                incomplete.splice(index,1);
                            }
                        }
                        if(!(label.classList.contains("labelText"))){
                            incomplete.push(label.textContent);

                           let index = complete.indexOf(label.textContent);
                           if(index){
                               complete.splice(index,1);

                           }
                        }
                      
                    }
                })
                console.log(complete);
                console.log(incomplete);
            })
        })
    }
 
}

function completeTask(labelName){
    complete.push(labelName);
    let arrayString = JSON.stringify(complete);
    localStorage.setItem("completed",arrayString);
}



completedBtn.addEventListener("click",()=>{
    
})

clearBtn.addEventListener("click",()=>{
    localStorage.clear();
    taskContainer.innerHTML = "";
    let div = document.createElement("div");
    let elementh5 = document.createElement("h5");
    elementh5.textContent = "Currently No Task Added";
    div.appendChild(elementh5);
    taskContainer.appendChild(div);
})

window.onload = () =>{
    updateTask();
}

  























 