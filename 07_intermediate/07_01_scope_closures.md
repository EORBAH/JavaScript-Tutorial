# 7.1 Portée (Scope) et Closures

## Portée
Définit où une variable est accessible (globale, locale, fonction).

## Closures
Fonction conservant l’accès aux variables de son environnement.

## Exemple
```javascript
function compteur() {
    let compte = 0;
    return function() {
        compte++;
        return compte;
    };
}
const increment = compteur();
console.log(increment()); // 1
```

**Exercices**
1. Créez une closure pour un solde bancaire.
2. Créez une fonction générant des multiplicateurs.
