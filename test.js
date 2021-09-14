let form = document.querySelector("form");
let liste = document.querySelector("ul");
let input = document.querySelector("input");

let toutesLesTaches = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();

    if(text !== "") {
        rajouterUneTache(text);
        input.value = "";
    }
});

function rajouterUneTache(text) {
    let todo = {
        text,
        id: Date.now()
    };

    affichetListe(todo);
}

function affichetListe(todo) {
    // crer le li
    let item = document.createElement("li");
    item.setAttribute("data-key", todo.id);

    //creer le input
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    item.appendChild("input");
    input.addEventListener("click", tacheFaite);

    // creer le span
    let txt = document.createElement("span");
    txt.innerText = todo.text;
    item.appendChild(txt);

    // creer button et image
    let btn = document.createElement("button");
    btn.addEventListener("click", supprimerTache);

    let img = document.createElement("img");
    img.setAttribute("src", "./ressources/fermer.svg");
    btn.appendChild(img);
    item.appendChild(btn)


    liste.appendChild(item);
}

  function tacheFaite(e) {
     e.target.parentNode.classList.toggle("finDeTach");
  }

