Cours complet sur la POO en JavaScript

avec Clean Code et les principes SOLID adaptés à JavaScript

---

# 1. Introduction à la Programmation Orientée Objet en JavaScript

JavaScript est un langage multi‑paradigme qui supporte la POO via les prototypes (son mécanisme historique) et, depuis ES6 (ECMAScript 2015), via une syntaxe de classes plus familière. La POO en JS reste cependant basée sur la chaîne de prototypes.

Pourquoi la POO en JS ?

· Structurer des applications complexes (front‑end, back‑end Node.js).
· Réutiliser et étendre des composants (UI, services).
· Appliquer des principes de conception éprouvés (SOLID, Clean Code).

---

# 2. Les bases : objets littéraux, fonctions constructrices et prototypes

## 2.1 Objet littéral

La façon la plus directe de créer un objet (sans classe) :

```javascript
const voiture = {
  marque: 'Renault',
  modele: 'Clio',
  rouler(km) {
    this.kilometrage = (this.kilometrage || 0) + km;
  },
  getKilometrage() {
    return this.kilometrage || 0;
  }
};
```

Mais pour créer plusieurs instances, on utilise des fonctions constructrices ou des classes.

## 2.2 Fonction constructrice et prototype

Avant ES6, on utilisait des fonctions pour simuler des classes :

```javascript
function Voiture(marque, modele) {
  this.marque = marque;
  this.modele = modele;
  this.kilometrage = 0;
}

Voiture.prototype.rouler = function(km) {
  this.kilometrage += km;
};

const maVoiture = new Voiture('Renault', 'Clio');
maVoiture.rouler(100);
console.log(maVoiture.kilometrage); // 100
```

new crée un nouvel objet, lie this et assigne le prototype (Voiture.prototype). Toutes les instances partagent les méthodes définies sur le prototype (économie de mémoire).

## 2.3 La syntaxe de classe (ES6)

C’est du sucre syntaxique par‑dessus les prototypes, avec des fonctionnalités modernes :

```javascript
class Voiture {
  constructor(marque, modele) {
    this.marque = marque;
    this.modele = modele;
    this.kilometrage = 0;
  }

  rouler(km) {
    this.kilometrage += km;
  }

  getKilometrage() {
    return this.kilometrage;
  }
}
```

À retenir :

· constructor est appelé automatiquement lors de new.
· Les méthodes sont ajoutées au prototype.
· Le mot‑clé this fait référence à l’instance (dans le contexte non fléché).

---

# 3. Visibilité : publiques, privées (champs privés), protégées (convention)

## 3.1 Propriétés publiques

Tout ce qui est défini avec this.prop est public par défaut.

## 3.2 Champs privés (ES2022)

Préfixer le nom avec # rend la propriété ou la méthode vraiment privée (inaccessible de l’extérieur) :

```javascript
class CompteBancaire {
  #solde = 0; // champ privé

  constructor(titulaire) {
    this.titulaire = titulaire;
  }

  déposer(montant) {
    if (montant <= 0) throw new Error('Montant invalide');
    this.#solde += montant;
  }

  getSolde() {
    return this.#solde;
  }
}

const compte = new CompteBancaire('Alice');
compte.déposer(100);
console.log(compte.getSolde()); // 100
// console.log(compte.#solde); // SyntaxError
```

Clean Code : Toujours encapsuler l’état interne avec des champs privés (ou au moins une convention _).

## 3.3 Convention « protégé » avec _

JavaScript n’a pas de mot‑clé protected. On utilise une convention de nommage avec un underscore (_) pour indiquer qu’une propriété ou méthode ne doit être utilisée qu’à l’intérieur de la classe et de ses sous‑classes.

```javascript
class Animal {
  _nom;

  constructor(nom) {
    this._nom = nom;
  }

  _description() {
    return `Animal nommé ${this._nom}`;
  }
}
```

---

# 4. Encapsulation avec getters et setters

On peut contrôler l’accès à des propriétés publiques via get et set :

```javascript
class Utilisateur {
  #nom;
  #email;

  constructor(nom, email) {
    this.#nom = nom;
    this.#email = email;
  }

  get nom() {
    return this.#nom;
  }
  set nom(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Nom invalide');
    }
    this.#nom = value;
  }

  get email() {
    return this.#email;
  }
}

const user = new Utilisateur('Bob', 'bob@mail.com');
console.log(user.nom); // Bob
user.nom = 'Robert';   // utilise le setter
```

---

# 5. Méthodes statiques et propriétés statiques

Appartiennent à la classe elle‑même, pas aux instances.

```javascript
class MathHelper {
  static carré(x) {
    return x * x;
  }

  static valeurParDéfaut = 10; // propriété statique (ES2022+)
}

console.log(MathHelper.carré(5)); // 25
console.log(MathHelper.valeurParDéfaut); // 10
```

Dans une méthode statique, this désigne la classe elle‑même (ou la sous‑classe si appelée via une classe enfant grâce à la liaison tardive). On peut donc utiliser this pour référencer d’autres membres statiques.

```javascript
class Parent {
  static who() {
    return this.name; // résolu à l'exécution
  }
}
class Enfant extends Parent {}
console.log(Enfant.who()); // "Enfant"
```

---

# 6. Héritage avec extends et polymorphisme

## 6.1 Héritage simple

Une classe peut étendre une seule autre classe, héritant de ses méthodes et propriétés.

```javascript
class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  cri() {
    return '...';
  }
}

class Chien extends Animal {
  cri() {
    return 'Wouf';
  }
}

const rex = new Chien('Rex');
console.log(rex.cri()); // Wouf
```

## 6.2 Appel au parent avec super

· Dans le constructeur, on doit appeler super() avant d’accéder à this.
· Dans n’importe quelle méthode, super.method() appelle la méthode homologue du parent.

```javascript
class Animal {
  constructor(nom) {
    this.nom = nom;
  }
  cri() {
    return 'Son';
  }
}
class Chien extends Animal {
  constructor(nom, race) {
    super(nom); // obligatoire
    this.race = race;
  }
  cri() {
    return `${super.cri()} : Wouf !`;
  }
}
```

## 6.3 Polymorphisme

Le principe de substitution de Liskov (SOLID) s’applique : une instance de la sous‑classe doit pouvoir être utilisée partout où la classe parente est attendue, sans altérer le comportement correct.

```javascript
function faireCrier(animal) {
  return animal.cri();
}
console.log(faireCrier(new Chien('Rex'))); // "Son : Wouf !"
```

Clean Code : Préférez la composition à l’héritage profond. Une hiérarchie trop complexe devient rapidement rigide.

---

# 7. Classes abstraites (simulation) et interfaces (via TypeScript ou JSDoc)

JavaScript ne possède pas de mot‑clé abstract ni d’interfaces natives. Plusieurs techniques existent :

## 7.1 Simulation de classe abstraite

On jette une erreur dans une méthode qui doit être surchargée, ou on empêche l’instanciation directe :

```javascript
class Forme {
  constructor() {
    if (new.target === Forme) {
      throw new Error("Impossible d'instancier une classe abstraite");
    }
  }

  aire() {
    throw new Error("La méthode 'aire' doit être implémentée");
  }
}

class Rectangle extends Forme {
  constructor(largeur, hauteur) {
    super();
    this.largeur = largeur;
    this.hauteur = hauteur;
  }

  aire() {
    return this.largeur * this.hauteur;
  }
}
```

## 7.2 Interfaces via TypeScript (recommandé)

Si vous utilisez TypeScript, vous bénéficiez d’interfaces et de mot‑clés abstract. Pour rester en JavaScript pur, on peut documenter les contrats à l’aide de JSDoc et utiliser des outils de vérification (comme le mode check JS de TypeScript).

```javascript
/**
 * @interface Paiement
 */
/**
 * @function
 * @name Paiement#payer
 * @param {number} montant
 * @returns {boolean}
 */
```

---

# 8. Mixins (alternative aux traits)

JavaScript permet de mélanger des comportements via des mixins (fonctions qui copient des méthodes dans une classe). À utiliser avec prudence.

```javascript
const HorodatageMixin = (Base) => class extends Base {
  constructor(...args) {
    super(...args);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  touch() {
    this.updatedAt = new Date();
  }
};

class Article {
  constructor(titre) {
    this.titre = titre;
  }
}

class ArticleAvecHorodatage extends HorodatageMixin(Article) {
  setTitre(titre) {
    this.titre = titre;
    this.touch();
  }
}
```

Mieux : préférez la composition en injectant un objet horodateur plutôt que d’hériter d’un mixin.

---

# 9. Classe anonyme (moins courant)

JavaScript supporte les expressions de classe, éventuellement sans nom :

```javascript
const logger = new (class {
  log(msg) {
    console.log(msg);
  }
})();

logger.log('test');
```

---

# 10. Modules (import/export)

Depuis ES6, les modules permettent d’organiser le code. Une classe est exportée d’un fichier, importée dans un autre.

Export :

```javascript
// math-helpers.js
export class MathHelper {
  static carré(x) { return x * x; }
}
// ou export default
```

Import :

```javascript
import { MathHelper } from './math-helpers.js';
// ou import MathHelper from './math-helpers.js' pour l'export par défaut
```

Clean Code : un fichier par classe, nommage cohérent. Les modules aident à respecter le principe de responsabilité unique.

---

# 11. SOLID en JavaScript (adapté)

**S – Single Responsibility**

Une classe ne fait qu’une chose. Exemple : séparer la validation de l’envoi d’email.

```javascript
class Validator {
  static isValidEmail(email) { /* ... */ }
}
class EmailService {
  send(email, message) { /* ... */ }
}
```

**O – Open/Closed**

Ouvert à l’extension, fermé à la modification. Utilisez le polymorphisme ou des stratégies injectées.

```javascript
class Strategy {
  apply(price) { return price; }
}
class FixedReduction extends Strategy {
  constructor(amount) { super(); this.amount = amount; }
  apply(price) { return Math.max(0, price - this.amount); }
}
class PriceCalculator {
  calculate(price, strategies) {
    return strategies.reduce((p, s) => s.apply(p), price);
  }
}
```

**L – Liskov Substitution**

Une sous‑classe doit pouvoir remplacer sa classe de base. Ne modifiez pas la sémantique des méthodes héritées.

**I – Interface Segregation**

Comme JS n’a pas d’interfaces, on segmente par petites classes/objets : ne forcez pas un consommateur à dépendre de méthodes qu’il n’utilise pas. Par exemple, au lieu d’un énorme service UserService, faites UserReader, UserWriter.

**D – Dependency Inversion**

Dépendez d’abstractions, pas d’implémentations concrètes. En JS, on peut utiliser l’injection de dépendances (via le constructeur).

```javascript
class ReportService {
  constructor(logger) {
    this.logger = logger; // logger doit respecter un contrat (ex : méthode log)
  }
  generate() {
    this.logger.log('Génération en cours');
  }
}
// On injecte une instance concrète (console, fichier, etc.)
```

Les modules facilitent l’inversion : on importe une abstraction (par exemple une classe avec des méthodes attendues) plutôt qu’une implémentation.

---

# 12. Clean Code appliqué à la POO JavaScript

- Nommage : classes en PascalCase, méthodes/propriétés en camelCase, constantes en UPPER_SNAKE.
- Méthodes courtes (max 20 lignes) avec un seul niveau d’abstraction.
- Pas de magie : évitez les nombres magiques, utilisez des constantes.
- Encapsulation : exposez le minimum (champs privés #, getters).
- Préférez la composition à l’héritage profond.
- Évitez les this capturés dans des callbacks non fléchés (utilisez les arrow functions pour hériter lexicalement this, ou bind).
- Un seul constructor, pas de surcharge : utilisez des paramètres par défaut ou des factory functions.
- Gérez les exceptions avec des classes d’erreur personnalisées.
- Pas de singletons globaux : injectez les dépendances.

---

# 13. Exercices pratiques

**Exercice 1 – Classe Livre**

Créez une classe Livre avec :

· propriétés privées #titre, #auteur, #nombreDePages
· un constructeur pour les initialiser
· un getter pour chaque propriété
· une méthode estGros() retournant true si le livre a plus de 500 pages.

Testez avec plusieurs instances.

**Exercice 2 – Héritage et polymorphisme**

Créez une classe Vehicule avec une méthode demarrer() qui lève une erreur (simulation abstraite).
Créez deux sous‑classes : Voiture et Moto qui redéfinissent demarrer() pour retourner un message différent.
Écrivez une fonction faireDemarrer(vehicule) qui affiche le résultat, et testez-la avec les deux types.

**Exercice 3 – Interface (simulée) et SOLID**

Définissez un contrat « moyenPaiement » sous forme d’un objet avec une méthode payer(montant).
Implémentez deux classes : CarteBancaire et PayPal qui suivent ce contrat.
Créez une classe Commande qui reçoit un moyenPaiement via son constructeur (injection) et expose une méthode finaliser(montant).
Testez la substitution.

**Exercice 4 – Mixin / Composition**

Implémentez un comportement horodatable :

- soit avec un mixin qui ajoute createdAt, updatedAt et la méthode touch(),
- soit en composant une classe Horodateur que vous injectez.

Utilisez ce comportement dans une classe Article.

**Exercice 5 – Late Static Binding simulé**

Créez une classe Modele avec une méthode statique getTable() qui retourne le nom de la classe converti en minuscule + 's' (via this.name).
Créez une classe Utilisateur qui étend Modele. Vérifiez que Utilisateur.getTable() retourne 'utilisateurs'.

**Exercice 6 – Refactoring Clean Code / SOLID**

Le code suivant viole plusieurs principes. Refactorez-le :

```javascript
class B {
  sendEmail(user, msg) { /* code */ }
  saveDB(data) { /* code */ }
  genererPDF(html) { /* code */ }
}
```

*Objectif :** responsabilité unique, inversion de dépendances, nommage explicite.

---

# 14. Pour aller plus loin

- TypeScript : apporte le typage statique, les interfaces, les abstract, les génériques. Recommandé pour tout projet professionnel.
- Design Patterns en JS : Singleton (module), Factory, Observer (EventEmitter), Strategy, Decorator, etc.
- ES2022+ : champs privés, méthodes privées statiques, initialiseurs statiques, bloc static {}.
- Modules ES vs CommonJS : en environnement Node.js, on peut encore croiser require, mais la norme ES6 est l’avenir.
- Tests unitaires : vos classes bien conçues sont facilement testables (Jest, Mocha). L’injection de dépendances facilite le mocking.
