/**
 * Calculatrice
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-03-08
 */

'use strict'; // Active le mode strict du JavaScript

const tabChiffres = document.getElementsByClassName('btnChiffre');
let nombre = 0;
let affichage = document.getElementById('affichageNombre');

//conditions qui per
for (const chiffre of tabChiffres){
    chiffre[i].addEventListener('click', function () {
        //Permet d'enlevé le '0' initial sur la calculatrice lorsque l'on tape un chiffre sur la calculatrice
        if (affichage.innerText ==='0' ) {
            affichage.innerText = '';
        }
        affichage.innerText += this.innerText;
        conversionNombre(chiffre.id);
    });
}

function conversionNombre (chiffre) {
    chiffre = chiffre.id.value;
    nombre += chiffre;
    nombre = parseFloat(chiffre);
    return nombre;
}


//remet l'écram à zéro
const effacer = document.getElementById('clear');
effacer.addEventListener('click',function () {
    nettoyage();
})
function nettoyage(){
    affichage.clear;
    nombre = 0;
    affichage.innerText = nombre;
}