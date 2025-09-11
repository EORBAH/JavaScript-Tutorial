function ajouterTache() {
    const input = document.getElementById("tacheInput");
    const liste = document.getElementById("listeTaches");
    if (input.value.trim() === "") return;
    
    const li = document.createElement("li");
    li.textContent = input.value;
    li.addEventListener("click", () => {
        li.classList.toggle("complete");
    });
    liste.appendChild(li);
    input.value = "";
}
