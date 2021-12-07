import {registerCallbacks, sendMessage, signout, chatMessageLoop} from './chat-api';
import Vue from 'vue'
import App from './App.vue'


new Vue({
	el: '#main-container',
	components: { App },
	template: '<App/>'
})

var stockage = window.localStorage;

export var background = stockage.getItem("background"); 
export var mainCharacter = stockage.getItem("character");
export var nouveauMessage;
export var membre = {};

var id = -1;

export let characterList = [ //liste des personnages à apparaitre
    {   
        id: id++,
        name: "Binah",
        path: "img/sprites/BinahSprite.png",
    },
    {  
        id: id++,
        name: "Roland",
        path: "img/sprites/RolandSprite.png",
    },
    {   
        id: id++,
        name: "Malkuth",
        path: "img/sprites/MalkuthSprite.png",
    },
    {   
        id: id++,
        name: "Yesod",
        path: "img/sprites/YesodSprite.png",
    },
    {   
        id: id++,
        name: "Netzach",
        path: "img/sprites/NetzachSprite.png",
    },
    {   
        id: id++,
        name: "Hod",
        path: "img/sprites/HodSprite.png",
    },
    {   
        id: id++,
        name: "Tipereth",
        path: "img/sprites/TiperethSprite.png",
    },
    {   
        id: id++,
        name: "Gebura",
        path: "img/sprites/GeburaSprite.png",
    },
    {   
        id: id++,
        name: "Chesed",
        path: "img/sprites/ChesedSprite.png",
    },
    {   
        id: id++,
        name: "Hokma",
        path: "img/sprites/HokmaSprite.png",
    },

]



window.addEventListener("load", () => {
    document.querySelector("textarea").onkeyup = function (evt) {
        sendMessage(evt, this)
    };
    document.querySelector("#sign-out-btn").onclick = signout;
    registerCallbacks(newMessage, memberListUpdate);
    chatMessageLoop();
})

// Lorsqu'un nouveau message doit être affiché à l'écran, cette fonction est appelée
const newMessage = (fromUser, message, isPrivate) => {
    nouveauMessage = {fromUser, message};
    
}

// À chaque 2-3 secondes, cette fonction est appelée. Il faudra donc mettre à jour la liste des membres
// connectés dans votre interface.
const memberListUpdate = members => {  
    membre.push(members);
    
}
