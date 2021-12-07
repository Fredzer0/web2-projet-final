import {register} from './chat-api';

let canvas = null;
let ctx = null;
let spriteList = [];

window.addEventListener("load", () => {
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext('2d');
    tick();
    document.querySelector("form").onsubmit = function () {

      
        return register(this);
    }
})


const tick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.15){
        spriteList.push(new lightParticle());
    }

    for (let i = 0; i < spriteList.length; i++) {
        const sprite = spriteList[i];
        let alive = sprite.tick();

        if (!alive) {
            spriteList.splice(i, 1);
            i--;
        }
    }
    
    window.requestAnimationFrame(tick);
}
 
class lightParticle {  //des particules de lumière pour de l'ambiance
    constructor(){
        this.size = 5;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.w = 3;
        this.h = 3;
        this.opacity = 0.8;
        this.speed = 0.05;
        
    }

    tick(){
    
        this.y -= this.speed;
        this.opacity -= 0.005;
        ctx.fillStyle = "rgba(252,253,200," + this.opacity+ ")";
       

        ctx.beginPath();  
        ctx.arc(this.x,this.y,this.size,0, Math.PI*2, true); 
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();

        let alive = true;

        if (this.opacity <= 0) {
            alive = false;
        }

        return alive;
    }
}

