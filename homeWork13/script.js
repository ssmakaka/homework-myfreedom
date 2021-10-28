let textarea = document.querySelector("textarea");
textarea.value = 'film';
let result = document.querySelector(".result");
let form = document.querySelector("form");
let snipet = document.querySelector(".snipet");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDEwbtEwvNeXqRPnOHfCxTVqu0C9lOkWWY&q=" + textarea.value + "&type=video")
        .then((response) => response.json())
        .then((data) => {
            let [first, ...last] = data.items;
            let id = first.id.videoId;
            console.log(data);
            fetch("https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v%3D" + id + "&format=json")
                .then((response) => response.json())
                .then((data) => {
                    result.innerHTML = data.html;
                    snipet.innerHTML = "";
                    for (let item of last) {
                        fetch("https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v%3D" + item.id.videoId + "&format=json")
                            .then((response) => response.json())
                            .then((data) => {
                                let img = document.createElement("img");
                                img.src = data.thumbnail_url;
                                snipet.appendChild(img);
                                img.addEventListener("click", function () {
                                    result.innerText = "";
                                    result.innerHTML = data.html;
                                });
                            });
                    }

                });

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
// console.log(obj.read());
// console.log(obj.plus());
// console.log(obj.minus());

// 5) сделать очень простой калькулятор calcPlus. Он умеет добавлять и вычитать любое число, приходящее в качестве параметра в соответствующий метод. Сделать на основе объекта. Одно свойство value: текущее значение калькулятора (по умолчанию ноль), 3 метода: plus, minus, multiply, divide и read (просто выводит в консоль текущее значение)

let obj2 = {
    value: 0
};
obj2.plus = function (number) {
    console.log(obj.value + number)
};
obj2.minus = function (number) {
    console.log(obj.value - number)
};
obj2.multiply = function (number) {
    console.log(obj.value * number)
};
obj2.divide = function (number) {
    console.log(obj.value / number)
};
obj2.read = function (number) {
    console.log(obj2.value);
};
// console.log(obj2.plus(Number(prompt("Введите число +:"))));
// console.log(obj2.minus(Number(prompt("Введите число -:"))));
// console.log(obj2.multiply(Number(prompt("Введите число *:"))));
// console.log(obj2.divide(Number(prompt("Введите число /:"))));
// console.log(obj2.read(Number(prompt("Введите число hz:"))));

// 6. 
// var data = [
//   {name: 'Joe', age: 20},
//   {name: 'Bill', age: 30},
//   {name: 'Kate', age: 23}
// ]
// getNames(data) // should return ['Joe', 'Bill', 'Kate']

var data = [{
        name: 'Joe',
        age: 20
    },
    {
        name: 'Bill',
        age: 30
    },
    {
        name: 'Kate',
        age: 23
    }
]
var data = [{
        name: 'Joe',
        age: 20
    },
    {
        name: 'Bill',
        age: 30
    },
    {
        name: 'Kate',
        age: 23
    }
]

function getNames(objGetNames) {
    let newArray = [];
    for (let i = 0; i < objGetNames.length; i++) {
        newArray.push(objGetNames[i].name);
    };
    return newArray;
}
console.log(getNames(data)) // should return ['Joe', 'Bill', 'Kate']

//   6.
//   Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(string) {
    let [...a] = string;
    for (let i = 0; i < (a.length - 4); i++) {
        a[i] = "#";
    }
    a = a.join("");
    return a;
};
console.log(maskify("Nananananananananananananananana Batman!"));

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
    const offset = 13;
    let result = '';
    for (let item of message) {
        let cod = item.charCodeAt();
        cod = cod + offset;
        result = result + String.fromCharCode(cod);
    }
    return result;
}

// 6.
// We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:


