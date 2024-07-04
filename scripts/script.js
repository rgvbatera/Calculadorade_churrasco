let inputHomens = document.getElementById('homens');
let inputMulheres = document.getElementById('mulheres');
let inputCriancas = document.getElementById('criancas');

function calcular() {

    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;

    const carne = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Carne bovina: ${carne}kg</p>
        <p>Frango: ${frango}kg</p>
        <p>Linguiça: ${linguica}kg</p>
        <p>Refrigerante: ${refrigerante}ml</p>
        <p>Cerveja: ${cerveja}ml</p>
    `;
}