/**
 * Calculatrice
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-03-08
 */

'use strict'; // Active le mode strict du JavaScript

//Permet de connaître la valeur d'une touche d'un chiffre en parcourant la classe btnChiffre
const tabChiffres = document.getElementsByClassName('btnChiffre');
//Permet de connaître la valeur d'une touche d'une opération en parcourant la classe btnChiffre
const tabOperation = document.getElementsByClassName('btnOperation');

//Va chercher l'id 'C' dans l'HTML
const effacer = document.getElementById('clear');

let nombre = 0;
let nombre1 = 0;
let nombre2 = 0;
let resultat = 0;

//Permet d'aller chercher l'élément qui affiche le nombre sur la calculatrice ("élément bleu")
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
        nombre1 = conversionNombre(tabChiffres.id);
        executionOperation(nombre1)
        return nombre1;
    });
}
//Converti le chiffre de chaîne de caractère à Float
function conversionNombre (chiffre) {
    nombre += chiffre;
    nombre = parseFloat(chiffre);
    return nombre;
}

/*
effacer.addEventListener('click',function () {
    nettoyage();
})
//Fonction qui permet d'initialiser l'écran à zéro
function nettoyage(){
    affichage.clear;
    nombre = 0;
    affichage.innerText = nombre;
}
*/
function executionOperation(nombre1, nombre2, resultat) {
    for (const operation of tabOperation) {
        operation.addEventListener('click', function () {
        switch (operation){

            case 'addition':
                    resultat = nombre1 +nombre2;
                    break;
            case 'soustraction':
                    resultat = nombre1 - nombre2;
                    break;
            case 'division':
                    resultat = nombre1 / nombre2;
                    break;
            case 'multiplication':
                    resultat = nombre1 * nombre2;
                    break;

                affichage.innerText = String(resultat);

        }
        })
    }
}