let idade = Number(prompt("Digite a sua idade"));
let renda = Number(prompt("Digite a sua renda"));
let valor = Number(prompt("Digite o valor que quer emprestar"));

if(idade >= 21 && idade <= 60 && renda >= 1500 && valor >= 1000 && valor < renda * 20){
    alert("EMPRÉSTIMO APROVADO!");
    
    let numeroParcelas = prompt("Digite o número de parcelas em que você quer dividir o valor");
    let valorTotal = valor * (1 + 0.06) ** numeroParcelas;

    alert(`Você deverá pagar um total de R$${valorTotal.toFixed(2)} dividido em ${numeroParcelas} parcelas de R$${(valorTotal / numeroParcelas).toFixed(2)}`);
}
else{
    alert("EMPRÉSTIMO NÃO APROVADO!");
}