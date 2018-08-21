let meninos = ["João", "Kleber", "Ademir", "Oswaldo", "Ramon"];
let meninas = ["Katia", "Ludmilla", "Lorena"];

let i = 0;
let k = 1;

while(i < meninos.length){
    let j = 0;
    
    while(j < meninas.length){
        console.log(`Casal ${k}: ${meninos[i]} e ${meninas[j]}`);
        k++;
        j++;
    }
    
    i++;
}

console.log("FIM");