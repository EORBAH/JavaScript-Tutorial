let personne = {
    nom: "Alice",
    age: 25,
    saluer: function() {
        return `Bonjour, je suis ${this.nom}`;
    }
};
console.log(personne.saluer());
