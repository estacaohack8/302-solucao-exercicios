let numeroSecreto = Math.floor(Math.random() * 100 + 1);

let palpite = Number(prompt("Adivinha o número secreto! (de 1 a 100)"));

while(palpite !== numeroSecreto){
    if (palpite > numeroSecreto){
        alert("ERROU! O NÚMERO É MENOR");
    }
    else{
        alert("ERROU! O NÚMERO É MAIOR");
    }

    palpite = Number(prompt("Tente novamente:"));
}

alert("PARABENS, ACERTOU!");