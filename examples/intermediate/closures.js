function compteur() {
    let compte = 0;
    return function() {
        compte++;
        return compte;
    };
}
const increment = compteur();
console.log(increment());
console.log(increment());
