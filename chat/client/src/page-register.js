import {register} from './chat-api';

let canvas = null;
let ctx = null;
let spritelist = [];

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        canvas = document.getElementById("#canvas");
        ctx = canvas.getContext('2d');

        tick();
        return register(this);
    }
})


const tick = () => {
    ctx.clearRect(0,0, canvas.width, canvas.height);

    if (Math.random() < 0.2){
        spritelist.push(new Book());
    }

    for (let i = 0; i < spritelist.length; i++) {
        const sprite = spritelist[i];
        let alive = sprite.tick();

        if (!alive) {
            spritelist.splice(i, 1);
            i--;
        }
    }

    
    window.requestAnimationFrame(tick);
}

class Book {
    constructor(){
        this.x = Math.random()*canvas.width; 
        this.y = Math.random()*canvas.width;;
        this.w = this.size;
        this.h = this.size;
        this.speed = Math.random()*3;
        


    }


    tick(){
    



        let alive = true;

        if (this.y > canvas.height){
            alive = false;
        }

        return alive;
    }
}

