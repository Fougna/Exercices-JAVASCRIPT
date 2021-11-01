/* Exercice JavaScript 01 (Conçu par Amin Mangeot)

Formater une liste de prénoms (première lettre en majuscule).
👉 Vous devez modifier le tableau ci-dessus pour mettre la première lettre de l'ensemble des prénoms en majuscule et le reste en minuscule.
👉 Le résultat doit être un nouveau tableau:  ["John", "Vanessa", "Franck"].*/

var contacts = ["john", "vanessa", "FRANCK"];
var newcontact = [];
for (i=0 ; i<contacts.length ; i++){
    newcontact.push(contacts[i].toUpperCase().slice(0,1) + contacts[i].toLowerCase().slice(1));
};
console.log(newcontact);