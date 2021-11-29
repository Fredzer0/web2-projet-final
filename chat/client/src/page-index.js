import {signin} from './chat-api';

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }
});

const flecheGauche = () => {
    character1 = document.getElementById('background-character1');
    character2 = document.getElementById('select-character');
    character3 = document.getElementById('background-character2');


}

const flecheDroite = () => {
    character1 = document.getElementById('background-character1');
    character2 = document.getElementById('select-character');
    character3 = document.getElementById('background-character2');

}


//append/remove child
//local storage
stockage = localStorage

var background = stockage.setItem(document.getElementById("background-list"));
var selectedCharacter = stockage.setItem("");

