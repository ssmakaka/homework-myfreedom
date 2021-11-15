// 1) Запромисифаить setTimeout

// Сделать функцию delay, которая в свою очередь будет возвращать промис, внутри которого будет setTimeout, как только время будет доходить до конца, необходимо резолвить ( дергать коллбек resolve() ). Функция delay принимает один параметр - время в миллисекундах

function delay (sec){
    let promise = new Promise(function(resolve){
        setTimeout(() => {
            resolve(123);
        }, sec);
    });
    return promise;
}
delay(2000).then((number) => console.log(number));


// 2) Запромисифаить setTimeout

// Сделать функцию timeout, которая в свою очередь будет возвращать промис, внутри которого будет setTimeout, как только время будет доходить до конца, необходимо реджектить ( дергать коллбек reject() ). Функция timeout принимает один параметр - время в миллисекундах

function timeout (sec){
    let promise = new Promise(function(reject){
        setTimeout(() => {
            reject( new Error());
        }, sec);
    });
    return promise;
}
timeout(5000).then((number) => console.log(number));


// 3) (решение есть в конспекте) Используя промисы, реализовать функцию getData из предыдущего занятия, которая принимает один параметр (урл) и возвращает промис, на котором можно вызвать then и передать туда функцию, которая выполнится, когда запрос завершится. Т.о. должен работать следующий код

// ```js

// let promise = getData("https://todoappexamplejs.herokuapp.com/items.json");

// promise.then((response) => (document.body.innerText = response));

// ```

// function getData(url) {
//     return new Promise(function (resolve) {
//         const request = new XMLHttpRequest();
//         request.open("GET", url);

//         request.onload = function () {
//             resolve(request.responseText);
//         };
        
//         request.send();
//     });
// }

// let promise = getData("https://todoappexamplejs.herokuapp.com/items.json");
// promise.then((response) => (document.body.innerText = response));


// 4*) Не используя промисы релизовать функцию getData, с которой будет выполняться следующий код

// let promise = getData('https://todoappexamplejs.herokuapp.com/items.json')

// setTimeout(() => promise.then(response => document.body.textContent = response), 2000)


function getData(url) {
    let result = {
      then: function (callback) {
        result.callbackField = callback;
      }
    };
    let httpRequest = new XMLHttpRequest();
    httpRequest.onload = function () {
      result.callbackField(httpRequest.responseText);
    };
    httpRequest.open("GET", url);
    httpRequest.send();
    return result;
  }
  
  let something = getData("https://todoappexamplejs.herokuapp.com/items.json");
  something.then((responseText) => (document.body.innerText = responseText));