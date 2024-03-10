//recherchere des deux nombres insérés par l'utilisateur
let nombre1 = document.getElementById('chiffre1');
let nombre2 = document.getElementById('chiffre2');
let resultat = document.getElementById('resultat');

//Déclaration des opérateurs
const additionner = document.getElementById('addition');
const soustraire = document.getElementById('soustraction');
const multiplier = document.getElementById('multiplication');
const diviser = document.getElementById('division');
const modulo = document.getElementById('mod');

additionner.addEventListener('click', function(){
    executeOperation('addition');
})

soustraire.addEventListener('click', function(){
    executeOperation('soustraction');
})

multiplier.addEventListener('click', function(){
    executeOperation('multiplication');
})

diviser.addEventListener('click', function(){
    executeOperation('division');
})

modulo.addEventListener('click', function(){
    executeOperation('mod')
})

function executeOperation(operation){

    let nbr1 = parseFloat(nombre1.value);
    let nbr2 = parseFloat(nombre2.value);

    let somme = 0;
    let difference = 0;
    let produit = 0;
    let quotient = 0;
    let moduloResult = 0;

    switch (operation){
        case 'addition':
            somme = nbr1 + nbr2;
            resultat.innerText = String(somme);
            break;
        case 'soustraction':
            difference = nbr1 - nbr2;
            resultat.innerText = String(difference);
            break;
        case 'multiplication':
            produit = nbr1 * nbr2;
            resultat.innerText = String(produit);
            break;
        case 'division':
            quotient = nbr1 / nbr2;
            resultat.innerText = String(quotient);
            break;
        case 'mod':
            moduloResult = nbr1 % nbr2;
            resultat.innerText = String(moduloResult);
            break;
    }
}