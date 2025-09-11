const symboles = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", ];
let cartesRetournees = [];
let cartesTrouvees = [];

function melanger(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function creerGrille() {
    const grille = document.getElementById("grille");
    melanger(symboles).forEach(symbole => {
        const carte = document.createElement("div");
        carte.classList.add("carte");
        carte.dataset.symbole = symbole;
        carte.addEventListener("click", retournerCarte);
        grille.appendChild(carte);
    });
}

function retournerCarte() {
    if (cartesRetournees.length < 2 && !cartesRetournees.includes(this) && !cartesTrouvees.includes(this)) {
        this.classList.add("retournee");
        this.textContent = this.dataset.symbole;
        cartesRetournees.push(this);
        if (cartesRetournees.length === 2) {
            verifierPaire();
        }
    }
}

function verifierPaire() {
    const [carte1, carte2] = cartesRetournees;
    if (carte1.dataset.symbole === carte2.dataset.symbole) {
        carte1.classList.add("trouvee");
        carte2.classList.add("trouvee");
        cartesTrouvees.push(carte1, carte2);
    } else {
        setTimeout(() => {
            carte1.classList.remove("retournee");
            carte2.classList.remove("retournee");
            carte1.textContent = "";
            carte2.textContent = "";
        }, 1000);
    }
    cartesRetournees = [];
    if (cartesTrouvees.length === symboles.length) {
        alert("Félicitations, vous avez gagné !");
    }
}

creerGrille();
