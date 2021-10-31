/* Exercice JavaScript 01 (Conçu par Amin Mangeot)

Formater une liste de prénoms (première lettre en majuscule).
👉 Vous devez modifier le tableau ci-dessus pour mettre la première lettre de l'ensemble des prénoms en majuscule et le reste en minuscule.
👉 Le résultat doit être un nouveau tableau:  ["John", "Vanessa", "Franck"].*/

var contacts = ["john", "vanessa", "FRANCK"];
var newcontacts = [];
for (i=0 ; i<contacts.length ; i++){
    newcontacts.push(contacts[i][0].toUpperCase() + contacts[i].slice(1).toLowerCase());
};
console.log(newcontacts);