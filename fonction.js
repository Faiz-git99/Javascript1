//Les Fonctions
/* les fonctions des opérations qui effectuent des calculs et retournent un résultat. */
// les fonctions sont réutilisables (avantage)

let prix = 12 + 20;

let price = 25 + 25;

//je déclare un fonction qui a pour tâche d'additionner deux chiffres
function calculaddition (chiffre1, chiffre2) {
let resultat = chiffre1 + chiffre2;
return resultat;
}

//j'appelle la fonction egal
let egal = calculaddition (25,15);

function agee (chiffre3, chiffre4) {
let resultat2 = chiffre3 - chiffre4;
return resultat2;
}
let age = (2026-1999);

function multiple(chiffre1, chiffre2)
{
    let calcul = chiffre1 * chiffre2;
    return calcul;
}
let calcul = (20*10);

console.log(calcul);

let nombre = 10 ;
nombre +=5;
nombre /=3
nombre -=1
console.log(nombre);