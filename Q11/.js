let contadorMaiorQue8 = 0;  // 
for (let i = 1; i <= 20; i++) {
    
    let numero = parseInt(prompt("Digite o ${i}º número:"));

    
    if (!isNaN(numero)) {

        if (numero > 8) {
            contadorMaiorQue8++;  
        }
    } else {
        console.log("Valor inválido. Digite um número válido.");
        i--;  
    }
}
console.log("O número de números maiores que 8 é: ${contadorMaiorQue8}");
