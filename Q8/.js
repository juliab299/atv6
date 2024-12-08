let maiorIdadeCount = 0;  
let numPessoas = 20;  

for (let i = 1; i <= numPessoas; i++) {
    
    let idade = parseInt(prompt("Digite a idade da ${i}ª pessoa:"));

    
    if (!isNaN(idade) && idade > 0) {
        
        if (idade >= 18) {
            maiorIdadeCount++;  
        }
    } else {
        console.log("Valor inválido. Digite uma idade válida.");
        i--;  
    }
}

console.log("O número de pessoas maiores de idade é: ${maiorIdadeCount}");
