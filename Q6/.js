let somaIdades = 0; 

for (let i = 1; i <= 20; i++) {
    
    let idade = parseInt(prompt("Digite a idade da ${i}ª pessoa:"));

    
    if (!isNaN(idade) && idade > 0) {
        somaIdades += idade;  
    } else {
        console.log("Valor inválido. Digite uma idade válida.");
        i--;  
    }
}


console.log("A soma das idades é:", somaIdades);
