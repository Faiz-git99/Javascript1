// Manipuler DOM

// Selectonner un élément
document.head;
document.title;

let titreweb = document.title
console.log(titreweb);

// Sélectionner un élément avec querySelector
let malisteintegrale = document.querySelector("#Proverbe");
console.log("Proverbe");

// Modifier un élément
let modifier = document.querySelector("#web");
modifier.setAttribute("class", "Capture1");
modifier.setAttribute("alt", "mon image doit s'afficher");
console.log("ma modification est :", modifier);
//console.log("mon id apres", proverbe);

// Ajouter un élément avec add
//let ajouter = document.classList.add("nouvelle classe") /* la fonction add n'est pas attribué */


// Créer un nouveau balise dans HTLM avec JS
let Nouveaudiv = document.createElement("div");
let NouveauTitre = document.createElement("h2");
 
// Pour écrire un élément dans la balise 
NouveauTitre.textContent = "Á méditer";

// Sélectionner la balise 'body' pour inserer le titre de section niv.3
let body = document.querySelector("body");
body.appendChild(NouveauTitre);

// Sélectionner le titre à l'intérieur de la balise div
let Mondiv = document.querySelector(NouveauTitre);
Mondiv.appendChild(NouveauTitre)


