let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("please Enter task")
    }
    else {
        let newElem = document.createElement("ul");
        newElem.innerHTML = `${inputs.value} <i class="fa-solid fa-trash fa-beat-fade"></i>`;
        text.appendChild(newElem);
        inputs.value = ""
        newElem.querySelector("i").addEventListener("click", remove);
        function remove(){
            newElem.remove();
        }
    }
}