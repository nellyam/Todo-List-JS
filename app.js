let form = document.querySelector("form");
let liste = document.querySelector("ul");
let input = document.querySelector("input");

let toutesLesTaches = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();

    if(text !== "") {
        rajouterUneTache(text);
        input.value = "";
    }
});

function rajouterUneTache(text) {
    const todo = {
        text, 
        id: Date.now()
    };

    affichetListe(todo);
}

function affichetListe(todo) {
    const item = document.createElement("li");
    item.setAttribute("data-key", todo.id);
}