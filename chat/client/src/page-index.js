
//import {signin} from './chat-api' 
//import { characterList } from "./page-chat"


window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }
});




const flecheGauche = () => {

    var character1 = document.getElementById('background-character1');
    var character2 = document.getElementById('select-character');
    var character3 = document.getElementById('background-character2');

    character1.replaceWith(character2);

}

const flecheDroite = () => {
    character1.removeChild();

}


//append/remove child

//local storage

stockage = localStorage

var background = stockage.setItem(document.getElementById("background-list"));
var selectedCharacter = stockage.setItem("");


let characterList = [
    {  
        id: id++,
        name: "Roland",
        path: "img/sprites/RolandSprite.png",
        cardPath: "img/cards/rolandCard.png",
    },
    {   
        id: id++,
        name: "Malkuth",
        path: "img/sprites/MalkuthSprite.png",
        cardPath: "img/cards/malkuthCard.png",
    },
    {   
        id: id++,
        name: "Yesod",
        path: "img/sprites/YesodSprite.png",
        cardPath: "img/cards/yesodCard.png",
    },
    {   
        id: id++,
        name: "Netzach",
        path: "img/sprites/NetzachSprite.png",
        cardPath: "img/cards/netzachCard.png",
    },
    {   
        id: id++,
        name: "Hod",
        path: "img/sprites/HodSprite.png",
        cardPath: "img/cards/hodCard.png",
    },
    {   
        id: id++,
        name: "Tipereth",
        path: "img/sprites/TiperethSprite.png",
        cardPath: "img/cards/tiperethCard.png",
    },
    {   
        id: id++,
        name: "Gebura",
        path: "img/sprites/GeburaSprite.png",
        cardPath: "img/cards/geburaCard.png",
    },
    {   
        id: id++,
        name: "Chesed",
        path: "img/sprites/ChesedSprite.png",
        cardPath: "img/cards/chesedCard.png",
    },
    {   
        id: id++,
        name: "Binah",
        path: "img/sprites/BinahSprite.png",
        cardPath: "img/cards/binahCard.png",
    },
    {   
        id: id++,
        name: "Hokma",
        path: "img/sprites/HokmaSprite.png",
        cardPath: "img/cards/hokmaCard.png",
    },

]