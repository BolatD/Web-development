const list = [];
 function eraseTask (className) {
    document.getElementById('toDoList').removeChild(document.body.getElementsByClassName("task_div " + className)[0]);
};
 function crossText (className) {

    let checkbox = document.body.getElementsByClassName("check " + className)[0];
    if(checkbox.checked === true){
        document.body.getElementsByClassName("task_text " + className)[0].setAttribute("style","text-decoration: line-through;");
    }
    else{
        document.body.getElementsByClassName("task_text " + className)[0].setAttribute("style","text-decoration: none;");
    }
};
 function handleButtonClick  () {
    let element = document.getElementById("typer");
   {
        let div = document.createElement('div');
        list.push(div);
        div.className = "task_div " + list.length;
        
        let checkbox = document.createElement('input');
        checkbox.setAttribute("type","checkbox");
        checkbox.className = "check " + list.length;
        checkbox.setAttribute("onclick",`crossText(${checkbox.className.split(' ')[1]})`);

        let taskText = document.createElement('div');
        taskText.className = "task_text " + list.length;
        taskText.textContent = element.value;

        let img = document.createElement('img');
        img.src = "https://okeygeek.ru/wp-content/uploads/2019/10/ios12-iphone-x-mail-delete-messages-trash-icon-thumbnail_2x.png";
        img.className = "trash " + list.length;
        img.setAttribute("onclick",`eraseTask(${ img.className.split(' ')[1] })`);

        div.appendChild(checkbox);
        div.appendChild(taskText);
        div.appendChild(img);
        document.getElementById("toDoList").appendChild(div);
        element.value = "";
    }
};