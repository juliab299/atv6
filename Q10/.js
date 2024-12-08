let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));


if (!isNaN(numero)) {

    console.log("Tabuada do ${numero}:");
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
} else {
    console.log("Por favor, digite um número válido.");
}
