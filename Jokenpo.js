let jogadorVitorias = 0;
let computadorVitorias = 0;

function jogar() {
    if (!document.getElementById("pedra").checked && 
        !document.getElementById("papel").checked && 
        !document.getElementById("tesoura").checked) {
        alert("Selecione uma opção");
        return;
    }

    // Lógica principal
    var sorteio = Math.floor(Math.random() * 3);
    switch (sorteio) {
        case 0:
            document.getElementById("pc").src = "img/pcpedra.png";
            break;
        case 1:
            document.getElementById("pc").src = "img/pcpapel.png";
            break;
        case 2:
            document.getElementById("pc").src = "img/pctesoura.png";
            break;
    }

    // Verificar o vencedor ou declarar empate
    if ((document.getElementById("pedra").checked && sorteio === 0) || 
        (document.getElementById("papel").checked && sorteio === 1) || 
        (document.getElementById("tesoura").checked && sorteio === 2)) {
        document.getElementById("placar").innerHTML = "Empate";
    } else if ((document.getElementById("pedra").checked && sorteio === 2) || 
               (document.getElementById("papel").checked && sorteio === 0) || 
               (document.getElementById("tesoura").checked && sorteio === 1)) {
        document.getElementById("placar").innerHTML = "Jogador Venceu";
        jogadorVitorias++;
    } else {
        document.getElementById("placar").innerHTML = "Computador Venceu";
        computadorVitorias++;
    }

    // Atualizar o placar
    document.getElementById("placar").innerHTML += `<br> Placar: Jogador ${jogadorVitorias} - Computador ${computadorVitorias}`;
}

function resetar() {
    document.getElementById("pc").src = "img/pc.png";
    document.getElementById("placar").innerHTML = "";
    jogadorVitorias = 0;
    computadorVitorias = 0;
}
