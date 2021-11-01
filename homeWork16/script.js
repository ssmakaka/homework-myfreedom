class Logo {
    constructor(url) {
        this.top = 0;
        this.left = 0;
        this.width = 200;
        this.imgUrl = url;
        this.html = null;
    }

    init() {
        let img = document.createElement("img");
        img.src = this.imgUrl;
        img.style.position = "absolute";
        this.html = img;
        document.body.style.background = "black";
        this.render();
    }

    render() {
        document.body.appendChild(this.html);
        this.html.style.top = `${this.top}px`;
        this.html.style.left = `${this.left}px`;
        this.html.style.width = `${this.width}px`;
    }

    moveUp() {
        this.top = this.top - 20;
        this.render();
    }
    moveDown() {
        this.top = this.top + 20;
        this.render();
    }
    moveLeft() {
        this.left = this.left - 20;
        this.render();
    }
    moveRight() {
        this.left = this.left + 20;
        this.render();
    }
}

const imgUrl = 'https://bit.ly/2tcDito';
let mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
// something else, чтобы всё работало