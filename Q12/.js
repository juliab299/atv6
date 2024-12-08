let contadorPares = 0;  
for (let i = 1; i <= 20; i++) {
    
    let numero = parseInt(prompt("Digite o ${i}º número:"));

    if (!isNaN(numero)) {
        
        if (numero % 2 === 0) {
            contadorPares++;  
        }
    } else {
        console.log("Valor inválido. Digite um número válido.");
        i--; 
    }
}
console.log("O número de números pares é: ${contadorPares}");
