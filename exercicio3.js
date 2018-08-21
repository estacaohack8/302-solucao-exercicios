let degraus = Number(prompt("Quantos degraus você quer na escadinha?"));
let caracter = prompt("Qual o símbolo do material da escadinha?");
let i = 1;
let escadinha = caracter;

while(i <= degraus){
    console.log(escadinha);
    // escadinha = escadinha + caracter;
    escadinha += caracter;
    i++;
}