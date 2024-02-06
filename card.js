class card {
    constructor(color="#4ba3b1", 
                title="title", 
                desc="description", 
                img="path", 
                onclick="url"){
        this.color = color;
        this.title = title;
        this.desc = desc;
        this.img = img;
        this.onclick = onclick;
    }
}

const signalCard = card((color = "#0f566a"), (title = "Signal Processing"));