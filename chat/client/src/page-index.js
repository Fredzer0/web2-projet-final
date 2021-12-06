import {signin} from './chat-api' 


window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }

});

var characterList = ["url(img/sprites/BinahSprite.png)", "url(img/sprites/RolandSprite.png)", "url(img/sprites/MalkuthSprite.png)", "url(img/sprites/YesodSprite.png)", "url(img/sprites/NetzachSprite.png)","url(img/sprites/HodSprite.png)","url(img/sprites/TiperethSprite.png)","url(img/sprites/GeburaSprite.png)","url(img/sprites/ChesedSprite.png)", "url(img/sprites/HokmaSprite.png)"]

var Cid = 1;
var character1 = document.getElementById('background-character1');
var character2 = document.getElementById('select-character');
var character3 = document.getElementById('background-character2');
var node = document.getElementById("zone-character");
var posX = node.style.marginRight;
var loop = 0;

const flecheGauche = () => {

    posX += 21;
    loop++;
  
    node.style.marginLeft = posX + "px";
    if (loop <= 20 ){
        character1.style.opacity = parseFloat(character1.style.opacity) + 0.03;
        character2.style.opacity = parseFloat(character2.style.opacity) - 0.03;
        character3.style.opacity = parseFloat(character3.style.opacity) - 0.05;
        setTimeout(flecheGauche, 30);
 
    }
    else{
        changeCharacterLeft();
        node.style.marginLeft = 0 + "px";
        character1.style.opacity = 0.35;
        character2.style.opacity = 1;
        character3.style.opacity = 0.35;
        loop = 0;
        posX = 0;
    }

}

const flecheDroite = () => {

   
    posX += 20;
    loop++;
  
    node.style.marginRight = posX + "px";
    if (loop <= 20 ){
        character1.style.opacity = parseFloat(character1.style.opacity) - 0.05;
        character2.style.opacity = parseFloat(character2.style.opacity) - 0.03;
        character3.style.opacity = parseFloat(character3.style.opacity) + 0.03;
        setTimeout(flecheDroite, 30);
 
    }
    else{
        changeCharacterRight();
        node.style.marginRight = 0 + "px";
        character1.style.opacity = 0.35;
        character2.style.opacity = 1;
        character3.style.opacity = 0.35;
        loop = 0;
        posX = 0;
    }
}


const changeCharacterRight = () => {
    Cid ++;


    if (Cid == characterList.length - 1){
        character1.style.backgroundImage = characterList[Cid -  1];
        character2.style.backgroundImage = characterList[Cid];
        character3.style.backgroundImage = characterList[0];

    }
    else if (Cid == characterList.length){
        Cid = 0;
        character1.style.backgroundImage = characterList[characterList.length - 1];
        character2.style.backgroundImage = characterList[Cid];
        character3.style.backgroundImage = characterList[Cid + 1];

    }
    else{
        character1.style.backgroundImage = characterList[Cid - 1];
        character2.style.backgroundImage = characterList[Cid];
        character3.style.backgroundImage = characterList[Cid + 1];
    }

}

const changeCharacterLeft = () => {
    Cid --;

    if (Cid == 0){
        character1.style.backgroundImage = characterList[characterList.length - 1];
        character2.style.backgroundImage = characterList[Cid];
        character3.style.backgroundImage = characterList[Cid + 1];

    }
    else if (Cid == -1){
        Cid = characterList.length - 1;
        character1.style.backgroundImage = characterList[Cid - 1];
        character2.style.backgroundImage = characterList[Cid];
        character3.style.backgroundImage = characterList[0];

    }
    else{
        character1.style.backgroundImage = characterList[Cid - 1];
        character2.style.backgroundImage = characterList[Cid];
        character3.style.backgroundImage = characterList[Cid + 1];
    }



}

/*
var stockage = window.localStorage;

stockage.setItem("character", Cid);
stockage.setItem("background", document.getElementById("background-list"))

*/