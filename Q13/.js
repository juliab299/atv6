let contadorIntervalo = 0;  
for (let i = 1; i <= 20; i++) {
   
    let numero = parseInt(prompt("Digite o ${i}º número:"));

    if (!isNaN(numero)) {
    
        if (numero >= 0 && numero <= 100) {
            contadorIntervalo++;  
        }
    } else {
        console.log("Valor inválido. Digite um número válido.");
        i--; 
    }
}
console.log("O número de números entre 0 e 100 é: ${contadorIntervalo}");
