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

//Permet de connaître la valeur du bouton dans la classe tabChiffres
for (const chiffre of tabChiffres) {
    chiffre.addEventListener('click', function () {
        //Permet d'enlevé le '0' initial sur la calculatrice lorsque l'on tape un chiffre sur la calculatrice
        if (affichage.innerText ==='0' ) {
            affichage.innerText = '';
        }
        //Affiche le nombre sur la calculatrice
        affichage.innerText += this.innerText;
        //Appel la fonction qui converti le chiffre de chaîne de caractère à Float
        conversionNombre(tabChiffres.id);

        //faire une condition if ou un addListener ou autre chose ou les deux lorsque je click sur un opérateur
    });
}
//Converti le chiffre de chaîne de caractère à Float
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