# 8.1 Modules

## Définition
Organisez le code en fichiers réutilisables avec `export`/`import`.

## Exemple
**math.js**:
```javascript
export const addition = (a, b) => a + b;
```

**main.js**:
```javascript
import { addition } from './math.js';
console.log(addition(5, 3)); // 8
```

**Exercices**
1. Créez un module pour calculer l’aire d’un cercle/rectangle.
2. Importez et utilisez ces fonctions.
