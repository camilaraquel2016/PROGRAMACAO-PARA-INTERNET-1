let contadorTema = 1;
let temas = ["tema1.css", "tema2.css", "tema3.css"]


// função auxiliar
function incrementar_contador_tema() {
    contadorTema = (contadorTema + 1) % temas.length;
}



// principal
function adicionarEventoBotaoEstilo() {
    let botao = document.getElementById("botao-estilo");
    botao.addEventListener("click", trocarEstilo)
}


function trocarEstilo() {
    const linkTema = document.getElementById("tema");
    linkTema.href = temas[contadorTema];
    incrementar_contador_tema();
}

adicionarEventoBotaoEstilo()