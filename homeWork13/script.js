let textarea = document.querySelector("textarea");
let result = document.querySelector(".result");
let form = document.querySelector("form");
let snipet = document.querySelector(".snipet");

function createSnipet(cod) {
    let div = document.createElement("div");
    div.innerHTML = cod;
    snipet.appendChild(div);
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDEwbtEwvNeXqRPnOHfCxTVqu0C9lOkWWY&q=" + textarea.value + "&type=video")
        .then((response) => response.json())
        .then((data) => {
            let allId = data.items;
            for (let item of allId) {
                fetch("https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v%3D" + item.id.videoId + "&format=json")
                    .then((response) => response.json())
                    .then((data) => {
                        createSnipet(data.html);
                    });
            };

        });

});


//3) Написать функцию, которая принимает на вход массив чисел, а возвращает массив только из значений, встречающихся в массиве лишь один раз
//
//[1,3,5,5,7,9,9,1,3,3,5,6,10,11,10,5] => [1,3,5,7,9,6,10,11]

let array1 = [1, 3, 5, 5, 7, 9, 9, 1, 3, 3, 5, 6, 10, 11, 10, 5];

function single(array) {
    let newArray = [];
    for (let item of array) {
        if (!newArray.includes(item)) {
            newArray.push(item);
        }
    }
    return newArray;
}
console.log(single(array1));


//4) сделать очень простой калькулятор calc. Он умеет добавлять и вычитать единицу. Сделать на основе объекта. Одно свойство value: текущее значение калькулятора (по умолчанию ноль), 3 метода: plus, minus и read (просто выводит в консоль текущее значение) 

let obj = {
    value: 0
};
obj.read = function () {
    console.log(obj.value)
};
obj.plus = function () {
    console.log(obj.value = obj.value + 1)
}
obj.minus = function () {
    console.log(obj.value = obj.value - 1)
}
console.log(obj.read());
console.log(obj.plus());
console.log(obj.minus());
