function factorielle(n) {
    if (n === 0) return 1;
    return n * factorielle(n - 1);
}
console.log(factorielle(5));

const addition = (a, b) => a + b;
console.log(addition(3, 7));
