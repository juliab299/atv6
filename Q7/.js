let somaIdades = 0;  
let numPessoas = 20;  

for (let i = 1; i <= numPessoas; i++) {
    
    let idade = parseInt(prompt("Digite a idade da ${i}ª pessoa:"));

    
    if (!isNaN(idade) && idade > 0) {
        somaIdades += idade;  
    } else {
        console.log("Valor inválido. Digite uma idade válida.");
        i--;  
    }
}


let mediaIdades = somaIdades / numPessoas;

console.log("A média das idades é:", mediaIdades.toFixed(2));  // Exibe a média com 2 casas decimais
