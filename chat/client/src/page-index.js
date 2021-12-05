
import {signin} from './chat-api' 
import { characterList } from "../page-chat"


window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }
});




const flecheGauche = () => {

    var character1 = document.getElementById('background-character1');
    var character2 = document.getElementById('select-character');
    var character3 = document.getElementById('background-character2');

    character1.remove();
    

}

const flecheDroite = () => {
    character1.removeChild();

}


//append/remove child

//local storage

stockage = localStorage

var background = stockage.setItem(document.getElementById("background-list"));
var selectedCharacter = stockage.setItem("");

