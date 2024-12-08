let soma = 0; 

for (let i = 1; i <= 10; i++) {
   
    let numero = parseFloat(prompt("Digite o ${i}º número:"));

    if (!isNaN(numero)) {
        soma += numero;  // 
    } else {
        console.log("Valor inválido. Digite um número válido.");
        i--;  
    }
}

console.log("A soma dos números é:", soma);
