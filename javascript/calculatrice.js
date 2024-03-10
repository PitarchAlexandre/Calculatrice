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
let affichage = document.getElementById('affichageNombre');

//Permet de stocker les nombres, qui ont été convertis de 'string' à 'chiffre'
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

//Déclaration de la fonction permettant de calculer
function conversionStringFloat() {
    //permettant de convertir le nombre de la calculatrice de châine de caractère
    // en nombre à virgule
    affichage.innerText = nombre;
    nombre += chiffre;
    nombre = parseFloat(nombre);
}

































/*

//remet l'écram à zéro
function nettoyage(){
    affichage.clear;
    nombre = 0;
    affichage.innerText = nombre;
}

effacer.onclick = affichage.clear;

console.log(nombre)

/*
chiffre1.onclick = calculer('1');
chiffre2.onclick = calculer('2');
chiffre3.onclick = calculer('3');
chiffre4.onclick
chiffre5.onclick
chiffre6.onclick
chiffre7.onclick
chiffre8.onclick
chiffre9.onclick
chiffre0.onclick
*/


//affiche le résultat du calcul sur l'écran de la calculatrice


/*
nombre += '1';
console.log(nombre);
nombre += '2';
nombre = parseFloat(nombre);
console.log(nombre);
*/


