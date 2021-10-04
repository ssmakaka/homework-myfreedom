let textarea = document.querySelector("textarea");
let result = document.querySelector(".result");
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let a = new XMLHttpRequest();
    a.onload = function () {
        let searchJSON = JSON.parse(a.responseText);
        let itemsArray = searchJSON.items;
        let idOnj = itemsArray[0].id;
        let id = idOnj.videoId;

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onload = function () {
            videoJSON = JSON.parse(xmlHttp.responseText);
            console.log(videoJSON);
            result.innerHTML = videoJSON.html;

        };

        xmlHttp.open("GET", "https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v%3D" + id + "&format=json");
        xmlHttp.setRequestHeader("Accept", "application/json");
        xmlHttp.send();

    }
    a.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDEwbtEwvNeXqRPnOHfCxTVqu0C9lOkWWY&q=" + textarea.value + "&type=video");
    a.send();
});
