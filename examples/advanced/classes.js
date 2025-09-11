class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    saluer() {
        return `Bonjour, je suis ${this.nom}`;
    }
}
const personne = new Personne("Alice", 25);
console.log(personne.saluer());
