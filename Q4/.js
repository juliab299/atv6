let nome = prompt("Digite seu nome:");

let N = parseInt(prompt("Digite o número de repetições:"));

if (isNaN(N) || N <= 0) {
    console.log("Por favor, digite um número válido maior que zero.");
} else {
    
    for (let i = 0; i < N; i++) {
        console.log(nome);
    }
}