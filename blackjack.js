var computadorSoma = 0;
var computador2Soma = 0;
var computador3Soma = 0;
var jogadorSoma = 0;
var nome;
var contadorAsComp = 0;
var contadorAsComp2 = 0;
var contadorAsComp3 = 0;
var contadorAsJogador = 0;
var pontuacaoComp = 0;
var pontuacaoComp2 = 0;
var pontuacaoComp3 = 0;
var pontuacaoJogador = 0;
var baralho;
var cartaVirada;
var cartaVirada2;
var cartaVirada3;
var podePuxar = true;
var podePuxar2 = true;
var podePuxar3 = true;
window.onload = function () {
    selecionar();
};
function selecionar() {
    var _a, _b, _c, _d;
    criarBaralho();
    embaralhar();
    (_a = document.getElementById("1x1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var _a;
        modoUmVsUm();
        for (var i = 0; i < 4; i++) {
            (_a = document.getElementById("1x1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                modoUmVsUm;
            });
        }
    });
    (_b = document.getElementById("1x2")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        modoUmVsDois();
    });
    (_c = document.getElementById("1x3")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        modoUmVsTres();
    });
    (_d = document.getElementById("duplas")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
        duplas();
    });
}
function continuar() {
    // Verifica se o nome do usuário foi preenchido
    if (!nome.trim()) {
        alert('Por favor, preencha o campo de texto!');
        return;
    }
    // Agora você pode chamar a função para inserir no banco de dados
    // Ou chamar a função inserirUsuario diretamente aqui, passando o nome do usuário
    // Redireciona para a página desejada
    window.location.href = './jogar.html';
}
function enviar() {
    var inputTexto = document.getElementById("texto");
    var valorTexto = inputTexto === null || inputTexto === void 0 ? void 0 : inputTexto.value;
    nome = valorTexto;
    /* Botão continuar */
    var form = document.getElementById('myForm');
    var continuarLink = document.getElementById('continuar');
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
        event.preventDefault();
        var inputText = document.getElementById('texto').value;
        nome = inputText;
        if (!inputText.trim()) {
            alert('Por favor, preencha o campo de texto!');
            return;
        }
        // Se o campo estiver preenchido, torna o link "Continuar" visível
        continuarLink.style.display = 'inline'; // Ou 'inline-block', conforme o design desejado
    });
    continuarLink.addEventListener('click', function (event) {
        event.preventDefault();
        continuar();
        // Aqui você pode realizar a ação desejada ao clicar no link "Continuar"
    });
}
function criarBaralho() {
    var valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var naipes = ["E", "C", "O", "P"];
    baralho = [];
    for (var i = 0; i < valores.length; i++) {
        for (var j = 0; j < naipes.length; j++) {
            baralho.push(valores[i] + "-" + naipes[j]);
        }
    }
}
function embaralhar() {
    for (var i = 0; i < baralho.length; i++) {
        var j = Math.floor(Math.random() * baralho.length);
        var aux = baralho[i];
        baralho[i] = baralho[j];
        baralho[j] = aux;
    }
    console.log(baralho);
}
function modoUmVsUm() {
    cartaVirada = baralho.pop();
    computadorSoma += getValor(cartaVirada);
    contadorAsComp = checarAs(cartaVirada, contadorAsComp);
    for (var i = 0; i < 2; i++) {
        var imgCarta = document.createElement("img");
        var carta = baralho.pop();
        imgCarta.src = "./cartas/" + carta + ".jpeg";
        jogadorSoma += getValor(carta);
        contadorAsJogador = checarAs(carta, contadorAsJogador);
        document.getElementById("Jogador-cartas").append(imgCarta);
    }
    console.log(jogadorSoma);
    document.getElementById("Pedir").addEventListener("click", pedir);
    document.getElementById("Parar").addEventListener("click", pararUmVsUm);
    for (var i = 0; i < 1; i++) {
        var imgCarta = document.createElement("img");
        var carta = baralho.pop();
        imgCarta.src = "./cartas/" + carta + ".jpeg";
        computadorSoma += getValor(carta);
        contadorAsComp = checarAs(carta, contadorAsComp);
        document.getElementById("Computador-cartas").append(imgCarta);
    }
    console.log(computadorSoma);
}
function modoUmVsDois() {
    cartaVirada = baralho.pop();
    computadorSoma += getValor(cartaVirada);
    contadorAsComp = checarAs(cartaVirada, contadorAsComp);
    cartaVirada2 = baralho.pop();
    computador2Soma += getValor(cartaVirada2);
    contadorAsComp2 = checarAs(cartaVirada2, contadorAsComp2);
    for (var i = 0; i < 2; i++) {
        var imgCarta = document.createElement("img");
        var carta = baralho.pop();
        imgCarta.src = "./cartas/" + carta + ".jpeg";
        jogadorSoma += getValor(carta);
        contadorAsJogador = checarAs(carta, contadorAsJogador);
        document.getElementById("Jogador-cartas").append(imgCarta);
    }
    console.log(jogadorSoma);
    document.getElementById("Pedir").addEventListener("click", pedir);
    document.getElementById("Parar").addEventListener("click", pararUmVsDois);
    for (var i = 0; i < 1; i++) {
        var imgCarta = document.createElement("img");
        var carta = baralho.pop();
        imgCarta.src = "./cartas/" + carta + ".jpeg";
        computadorSoma += getValor(carta);
        contadorAsComp = checarAs(carta, contadorAsComp);
        document.getElementById("Computador-cartas").append(imgCarta);
    }
    console.log(computadorSoma);
    for (var i = 0; i < 1; i++) {
        var imgCarta2 = document.createElement("img");
        var carta2 = baralho.pop();
        imgCarta2.src = "./cartas/" + carta2 + ".jpeg";
        computador2Soma += getValor(carta2);
        contadorAsComp2 = checarAs(carta2, contadorAsComp2);
        document.getElementById("Computador-2-cartas").append(imgCarta2);
    }
    console.log(computador2Soma);
}
function modoUmVsTres() {
    cartaVirada = baralho.pop();
    computadorSoma += getValor(cartaVirada);
    contadorAsComp = checarAs(cartaVirada, contadorAsComp);
    cartaVirada2 = baralho.pop();
    computador2Soma += getValor(cartaVirada2);
    contadorAsComp2 = checarAs(cartaVirada2, contadorAsComp2);
    cartaVirada3 = baralho.pop();
    computador3Soma += getValor(cartaVirada3);
    contadorAsComp3 = checarAs(cartaVirada3, contadorAsComp3);
    for (var i = 0; i < 2; i++) {
        var imgCarta = document.createElement("img");
        var carta = baralho.pop();
        imgCarta.src = "./cartas/" + carta + ".jpeg";
        jogadorSoma += getValor(carta);
        contadorAsJogador += checarAs(carta, contadorAsJogador);
        document.getElementById("Jogador-cartas").append(imgCarta);
    }
    console.log(jogadorSoma);
    document.getElementById("Pedir").addEventListener("click", pedir);
    document.getElementById("Parar").addEventListener("click", pararUmVsTres);
    for (var i = 0; i < 1; i++) {
        var imgCarta = document.createElement("img");
        var carta = baralho.pop();
        imgCarta.src = "./cartas/" + carta + ".jpeg";
        computadorSoma += getValor(carta);
        contadorAsComp = checarAs(carta, contadorAsComp);
        document.getElementById("Computador-cartas").append(imgCarta);
    }
    console.log(computadorSoma);
    for (var i = 0; i < 1; i++) {
        var imgCarta2 = document.createElement("img");
        var carta2 = baralho.pop();
        imgCarta2.src = "./cartas/" + carta2 + ".jpeg";
        computador2Soma += getValor(carta2);
        contadorAsComp2 = checarAs(carta2, contadorAsComp2);
        document.getElementById("Computador-2-cartas").append(imgCarta2);
    }
    console.log(computador2Soma);
    for (var i = 0; i < 1; i++) {
        var imgCarta3 = document.createElement("img");
        var carta3 = baralho.pop();
        imgCarta3.src = "./cartas/" + carta3 + ".jpeg";
        computador3Soma += getValor(carta3);
        contadorAsComp3 = checarAs(carta3, contadorAsComp3);
        document.getElementById("Computador-3-cartas").append(imgCarta3);
    }
    console.log(computador3Soma);
}
function duplas() {
    cartaVirada = baralho.pop();
    computadorSoma += getValor(cartaVirada);
    contadorAsComp = checarAs(cartaVirada, contadorAsComp);
    cartaVirada2 = baralho.pop();
    computador2Soma += getValor(cartaVirada2);
    contadorAsComp2 = checarAs(cartaVirada2, contadorAsComp2);
    cartaVirada3 = baralho.pop();
    computador3Soma += getValor(cartaVirada3);
    contadorAsComp3 = checarAs(cartaVirada3, contadorAsComp3);
    for (var i = 0; i < 2; i++) {
        var imgCarta = document.createElement("img");
        var carta = baralho.pop();
        imgCarta.src = "./cartas/" + carta + ".jpeg";
        jogadorSoma += getValor(carta);
        contadorAsJogador += checarAs(carta, contadorAsJogador);
        document.getElementById("Jogador-cartas").append(imgCarta);
    }
    console.log(jogadorSoma);
    document.getElementById("Pedir").addEventListener("click", pedir);
    document.getElementById("Parar").addEventListener("click", pararDuplas);
    for (var i = 0; i < 1; i++) {
        var imgCarta = document.createElement("img");
        var carta = baralho.pop();
        imgCarta.src = "./cartas/" + carta + ".jpeg";
        computadorSoma += getValor(carta);
        contadorAsComp = checarAs(carta, contadorAsComp);
        document.getElementById("Computador-cartas").append(imgCarta);
    }
    console.log(computadorSoma);
    for (var i = 0; i < 1; i++) {
        var imgCarta2 = document.createElement("img");
        var carta2 = baralho.pop();
        imgCarta2.src = "./cartas/" + carta2 + ".jpeg";
        computador2Soma += getValor(carta2);
        contadorAsComp2 = checarAs(carta2, contadorAsComp2);
        document.getElementById("Computador-2-cartas").append(imgCarta2);
    }
    console.log(computador2Soma);
    for (var i = 0; i < 1; i++) {
        var imgCarta3 = document.createElement("img");
        var carta3 = baralho.pop();
        imgCarta3.src = "./cartas/" + carta3 + ".jpeg";
        computador3Soma += getValor(carta3);
        contadorAsComp3 = checarAs(carta3, contadorAsComp3);
        document.getElementById("Computador-3-cartas").append(imgCarta3);
    }
    console.log(computador3Soma);
}
function getValor(carta) {
    var dado = carta.split("-");
    var valor = dado[0];
    if (isNaN(valor)) {
        if (valor === "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(valor);
}
function checarAs(carta, contadorAs) {
    for (var i = 0; i < carta.length; i++) {
        if (carta[i] === "A") {
            contadorAs++;
        }
    }
    return contadorAs;
}
function pedir() {
    if (!podePuxar) {
        return;
    }
    var imgCarta = document.createElement("img");
    var carta = baralho.pop();
    imgCarta.src = "./cartas/" + carta + ".jpeg";
    jogadorSoma += getValor(carta);
    contadorAsJogador = checarAs(carta, contadorAsJogador);
    document.getElementById("Jogador-cartas").append(imgCarta);
    if (reduzirAs(jogadorSoma, contadorAsJogador) > 21) {
        podePuxar = false;
    }
}
function reduzirAs(jogadorSoma, contadorAsJogador) {
    while (jogadorSoma > 21 && contadorAsJogador > 0) {
        jogadorSoma -= 10;
        contadorAsJogador -= 1;
    }
    return jogadorSoma;
}
function pararUmVsUm() {
    computadorSoma = reduzirAs(computadorSoma, contadorAsComp);
    jogadorSoma = reduzirAs(jogadorSoma, contadorAsJogador);
    podePuxar = false;
    if (!podePuxar) {
        while (computadorSoma < 17) {
            var imgCarta = document.createElement("img");
            var carta = baralho.pop();
            imgCarta.src = "./cartas/" + carta + ".jpeg";
            computadorSoma += getValor(carta);
            contadorAsComp = checarAs(cartaVirada, contadorAsComp);
            document.getElementById("Computador-cartas").append(imgCarta);
        }
    }
    console.log(computadorSoma);
    document.getElementById("cartaVirada").src = "./cartas/" + cartaVirada + ".jpeg";
    var mensagem = "";
    if (jogadorSoma > 21) {
        mensagem = "Você PERDEU!!!";
        pontuacaoComp += 1;
    }
    else if (computadorSoma > 21) {
        mensagem = "Você GANHOU!!!";
        pontuacaoJogador += 1;
    }
    else if (jogadorSoma > 21 && computadorSoma > 21) {
        mensagem = "ESTOURO DUPLO!!!";
    }
    else if (jogadorSoma === computadorSoma) {
        mensagem = "EMPATE!!!";
    }
    else if (jogadorSoma > computadorSoma) {
        mensagem = "Você GANHOU!!!";
        pontuacaoJogador += 1;
    }
    else if (jogadorSoma < computadorSoma) {
        mensagem = "Você PERDEU!!!";
        pontuacaoComp += 1;
    }
    document.getElementById("Computador-soma").innerText = computadorSoma.toString();
    document.getElementById("Jogador-soma").innerText = jogadorSoma.toString();
    document.getElementById("resultado").innerText = mensagem;
}
function pararUmVsDois() {
    computadorSoma = reduzirAs(computadorSoma, contadorAsComp);
    computador2Soma = reduzirAs(computador2Soma, contadorAsComp2);
    jogadorSoma = reduzirAs(jogadorSoma, contadorAsJogador);
    podePuxar = false;
    if (!podePuxar) {
        while (computadorSoma < 17) {
            var imgCarta = document.createElement("img");
            var carta = baralho.pop();
            imgCarta.src = "./cartas/" + carta + ".jpeg";
            computadorSoma += getValor(carta);
            contadorAsComp = checarAs(cartaVirada, contadorAsComp);
            document.getElementById("Computador-cartas").append(imgCarta);
        }
    }
    console.log(computadorSoma);
    document.getElementById("cartaVirada").src = "./cartas/" + cartaVirada + ".jpeg";
    if (!podePuxar) {
        while (computador2Soma < 17) {
            var imgCarta2 = document.createElement("img");
            var carta2 = baralho.pop();
            imgCarta2.src = "./cartas/" + carta2 + ".jpeg";
            computador2Soma += getValor(carta2);
            contadorAsComp2 = checarAs(cartaVirada2, contadorAsComp2);
            document.getElementById("Computador-2-cartas").append(imgCarta2);
        }
    }
    console.log(computador2Soma);
    document.getElementById("cartaVirada2").src = "./cartas/" + cartaVirada2 + ".jpeg";
    var mensagem = "";
    if (jogadorSoma > 21 && computador2Soma > 21 && computadorSoma <= 21 || jogadorSoma > 21 && computador2Soma < computadorSoma && computadorSoma <= 21 || jogadorSoma < computadorSoma && computador2Soma > 21 && computadorSoma <= 21) {
        mensagem = "Computador 1 VENCEU!!!";
        pontuacaoComp += 1;
    }
    else if (jogadorSoma > 21 && computadorSoma > 21 && computador2Soma <= 21 || jogadorSoma > 21 && computadorSoma < computador2Soma && computador2Soma <= 21 || jogadorSoma < computador2Soma && computadorSoma > 21 && computador2Soma <= 21) {
        mensagem = "Computador 2 VENCEU!!!";
        pontuacaoComp2 += 1;
    }
    else if (computadorSoma > 21 && computador2Soma > 21 && jogadorSoma <= 21 || computadorSoma > 21 && computador2Soma < jogadorSoma && jogadorSoma <= 21 || computadorSoma < jogadorSoma && computador2Soma > 21 && jogadorSoma <= 21) {
        mensagem = "Jogador GANHOU!!!";
        pontuacaoJogador += 1;
    }
    else if (jogadorSoma === computadorSoma && (computadorSoma > computador2Soma || computador2Soma > 21)) {
        mensagem = "EMPATE ENTRE JOGADOR E COMPUTADOR 1!!!";
    }
    else if (jogadorSoma === computador2Soma && (computador2Soma > computadorSoma || computadorSoma > 21)) {
        mensagem = "EMPATE ENTRE JOGADOR E COMPUTADOR 2!!!";
    }
    else if (computadorSoma === computador2Soma && (computador2Soma > jogadorSoma || jogadorSoma > 21)) {
        mensagem = "EMPATE ENTRE COMPUTADOR 1 E COMPUTADOR 2!!!";
    }
    else if (jogadorSoma === computadorSoma && jogadorSoma === computador2Soma) {
        mensagem = "EMPATE TRIPLO!!!";
    }
    else if (jogadorSoma > 21 && computadorSoma > 21 && computador2Soma > 21) {
        mensagem = "ESTOURO TRIPLO, A BANCA GANHOU!!!";
    }
    else if (jogadorSoma > computadorSoma && jogadorSoma > computador2Soma) {
        mensagem = "Jogador GANHOU!!!";
        pontuacaoJogador += 1;
    }
    else if (jogadorSoma < computadorSoma && computador2Soma < computadorSoma) {
        mensagem = "Computador 1 VENCEU!!!";
        pontuacaoComp += 1;
    }
    else if (jogadorSoma < computador2Soma && computadorSoma < computador2Soma) {
        mensagem = "Computador 2 VENCEU!!!";
        pontuacaoComp2 += 1;
    }
    document.getElementById("Computador-soma").innerText = computadorSoma.toString();
    document.getElementById("Computador-2-soma").innerText = computador2Soma.toString();
    document.getElementById("Jogador-soma").innerText = jogadorSoma.toString();
    document.getElementById("resultado").innerText = mensagem;
}
function pararUmVsTres() {
    computadorSoma = reduzirAs(computadorSoma, contadorAsComp);
    computador2Soma = reduzirAs(computador2Soma, contadorAsComp2);
    computador3Soma = reduzirAs(computador3Soma, contadorAsComp3);
    jogadorSoma = reduzirAs(jogadorSoma, contadorAsJogador);
    podePuxar = false;
    if (!podePuxar) {
        while (computadorSoma < 17) {
            var imgCarta = document.createElement("img");
            var carta = baralho.pop();
            imgCarta.src = "./cartas/" + carta + ".jpeg";
            computadorSoma += getValor(carta);
            contadorAsComp = checarAs(cartaVirada, contadorAsComp);
            document.getElementById("Computador-cartas").append(imgCarta);
        }
    }
    console.log(computadorSoma);
    document.getElementById("cartaVirada").src = "./cartas/" + cartaVirada + ".jpeg";
    if (!podePuxar) {
        while (computador2Soma < 17) {
            var imgCarta2 = document.createElement("img");
            var carta2 = baralho.pop();
            imgCarta2.src = "./cartas/" + carta2 + ".jpeg";
            computador2Soma += getValor(carta2);
            contadorAsComp2 = checarAs(cartaVirada2, contadorAsComp2);
            document.getElementById("Computador-2-cartas").append(imgCarta2);
        }
    }
    console.log(computador2Soma);
    document.getElementById("cartaVirada2").src = "./cartas/" + cartaVirada2 + ".jpeg";
    if (!podePuxar) {
        while (computador3Soma < 17) {
            var imgCarta3 = document.createElement("img");
            var carta3 = baralho.pop();
            imgCarta3.src = "./cartas/" + carta3 + ".jpeg";
            computador3Soma += getValor(carta3);
            contadorAsComp3 = checarAs(cartaVirada3, contadorAsComp3);
            document.getElementById("Computador-3-cartas").append(imgCarta3);
        }
    }
    console.log(computador3Soma);
    document.getElementById("cartaVirada3").src = "./cartas/" + cartaVirada3 + ".jpeg";
    var mensagem = "";
    if (jogadorSoma > 21 && computador2Soma > 21 && computador3Soma > 21 && computadorSoma <= 21 || jogadorSoma > 21 && computador2Soma < computadorSoma && computadorSoma > computador3Soma && computadorSoma <= 21 || jogadorSoma < computadorSoma && computador2Soma > 21 && computadorSoma > computador3Soma && computadorSoma <= 21 || computador3Soma > 21 && computador2Soma < computadorSoma && computadorSoma > jogadorSoma && computadorSoma <= 21 || jogadorSoma > 21 && computador3Soma > 21 && computador2Soma < computadorSoma && computadorSoma <= 21 || jogadorSoma > 21 && computador2Soma > 21 && computadorSoma > computador3Soma && computadorSoma <= 21 || computador3Soma > 21 && computador2Soma > 21 && computadorSoma > jogadorSoma && computadorSoma <= 21) {
        mensagem = "Computador 1 VENCEU!!!";
        pontuacaoComp += 1;
    }
    else if (jogadorSoma > 21 && computadorSoma > 21 && computador3Soma > 21 && computador2Soma <= 21 || jogadorSoma > 21 && computadorSoma < computador2Soma && computador2Soma > computador3Soma && computador2Soma <= 21 || jogadorSoma < computador2Soma && computadorSoma > 21 && computador2Soma > computador3Soma && computador2Soma <= 21 || computador3Soma > 21 && computadorSoma < computador2Soma && computador2Soma > jogadorSoma && computador2Soma <= 21 || jogadorSoma > 21 && computadorSoma > 21 && computador2Soma < computador2Soma && computador2Soma <= 21 || jogadorSoma > 21 && computador3Soma > 21 && computador2Soma > computadorSoma && computador2Soma <= 21 || computadorSoma > 21 && computador3Soma > 21 && computador2Soma > jogadorSoma && computador2Soma <= 21) {
        mensagem = "Computador 2 VENCEU!!!";
        pontuacaoComp2 += 1;
    }
    else if (jogadorSoma > 21 && computador2Soma > 21 && computadorSoma > 21 && computador3Soma <= 21 || jogadorSoma > 21 && computador2Soma < computador3Soma && computador3Soma > computadorSoma && computador3Soma <= 21 || jogadorSoma < computador3Soma && computador2Soma > 21 && computador3Soma > computadorSoma && computador3Soma <= 21 || computadorSoma > 21 && computador2Soma < computador3Soma && computador3Soma > jogadorSoma && computador3Soma <= 21 || jogadorSoma > 21 && computadorSoma > 21 && computador2Soma < computador3Soma && computador3Soma <= 21 || jogadorSoma > 21 && computador2Soma > 21 && computador3Soma > computadorSoma && computador3Soma <= 21 || computadorSoma > 21 && computador2Soma > 21 && computador3Soma > jogadorSoma && computador3Soma <= 21) {
        mensagem = "Computador 3 GANHOU!!!";
        pontuacaoComp3 += 1;
    }
    else if ((computadorSoma > 21 && computador2Soma > 21 && computador3Soma > 21 && jogadorSoma <= 21) || (computadorSoma > 21 && computador2Soma < jogadorSoma && jogadorSoma > computador3Soma && jogadorSoma <= 21) || (computadorSoma < jogadorSoma && computador2Soma > 21 && jogadorSoma > computador3Soma && jogadorSoma <= 21) || (computador3Soma > 21 && computadorSoma < jogadorSoma && jogadorSoma > computador2Soma && jogadorSoma <= 21) || computador3Soma > 21 && computadorSoma > 21 && computador2Soma < jogadorSoma && jogadorSoma <= 21 || computador3Soma > 21 && computador2Soma > 21 && jogadorSoma > computadorSoma && jogadorSoma <= 21 || computadorSoma > 21 && computador2Soma > 21 && jogadorSoma > computador3Soma && jogadorSoma <= 21) {
        mensagem = "Jogador GANHOU!!!";
        pontuacaoJogador += 1;
    }
    else if (jogadorSoma === computadorSoma && (computadorSoma > computador2Soma && computadorSoma > computador3Soma || computador2Soma > 21 || computador3Soma > 21)) {
        mensagem = "EMPATE ENTRE JOGADOR E COMPUTADOR 1!!!";
    }
    else if (jogadorSoma === computador2Soma && (computador2Soma > computadorSoma && computador2Soma > computador3Soma || computadorSoma > 21 || computador3Soma > 21)) {
        mensagem = "EMPATE ENTRE JOGADOR E COMPUTADOR 2!!!";
    }
    else if (jogadorSoma === computador3Soma && (computador3Soma > computadorSoma && computador3Soma > computador2Soma || computadorSoma > 21 || computador2Soma > 21)) {
        mensagem = "EMPATE ENTRE JOGADOR E COMPUTADOR 3!!!";
    }
    else if (computadorSoma === computador2Soma && (computador2Soma > jogadorSoma && computador2Soma > computador3Soma || jogadorSoma > 21 || computador3Soma > 21)) {
        mensagem = "EMPATE ENTRE COMPUTADOR 1 E COMPUTADOR 2!!!";
    }
    else if (computadorSoma === computador3Soma && (computador3Soma > jogadorSoma && computador3Soma > computador2Soma || jogadorSoma > 21 || computador2Soma > 21)) {
        mensagem = "EMPATE ENTRE COMPUTADOR 1 E COMPUTADOR 3!!!";
    }
    else if (computador2Soma === computador3Soma && (computador3Soma > jogadorSoma && computador3Soma > computadorSoma || jogadorSoma > 21 || computadorSoma > 21)) {
        mensagem = "EMPATE ENTRE COMPUTADOR 2 E COMPUTADOR 3!!!";
    }
    else if (jogadorSoma === computadorSoma && jogadorSoma === computador2Soma && (computador2Soma > computador3Soma || computador3Soma > 21)) {
        mensagem = "EMPATE ENTRE JOGADOR, COMPUTADOR 1 E COMPUTADOR 2!!!";
    }
    else if (jogadorSoma === computadorSoma && jogadorSoma === computador3Soma && (computador3Soma > computador2Soma || computador2Soma > 21)) {
        mensagem = "EMPATE ENTRE JOGADOR, COMPUTADOR 1 E COMPUTADOR 3!!!";
    }
    else if (jogadorSoma === computador2Soma && jogadorSoma === computador3Soma && (computador3Soma > computadorSoma || computadorSoma > 21)) {
        mensagem = "EMPATE ENTRE JOGADOR, COMPUTADOR 2 E COMPUTADOR 3!!!";
    }
    else if (computadorSoma === computador2Soma && computadorSoma === computador3Soma && (computador3Soma > jogadorSoma || jogadorSoma > 21)) {
        mensagem = "EMPATE ENTRE COMPUTADOR 1, COMPUTADOR 2 E COMPUTADOR 3!!!";
    }
    else if (jogadorSoma === computadorSoma && jogadorSoma === computador2Soma && jogadorSoma === computador3Soma) {
        mensagem = "EMPATE QUADRUPLO!!!";
    }
    else if (jogadorSoma > 21 && computadorSoma > 21 && computador2Soma > 21 && computador3Soma > 21) {
        mensagem = "ESTOURO QUADRUPLO!!!";
    }
    else if (jogadorSoma < computadorSoma && computador2Soma < computadorSoma && computador3Soma < computadorSoma) {
        mensagem = "Computador 1 VENCEU!!!";
        pontuacaoComp += 1;
    }
    else if (jogadorSoma < computador2Soma && computadorSoma < computador2Soma && computador3Soma < computador2Soma) {
        mensagem = "Computador 2 VENCEU!!!";
        pontuacaoComp2 += 1;
    }
    else if (jogadorSoma < computador3Soma && computadorSoma < computador3Soma && computador2Soma < computador3Soma) {
        mensagem = "Computador 3 VENCEU!!!";
        pontuacaoComp3 += 1;
    }
    document.getElementById("Computador-soma").innerText = computadorSoma.toString();
    document.getElementById("Computador-2-soma").innerText = computador2Soma.toString();
    document.getElementById("Computador-3-soma").innerText = computador3Soma.toString();
    document.getElementById("Jogador-soma").innerText = jogadorSoma.toString();
    document.getElementById("resultado").innerText = mensagem;
}
function pararDuplas() {
    computadorSoma = reduzirAs(computadorSoma, contadorAsComp);
    computador2Soma = reduzirAs(computador2Soma, contadorAsComp2);
    computador3Soma = reduzirAs(computador3Soma, contadorAsComp3);
    jogadorSoma = reduzirAs(jogadorSoma, contadorAsJogador);
    podePuxar = false;
    if (!podePuxar) {
        while (computadorSoma < 17) {
            var imgCarta = document.createElement("img");
            var carta = baralho.pop();
            imgCarta.src = "./cartas/" + carta + ".jpeg";
            computadorSoma += getValor(carta);
            contadorAsComp = checarAs(cartaVirada, contadorAsComp);
            document.getElementById("Computador-cartas").append(imgCarta);
        }
        podePuxar2 = false;
    }
    console.log(computadorSoma);
    document.getElementById("cartaVirada").src = "./cartas/" + cartaVirada + ".jpeg";
    if (!podePuxar2) {
        while (computador2Soma < 17) {
            var imgCarta2 = document.createElement("img");
            var carta2 = baralho.pop();
            imgCarta2.src = "./cartas/" + carta2 + ".jpeg";
            computador2Soma += getValor(carta2);
            contadorAsComp2 = checarAs(cartaVirada2, contadorAsComp2);
            document.getElementById("Computador-2-cartas").append(imgCarta2);
        }
        podePuxar3 = false;
    }
    console.log(computador2Soma);
    document.getElementById("cartaVirada2").src = "./cartas/" + cartaVirada2 + ".jpeg";
    if (!podePuxar3) {
        while (computador3Soma < 17) {
            var imgCarta3 = document.createElement("img");
            var carta3 = baralho.pop();
            imgCarta3.src = "./cartas/" + carta3 + ".jpeg";
            computador3Soma += getValor(carta3);
            contadorAsComp3 = checarAs(cartaVirada3, contadorAsComp3);
            document.getElementById("Computador-3-cartas").append(imgCarta3);
        }
    }
    console.log(computador3Soma);
    document.getElementById("cartaVirada3").src = "./cartas/" + cartaVirada3 + ".jpeg";
    var mensagem = "";
    var dupla1 = jogadorSoma + computador2Soma;
    var dupla2 = computadorSoma + computador3Soma;
    if (dupla1 > 42 && dupla2 <= 42 && computadorSoma <= 21 && computador3Soma <= 21 && (jogadorSoma > 21 || computador2Soma > 21)) {
        mensagem = " DUPLA 2 VENCEU!!!";
        pontuacaoComp += 1;
        pontuacaoComp3 += 1;
    }
    else if (dupla2 > 42 && dupla1 <= 42 && (computadorSoma > 21 || computador3Soma > 21) && jogadorSoma <= 21 && computador2Soma <= 21) {
        mensagem = "DUPLA 1 VENCEU!!!";
        pontuacaoJogador += 1;
        pontuacaoComp2 += 1;
    }
    else if ((dupla1 > 42 || dupla2 > 42) && (jogadorSoma > 21 || computador2Soma > 21) && (computadorSoma > 21 || computador3Soma > 21)) {
        mensagem = "ESTOURO DAS DUPLAS!!!";
    }
    else if (dupla1 === dupla2) {
        mensagem = "EMPATE!!!";
    }
    else if (dupla1 > dupla2 && dupla1 <= 42 && jogadorSoma <= 21 && computador2Soma <= 21 && dupla2 <= 42 && ((computadorSoma <= 21 && computador3Soma <= 21) || (computadorSoma > 21 || computador3Soma > 21))) {
        mensagem = "DUPLA 1 VENCEU!!!";
        pontuacaoJogador += 1;
    }
    else if (dupla2 > dupla1 && dupla2 <= 42 && computadorSoma <= 21 && computador3Soma <= 21 && dupla1 <= 42 && ((jogadorSoma <= 21 && computador2Soma <= 21) || (jogadorSoma > 21 || computador2Soma > 21))) {
        mensagem = "DUPLA 2 VENCEU!!!";
        pontuacaoComp += 1;
    }
    else if (dupla1 < dupla2 && dupla1 <= 42 && dupla2 <= 42 && jogadorSoma <= 21 && computador2Soma <= 21 && (computadorSoma > 21 || computador3Soma > 21)) {
        mensagem = "DUPLA 1 VENCEU!!!";
        pontuacaoJogador += 1;
    }
    else if (dupla2 < dupla1 && dupla1 <= 42 && dupla2 <= 42 && computadorSoma <= 21 && computador3Soma <= 21 && (computador2Soma > 21 || jogadorSoma > 21)) {
        mensagem = "DUPLA 2 VENCEU!!!";
    }
    document.getElementById("Computador-soma").innerText = computadorSoma.toString();
    document.getElementById("Computador-2-soma").innerText = computador2Soma.toString();
    document.getElementById("Computador-3-soma").innerText = computador3Soma.toString();
    document.getElementById("Jogador-soma").innerText = jogadorSoma.toString();
    document.getElementById("dupla1").innerText = dupla1.toString();
    document.getElementById("dupla2").innerText = dupla2.toString();
    document.getElementById("resultado").innerText = mensagem;
}
