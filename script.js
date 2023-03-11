document.querySelector("#push").onclick = () => {
    if(document.querySelector("#newtask input").value.length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector("#tasks").innerHTML += `
        <div class="task">
            <span id="taskname">
                ${ document.querySelector("#newtask input").value}
            </span>
            <button class="delete">
            <i class="fa-solid fa-trash-can"></i>
            </button>      
        </div>
        `;

        const current_tasks = document.querySelectorAll(".delete");
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        const task = document.querySelectorAll(".task");
        for (let i = 0; i < task.length; i++) {
            task[i].onclick = function() {
                this.classList.toggle("completed");
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}