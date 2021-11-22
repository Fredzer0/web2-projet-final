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
