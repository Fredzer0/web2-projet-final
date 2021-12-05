import {registerCallbacks, sendMessage, signout, chatMessageLoop} from './chat-api';
import Vue from 'vue'
import App from './App.vue'

new Vue({
	el: '#main-container',
	components: { App },
	template: '<App/>'
})

let id = 0;

export let characterList = [
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



addcharacter(() =>{
    characterList.push({ //a ajuster obv
        id : ++id,
        path: "img/monster3.png",
        left : Math.random() * 100 + "vw",
        top : Math.random() * 50 + "vh",
        life : 100
    })
})

export let backgroundList = [

    {
        name: "Floor of History",
        path: "img/backgrounds/floorHistory.png"
    },
    {
        name: "Floor of Technological Sciences",
        path: "img/backgrounds/floorTechonologicalSciences"
    },
    {
        name: "Floor of Art",
        path: "img/backgrounds/floorArt"
    },
    {
        name: "Floor of Literature",
        path: "img/backgrounds/floorLiterature"
    },
    {
        name: "Floor of Natural Sciences",
        path: "img/backgrounds/floorNaturalSciences"
    },
    {
        name: "Floor of Languages",
        path: "img/backgrounds/floorLanguage"
    },
    {
        name: "Floor of Social Sciences",
        path: "img/backgrounds/floorSocialScience"
    },
    {
        name: "Floor of Philosophy",
        path: "img/backgrounds/floorPhilosophy"
    },
    {
        name: "Floor of Religion",
        path: "img/backgrounds/floorReligion"
    },
    {
        name: "Floor of General Work",
        path: "img/backgrounds/floorGeneralWork"
    }

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
    console.log(fromUser, message, isPrivate);
}

// À chaque 2-3 secondes, cette fonction est appelée. Il faudra donc mettre à jour la liste des membres
// connectés dans votre interface.
const memberListUpdate = members => {    
    console.log(members);
}
