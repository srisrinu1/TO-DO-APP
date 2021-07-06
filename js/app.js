const inputBox = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todoList");
inputBox.onkeyup = () => {
    let UserData = inputBox.value;
    if (UserData.trim() != 0) {
        addBtn.classList.add("active");

    } else {
        addBtn.classList.remove("active");
    }
}
addBtn.onclick = () => {
    let UserData = inputBox.value;
    let getStorage = localStorage.getItem("New Todo");
    // let Arrlst = []
    if (getStorage === null) {
        Arrlst = []
    } else {
        Arrlst = JSON.parse(getStorage);
    }
    Arrlst.push(UserData);
    localStorage.setItem("New Todo", JSON.stringify(Arrlst));
    // console.log(getStorage);
    // console.log(Arrlst);
    showTasks();

}

function showTasks() {
    let getStorage = localStorage.getItem("New Todo");
    if (getStorage === null) {
        Arrlst = []
    } else {
        Arrlst = JSON.parse(getStorage);
    }
    let newLiTag = ''
    Arrlst.forEach((element, Index) => {
        newLiTag += `
        <li>${element}<span><i class="fas fa-trash"></i></span></li>`
    });
    todoList.innerHTML = newLiTag;
}