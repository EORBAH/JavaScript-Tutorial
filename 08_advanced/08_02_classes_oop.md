# 8.2 Classes et programmation orientée objet

## Définition
Classes ES6 pour une programmation orientée objet.

## Exemple
```javascript
class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    saluer() {
        return `Bonjour, je suis ${this.nom}`;
    }
}
```

**Exercices**
1. Créez une classe `Animal` avec une méthode de son.
2. Créez une classe `Chien` héritant d’`Animal`.
