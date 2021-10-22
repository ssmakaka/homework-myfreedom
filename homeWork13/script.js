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
            let [first, ...last] = data.items;
            let id = first.id.videoId;
            fetch("https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v%3D" + id + "&format=json")
                .then((response) => response.json())
                .then((data) => {
                    result.innerHTML = data.html;
                    snipet.innerText = "";

                    for (let item of last) {
                        fetch("https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v%3D" + item.id.videoId + "&format=json")
                            .then((response) => response.json())
                            .then((data) => {
                                createSnipet(data.html);
                                let iframe = document.querySelector("iframe");
                                iframe.addEventListener("click", function () {
                                    result.innerText = "";
                                });
                            });
                    }

                });

        });

});
