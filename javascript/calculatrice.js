/**
 * Calculatrice
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-03-08
 */

'use strict'; // Active le mode strict du JavaScript

//Déclaration des boutons de la calculatrice
const bouton = document.getElementsByClassName('btnCalculatrice');

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
let resultatCalcul ;

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
let nombre = 0;
let chiffre;
//Déclaration des variables qui permettront d'insérer les nombres de l'utilisateur
//afin de calculer
let nombre1 = 0;
let nombre2 = 0;

//Déclaration de l'oppérateur
let operateur;

//fin de la déclaration des variables
//////////////////////////////////////////
//CODE ALGORITHMNIQUE

//Déclaration de la fonction permettant de convertir le nombre de la calculatrice
//de châine de caractère en nombre à virgule
function ajouterChiffre(chiffre) {
    nombre += chiffre;
    nombre = parseFloat(nombre);
    return nombre;
}
let choixChiffre

chiffre1.onclick = ajouterChiffre(chiffre = '1');
chiffre2.onclick = ajouterChiffre(chiffre = '2');
chiffre3.onclick = ajouterChiffre(chiffre = '3');


/*
nombre += '1';
console.log(nombre);
nombre += '2';
nombre = parseFloat(nombre);
console.log(nombre);
*/



/*
affichage.innerText = resultatCalcul;*/
