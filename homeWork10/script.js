//1. Сделать запрос за комментариями сюда
//
//https://jsonplaceholder.typicode.com/comments
//
//получив комментарии, отрезать и оставить только первые 30 комментариев, и отобразить их поля name, email и body на странице.
//
//1.1* У комментария есть поле postId, это идентификатор поста. По этому id нужно найти нужный пост по этому урлу https://jsonplaceholder.typicode.com/posts и отобразить его поле title рядом с комментарием



//let xmlHttp = new XMLHttpRequest();
//xmlHttp.onload = function () {
//    let json = JSON.parse(xmlHttp.responseText);
//    for (let i = 0; i < 30; i++) {
//        let divName = document.createElement("div");
//        divName.innerText = json[i].name;
//        document.body.appendChild(divName);
//        let divEmail = document.createElement("div");
//        divEmail.innerText = json[i].email;
//        document.body.appendChild(divEmail);
//        let divBody = document.createElement("div");
//        divBody.innerText = json[i].body;
//        divBody.style = "margin-bottom:20px;";
//        document.body.appendChild(divBody);
//
//        let url = "https://jsonplaceholder.typicode.com/posts/" + json[i].postId;
//
//        let idHttpRequest = new XMLHttpRequest();
//        idHttpRequest.onload = function () {
//            let title = JSON.parse(idHttpRequest.responseText);
//            let span = document.createElement("span");
//            span.innerText = title.title;
//            span.style = "color:red";
//            divName.appendChild(span);
//
//        };
//        idHttpRequest.open("GET", url);
//        idHttpRequest.send();
//    }
//
//}
//xmlHttp.open("GET", 'https://jsonplaceholder.typicode.com/comments');
//xmlHttp.send();

//2*. Есть API, которое дает сводку информации о погоде на 5 дней
//
//https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247
//
//где appid=a94d0a5ac08570add4b47b8da933f247 это ранее созданный ключ, если у вас работать не будет, то зарегистрируйтесь в сервисе https://openweathermap.org/ и найдите в админке свой ключ
//
//Сделать виджет (сформировать разметку под данные), похожий на скриншот

let xmlHttp = new XMLHttpRequest();
xmlHttp.onload = function () {
    let json = JSON.parse(xmlHttp.responseText);
    let objCity = json.city;
    let divCity = document.querySelector(".city");
    divCity.innerText = objCity.name;

    let weathers = json.list;
    let divTime = document.querySelector(".time");
    let time = new Date()
    divTime.innerText = time.getHours() + ":" + (time.getMinutes() < 10 ? '0' + time.getMinutes() : '' + time.getMinutes());
    console.log(json);

    let tempTag = document.querySelector("temp");
    let mainTemp = weathers[0].main;
    tempTag.innerText = Math.round(mainTemp.temp - 273.15) + " °C";

    let mainWeather = document.querySelector(".main-weather");
    let weatherMain = weathers[0].weather;
    mainWeather.innerText = weatherMain[0].main;

    let imgIcon = document.querySelector(".icon");
    imgIcon.src = "https://openweathermap.org/img/wn/" + weatherMain[0].icon + ".png";

    let divSpeed = document.querySelector(".speed");
    let speed = weathers[0].wind;
    divSpeed.innerText = speed.speed + " m/s";

    let ddd = document.querySelector(".ddd");


    for (let i = 0; i < 40; i = i + 8) {
        let rowWeather = document.createElement("div");
        rowWeather.className = "row row-custom";
        ddd.appendChild(rowWeather);

        let nextTime = document.createElement("div");
        nextTime.className = "col-lg-5";
        nextTime.innerText = weathers[i].dt_txt;
        rowWeather.prepend(nextTime);

        let nextDivIcon = document.createElement("div");
        nextDivIcon.className = "col-lg-2"
        rowWeather.appendChild(nextDivIcon);

        let nextIcon = document.createElement("img");
        let nextWeatherMain = weathers[i].weather;
        nextIcon.src = "https://openweathermap.org/img/wn/" + nextWeatherMain[0].icon + ".png";
        nextDivIcon.appendChild(nextIcon);


        let nextTemp = document.createElement("div");
        nextTemp.className = "col-lg-5 temp";
        let nextMainTemp = weathers[i].main;
        nextTemp.innerText = Math.round(nextMainTemp.temp - 273.15) + " °C";
        rowWeather.appendChild(nextTemp);
    }

}
xmlHttp.open("GET", 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247');
xmlHttp.send();
