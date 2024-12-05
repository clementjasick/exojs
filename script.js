// Récupération du bouton par son sélecteur CSS pour détecter les clics
let btnExo0 = document.querySelector("#btnExo0");
// Récupération du champ de saisie par sélecteur CSS pour lire la valeur entrée par l'utilisateur
let inputExo0 = document.querySelector("#inputExo0");
// Récupération de l'élément où afficher le résultat par sélecteur CSS
let resultatExo0 = document.querySelector("#resultatExo0");

// Ajout d'un écouteur d'événements de type "click" au bouton
btnExo0.addEventListener("click", function () {
    // Lecture de la valeur entrée dans le champ de saisie
    let nombre = Number(inputExo0.value);
    let signe; // Variable pour stocker le signe du nombre

    // Vérification de la valeur du nombre
    if (nombre == 0) {
        signe = "est 0";
    }
    else if (nombre > 0) {
        signe = "est positif";
    }
    else {
        signe = "est négatif";
    }


    // Affichage du résultat dans la console (utile pour déboguer)
    console.log(signe);

    // Mise à jour de l'élément HTML pour afficher le résultat à l'utilisateur
    resultatExo0.innerHTML = `Le nombre ${nombre} ${signe}`;
});
let btnExo1 = document.querySelector("#btnExo1");
let inputExo1 = document.querySelector("#inputExo1");
let resultatExo1 = document.querySelector("#resultatExo1");
btnExo1.addEventListener("click", function () {
    let nombre = Number(inputExo1.value);
    let nv_nombre; // Variable pour stocker le signe du nombre
    if (nombre < 0) {
        nv_nombre = nombre*-1;
    }
    else {
        nv_nombre = nombre;
    }
    console.log(nv_nombre);
    resultatExo1.innerHTML = `La valeur absolue de ${nombre} est ${nv_nombre}`;
});
let btnExo2 = document.querySelector("#btnExo2");
let inputExo2 = document.querySelector("#inputExo2");
let resultatExo2= document.querySelector("#resultatExo2");
btnExo2.addEventListener("click", function () {
    let nombre = (inputExo2.value);
    let ordre;
    let nb1 = Number(nombre[0])
    let nb2 = Number(nombre[1])
    let nb3 = Number(nombre[2])
    if (nb1 < nb2 && nb2 < nb3){
        ordre = "les nombres sont dans l'ordre ";
    }
    else {
        ordre = "les nombres ne sont pas dans l'ordre ";
    }
    console.log(ordre);
    resultatExo2.innerHTML = `${ordre}`;
});
let btnExo3 = document.querySelector("#btnExo3");
let inputExo3 = document.querySelector("#inputExo3");
let resultatExo3= document.querySelector("#resultatExo3");
btnExo3.addEventListener("click", function () {
    let texte = String(inputExo3.value);
    let nv_texte = texte.repeat(100);
    console.log(nv_texte);
    resultatExo3.innerHTML = `${nv_texte}`;
});
let btnExo4 = document.querySelector("#btnExo4");
let inputExo4 = document.querySelector("#inputExo4");
let resultatExo4 = document.querySelector("#resultatExo4");
btnExo4.addEventListener("click", function () {
    let image 
    for (let i = 0; i<30; i++){
        image += document.querySelector("#resultatExo4").innerHTML=`<img src="images/livre${i}.jpg">`
    }
    console.log(image);
    resultatExo4.innerHTML = `${image}`;
});