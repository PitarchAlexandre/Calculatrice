/**
 * Calculatrice
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-03-08
 */

'use strict'; // Active le mode strict du JavaScript

let chiffre = document.getElementsByClassName('btnChiffre');
let nombre = 0;
let affichage = document.getElementById('affichageNombre');

for (let i = 0; i < chiffre.length; i++){
    chiffre[i].addEventListener('click', function () {
        if (chiffre.id === '0' ) {
            chiffre = .delete();
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