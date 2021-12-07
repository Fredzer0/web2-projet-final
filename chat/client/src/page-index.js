import {signin} from './chat-api' 


window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }

});

//liste des personnages
var characterList = ["url(img/sprites/BinahSprite.png)", "url(img/sprites/RolandSprite.png)", "url(img/sprites/MalkuthSprite.png)", "url(img/sprites/YesodSprite.png)", "url(img/sprites/NetzachSprite.png)","url(img/sprites/HodSprite.png)","url(img/sprites/TiperethSprite.png)","url(img/sprites/GeburaSprite.png)","url(img/sprites/ChesedSprite.png)", "url(img/sprites/HokmaSprite.png)"]
//var music = new Audio("./music/Theme02.wav") si musique est permi, prend trop d'espace fichier
//music.play();

var Cid = 1; //ID du perso choisi
var character1 = document.getElementById('background-character1'); //personnage précédent
var character2 = document.getElementById('select-character');  //personnage choisi
var character3 = document.getElementById('background-character2'); //personnage suivant
var node = document.getElementById("zone-character"); 
var posX = node.style.marginRight;
var loop = 0;


const flecheGauche = () => { //fonction du "bouton" de la fleche gauche

    posX += 21;
    loop++;
  
    node.style.marginLeft = posX + "px";  //fait bouger la "roue" de personnage 
    if (loop <= 20 ){
        character1.style.opacity = parseFloat(character1.style.opacity) + 0.03;
        character2.style.opacity = parseFloat(character2.style.opacity) - 0.03;
        character3.style.opacity = parseFloat(character3.style.opacity) - 0.05;
        setTimeout(flecheGauche, 30);
 
    }
    else{
        changeCharacterLeft(); //mets à jour quel sont les personnages
        node.style.marginLeft = 0 + "px";
        character1.style.opacity = 0.35;
        character2.style.opacity = 1;
        character3.style.opacity = 0.35;
        loop = 0;
        posX = 0;
    }
}

const flecheDroite = () => { //version fleche droite

   
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


    if (Cid == characterList.length - 1){ //limite droite du tableau
        character1.style.backgroundImage = characterList[Cid -  1];
        character2.style.backgroundImage = characterList[Cid];
        character3.style.backgroundImage = characterList[0];

    }
    else if (Cid == characterList.length){
        Cid = 0; //fait looper la liste
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

    if (Cid == 0){ //limite gauche du tableau
        character1.style.backgroundImage = characterList[characterList.length - 1];
        character2.style.backgroundImage = characterList[Cid];
        character3.style.backgroundImage = characterList[Cid + 1];

    }
    else if (Cid == -1){
        Cid = characterList.length - 1; //fait looper la liste
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

var stockage = window.localStorage; 

stockage.setItem("character", Cid); //envoie le personnage choisi
stockage.setItem("background", document.getElementById("background-list")) //envoi le theme choisi

