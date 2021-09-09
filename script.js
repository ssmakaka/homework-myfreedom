//1. Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша

//let input = document.querySelector("input.input");
//let ul = document.querySelector("ul");
//
//input.addEventListener("keydown", function (event) {
//    let li = document.createElement("li");
//    li.innerText = event.key;
//    ul.appendChild(li);
//});



//2. Вставить в разметку html теги input и div без js (просто предусмотреть в разметке). Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля)
//
//2.1 Каждый раз при изменении данных в инпуте, в предусмотренный div должна вписываться фраза "Клиент набирает: ВСЕ_ЧТО_НАБРАНО_В_ИНПУТЕ".


//let input = document.querySelector("input.input");
//let div = document.querySelector("div");
//
//input.addEventListener("keyup", function (event) {
//    console.log(input.value);
//    div.innerText = "Клиент набирает: " + input.value;
//});



//3. Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст. После отправки формы инпут должен быть очищен (проставить пустую строку в value). Подсказки смотрите в последнем задании с предыдущего занятия в конспекте.

//let form = document.querySelector("form");
//let input = document.querySelector("input.input");
//let ul = document.querySelector("ul");
//
//form.addEventListener("submit", (event) => {
//    event.preventDefault();
//    let li = document.createElement("li");
//    li.innerText = input.value;
//    ul.appendChild(li);
//    input.value = "";
//});


//4*. Калькулятор 2.0. Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div. Делать можно как с eval, так и с if-else.

//
//let form = document.querySelector("form");
//let input1 = document.querySelector("input.input");
//let input2 = document.querySelector("input.input2");
//let result = document.querySelector("div");
//let select = document.querySelector("select");
//form.addEventListener("submit", () => {
//    event.preventDefault();
//    let rez;
//
//
//    //    switch (select.value) {
//    //        case '+':
//    //            rez = Number(input1.value) + Number(input2.value);
//    //            break;
//    //        case '-':
//    //            rez = input1.value - input2.value;
//    //            break;
//    //        case '*':
//    //            rez = input1.value * input2.value;
//    //            break;
//    //        case '/':
//    //            if (input2.value == 0) {
//    //                rez = "infinity"
//    //            } else {
//    //                rez = input1.value / input2.value;
//    //            }
//    //            break;
//    //    }
//    
//    
//    
//    
//    result.innerText = eval(`${input1.value} ${select.value} ${input2.value}`);
//});



//5 * .Вставить в разметку html тег button без js(просто предусмотреть в разметке).При наведении на кнопку изменять ее цвет каждый раз рандомным цветом.При выведении мышки за пределы кнопки, поворачивать кнопку на рандомный угол от - 180 до 180 градусов.Использовать обработку событий mouseenter, mouseleave на этой кнопке.

let button = document.querySelector("button");
button.addEventListener("mouseenter", () => {
    let min = 0;
    let max = 255;
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
    let b = Math.floor(Math.random() * (max - min + 1)) + min;
    let c = Math.floor(Math.random() * (max - min + 1)) + min;
    button.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
});
button.addEventListener("mouseleave", () => {
    let min = -180;
    let max = 180;
    let d = Math.floor(Math.random() * (max - min + 1)) + min;
    button.style.transform = `rotate(${d}deg)`;
});




//Если строка s состоит из нескольких слов, разделенных некоторым количеством пробелов, вернуть длину последнего слова в строке. Слово - это максимальная подстрока, состоящая только из непробельных символов.
//1 <= s.length <= 104
//s состоит только из английских букв и пробелов ''.
//В s будет хотя бы одно слово.
//let s = prompt().split(' ');
//console.log(s[s.length - 1].length);
