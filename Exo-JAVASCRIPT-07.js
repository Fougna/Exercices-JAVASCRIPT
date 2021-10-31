/* Exercice JavaScript 07 (Conçu par Amin Mangeot)*/

var tableauUser = [
    {
        firstname : "John",
        name : "Doe",
        age : 25,
        permis : true
    },
    {
        firstname : "Antoine",
        name : "Mauron",
        age : 17,
        permis : false
    },
    {
        firstname : "Cedric",
        name : "Bodolec",
        age : 14,
        permis : false
    },
    {
        firstname : "Fred",
        name : "Esteban",
        age : 28,
        permis : true
    },
    {
        firstname : "Greg",
        name : "Lorient",
        age : 19,
        permis : true
    },
    {
        firstname : "Tony",
        name : "Montana",
        age : 32,
        permis : false
    },
    {
        firstname : "Intrus",
        name : "Petrus",
        age : 16,
        permis : false
    },
    {
        firstname : "john",
        name : "doe",
        age : 26,
        permis : true
    },
    {
        firstname : "Antoine",
        name : "Capel",
        age : 40,
        permis : true
    },
    {
        firstname : "Rachid",
        name : "Ein",
        age : 34,
        permis : true
    }       
]

/* Voici les consignes : 
1. Afficher dans la console le prénom pour chaque utilisateur (utiliser la boucle).*/

for (i=0 ; i<tableauUser.length ; i++){
    console.log(tableauUser[i].firstname);
};

/* 2. Mettre dans un nouveau tableau toute les personnes majeurs, créer cette variable qui correspondra au tableau avant la boucle.
Le tableau s'appellera tableauMajeur.
Voici les étapes :
- Initaliser une variable tableauMajeur (soit un tableau vide).
- Créer votre boucle par rapport à tableauUser.
- Il va falloir créer une condition qui à chaque tour de boucle va checker si la personne est majeur.
- Si elle est majeur je met cette personne dans tableauMajeur.
- Faire un console.log de la variable tableauMajeur après la boucle pour vérifier.*/

var tableauMajeur = [];
for (i=0 ; i<tableauUser.length ; i++){
    if (tableauUser[i].age>=18){
        tableauMajeur.push(tableauUser[i]);
    };
};
console.log(tableauMajeur);