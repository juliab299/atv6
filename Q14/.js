let contadorIntervalo1 = 0; 
let contadorIntervalo2 = 0;  
let contadorAcima200 = 0;    

for (let i = 1; i <= 20; i++) {
    let numero = parseInt(prompt("Digite o ${i}º número:"));

    if (!isNaN(numero)) {
        if (numero >= 0 && numero <= 100) {
            contadorIntervalo1++;  
        } else if (numero >= 101 && numero <= 200) {
            contadorIntervalo2++;  
        } else if (numero > 200) {
            contadorAcima200++;  
        }
    } else {
        console.log("Valor inválido. Digite um número válido.");
        i--;  
    }
}
console.log("Quantos números estão entre 0 e 100: ${contadorIntervalo1}");
console.log("Quantos números estão entre 101 e 200: ${contadorIntervalo2}");
console.log("Quantos números são maiores que 200: ${contadorAcima200}");
