function createItem(tag, className, parentItem, text) {
    let temp = document.createElement(tag);
    temp.className = className;
    temp.innerText = text;
    parentItem.appendChild(temp);
    return temp;
}

function createRow(text, status, urgency, date) {
    let liTask = createItem("div", "row li-task", divContainer, "");
    liTask.style = "margin-top: 10px; border-bottom: 1px solid #ddd; padding-bottom: 20px; padding-top: 20px;";


    let divCheckbox = createItem("div", "col-lg-1", liTask, "");

    let inputCheckbox = createItem("input", "", divCheckbox, "");
    inputCheckbox.type = "checkbox";
    inputCheckbox.checked = status;

    let divTextTask = createItem("div", "col-lg-5", liTask, "");

    let textTask = createItem("div", "text-task", divTextTask, text);
    textTask.style = "margin-bottom: 10px;"

    let select = createItem("select", "form-select form-select-sm", divTextTask, "");

    let option1 = createItem("option", "", select, "несрочная неважная");
    option1.value = "несрочная неважная";

    let option2 = createItem("option", "", select, "несрочная важная");
    option2.value = "несрочная важная";

    let option3 = createItem("option", "", select, "срочная неважная");
    option3.value = "срочная неважная";

    let option4 = createItem("option", "", select, "срочная важная");
    option4.value = "срочная важная";

    select.value = urgency;
    let divEdit = createItem("div", "col-lg-2", liTask, '');

    select.setAttribute("disabled", "disabled");

    let dateText = createItem("small", "", divTextTask, date);
    //    dateText.innerText = dateInput.value;

    let buttonEdit = createItem("button", "btn btn-link", divEdit, "Edit");
    buttonEdit.type = "button";

    let divDelete = createItem("div", "col-lg-2", liTask, "");

    let buttonDelete = createItem("button", "btn btn-danger", divDelete, "Delete");
    buttonDelete.type = "button";

    if (status == true) {
        textTask.style.color = "grey";
        textTask.style.textDecoration = "line-through";
    } else {
        textTask.style.color = "black";
        textTask.style.textDecoration = "none";
    };

    inputCheckbox.addEventListener('click', () => {
        if (inputCheckbox.checked == true) {
            liTask.remove();
            divContainer.appendChild(liTask);
            textTask.style.color = "grey";
            textTask.style.textDecoration = "line-through";

            for (let obj of tasks) {
                if (obj.text == textTask.innerText && obj.status != inputCheckbox.checked) {
                    tasks.splice(tasks.indexOf(obj), 1);
                    tasks.push(obj);
                }
            }
        } else {
            liTask.remove();
            divContainer.prepend(liTask);
            textTask.style.color = "black";
            textTask.style.textDecoration = "none";
            for (let obj of tasks) {
                if (obj.text == textTask.innerText && obj.status != inputCheckbox.checked) {
                    tasks.splice(tasks.indexOf(obj), 1);
                    tasks.unshift(obj);
                }
            }
        }

        for (let obj of tasks) {
            if (obj.text == textTask.innerText && obj.status != inputCheckbox.checked) {
                obj.status = inputCheckbox.checked;
            }
        }
        localStorage.tasks = JSON.stringify(tasks);
        //Перемещение задачи в конец списка при маркировке как сделанной
    });

    buttonDelete.addEventListener('click', () => {
        liTask.remove();

        for (let obj of tasks) {
            if (obj.text == textTask.innerText && obj.status == inputCheckbox.checked) {
                tasks.splice(tasks.indexOf(obj), 1);
            }
        }
        localStorage.tasks = JSON.stringify(tasks);
    });

    buttonEdit.addEventListener("click", () => {
        let inputEdit = createItem("input", "form-control", divTextTask, '');
        divTextTask.prepend(inputEdit);
        inputEdit.value = textTask.innerText;

        textTask.innerText = "";
        buttonEdit.className = "btn btn-link disabled";
        select.removeAttribute("disabled");

        let inputDataEdit = createItem("input", "form-control", divTextTask, "");
        inputDataEdit.type = "date";
        inputDataEdit.value = dateText.innerText;
        dateText.innerText = "";

        let editItem = {};

        for (let obj of tasks) {
            if (obj.text == inputEdit.value && obj.status == inputCheckbox.checked) {
                editItem = obj;
            }
        }

        inputEdit.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                textTask.innerText = inputEdit.value;
                inputEdit.remove();
                buttonEdit.className = "btn btn-link";
                editItem.text = textTask.innerText;
                editItem.urgency = select.value;
                select.setAttribute("disabled", "disabled");
                dateText.innerText = inputDataEdit.value;
                editItem.date = inputDataEdit.value;
                inputDataEdit.remove();

                localStorage.tasks = JSON.stringify(tasks);
            };
        });
        select.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                textTask.innerText = inputEdit.value;
                inputEdit.remove();
                buttonEdit.className = "btn btn-link";
                editItem.text = textTask.innerText;
                editItem.urgency = select.value;
                select.setAttribute("disabled", "disabled");
                dateText.innerText = inputDataEdit.value;
                editItem.date = inputDataEdit.value;
                inputDataEdit.remove();

                localStorage.tasks = JSON.stringify(tasks);
            };
        });
        inputDataEdit.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                textTask.innerText = inputEdit.value;
                inputEdit.remove();
                buttonEdit.className = "btn btn-link";
                editItem.text = textTask.innerText;
                editItem.urgency = select.value;
                select.setAttribute("disabled", "disabled");
                dateText.innerText = inputDataEdit.value;
                editItem.date = inputDataEdit.value;
                inputDataEdit.remove();

                localStorage.tasks = JSON.stringify(tasks);
            };
        });
        //Редактирование задач
    });

};
let inputText = document.querySelector("input[type='text']");
let ul = document.querySelector("ul");
let form = document.querySelector("form");
let divContainer = document.querySelector(".all-task");
let select = document.querySelector("select");
let dateInput = document.querySelector("input[type='date']");
let tasks = [];

if (localStorage.tasks) {
    tasks = JSON.parse(localStorage.tasks);
};

for (let task of tasks) {
    createRow(task.text, task.status, task.urgency, task.date);
};

form.addEventListener("submit", function (event) {
    event.preventDefault();
    createRow(inputText.value, false, select.value, dateInput.value);
    tasks.push({
        text: inputText.value,
        status: false,
        urgency: select.value,
        date: dateInput.value
    });
    inputText.value = "";
    dateInput.value = "";
    localStorage.tasks = JSON.stringify(tasks);
});
