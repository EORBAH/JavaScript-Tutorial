let expression = "";
const resultat = document.getElementById("resultat");

function ajouter(caractere) {
    expression += caractere;
    resultat.value = expression;
}

function calculer() {
    try {
        resultat.value = eval(expression);
        expression = resultat.value;
    } catch (erreur) {
        resultat.value = "Erreur";
        expression = "";
    }
}

function effacer() {
    expression = "";
    resultat.value = "";
}
