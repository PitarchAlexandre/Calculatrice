/**
 * Calculatrice
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-03-08
 */

'use strict'; // Active le mode strict du JavaScript

//Déclaration des chiffres qui lie les boutons aux js
const chiffre1 = document.getElementById('1');
const chiffre2 = document.getElementById('2');
const chiffre3 = document.getElementById('3');
const chiffre4 = document.getElementById('4');
const chiffre5 = document.getElementById('5');
const chiffre6 = document.getElementById('6');
const chiffre7 = document.getElementById('7');
const chiffre8 = document.getElementById('8');
const chiffre9 = document.getElementById('9');
const chiffre0 = document.getElementById('0');


//Déclaration des opérateurs
const diviser = document.getElementById('clear');
const multiplier = document.getElementById('multiplication');
const soustraire = document.getElementById('soustraction');
const additionner = document.getElementById('addition');

//Contient le résultat du calcul
let resultatCalcul = 0;

//Constante permettant de convertir les chiffre en négatif/positif
const negatifPositif = document.getElementById('+/-');

//Constante permettant de mettre virgule dans le nombre
const virguleJs = document.getElementById('virgule');

//Constant permettant à l'utilisateur de stocker des nombres dans la calculatrice
const egal = document.getElementById('=');

//Constante éffacer
const effacer = document.getElementById('clear');

//Constante affichant le résulat du calcul
const affichage = document.getElementById('affichageNombre');

//Permet de stocker les nombres convertis en chiffre
let nombre;
let chiffre;
//Déclaration des variables qui permettront d'insérer les nombres de l'utilisateur
//afin de calculer
let nombre1 = 0;
let nombre2 = 0;



//Déclaration de l'oppérateur
let operateur;

//fin de la déclaration des variables
//////////////////////////////////////////
//CODE ALGORiTHMNIQUE

function ajouterChiffre(chiffre) {
    nombre += '1';
    nombre = int(nombre);

    console.log(nombre);
}

resultatCalcul += 1;

affichage.innerText = resultatCalcul;

console.log(resultatCalcul);