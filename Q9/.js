let nomeMaisNovo = "";  
let idadeMaisNova = Infinity;  

for (let i = 1; i <= 10; i++) {

    let nome = prompt(`Digite o nome da ${i}ª pessoa:`);

    let idade = parseInt(prompt(`Digite a idade da ${i}ª pessoa:`));

    if (!isNaN(idade) && idade > 0) {
        
        if (idade < idadeMaisNova) {
            idadeMaisNova = idade;
            nomeMaisNovo = nome;
        }
    } else {
        console.log("Valor inválido. Digite uma idade válida.");
        i--;  
    }
}

console.log("A pessoa mais nova é: ${nomeMaisNovo}");
