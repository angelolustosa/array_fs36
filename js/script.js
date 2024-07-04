const tabuada = document.getElementById("tabuada");

function gerarTabuada() {
    const numero = document.getElementById("numero").value;
    const de = document.getElementById("de").value;
    const ate = document.getElementById("ate").value;

    const length = parseInt(ate) - parseInt(de) + 1;

    const arrayTabuabadaGerar = Array.from({ length: 10 }, (_, i) => i + 1);

    //const array = () => Array.from({ length }, (_, i) => console.log(i + 1));

    if (!numero) {
        arrayTabuabadaGerar.forEach((index, valorIndex) => {
            console.log(valorIndex);
            let resultado = "";
            Array.from({ length }, (_, v) => {
                //console.log(numero, v + 1);

                resultado = resultado + (index + " x " + (v) + " = " + index * (v) + "\n");
            });
        
            console.log(resultado);
            criarItemTabuada(resultado);

        })    
    } else {
        let resultado = "";
        Array.from({ length }, (_, v) => {
        console.log(numero, v + 1);

        resultado = resultado + (numero + " x " + (v + 1) + " = " + numero * (v+1) + "\n");
        });

        console.log(resultado);

        criarItemTabuada(resultado);
    }
};

const criarItemTabuada = (resultado) => {
  const item = document.createElement("div");
  item.className = "tabuada-item";
  item.innerText = resultado;
  tabuada.appendChild(item);
};

const limpar = (resultado) => {
    tabuada.innerHTML = "";
};

/* const numeros = [1,2,3,4,5,6,8,9,10];

numeros.forEach(function (v,i, array) {
    const n = 2;
    console.log(n + 'x' + v + '=' + (n*v));
}) */

/* 
    function gerarTabuada() {
        const numero = document.getElementById('numero').value;
        const de = document.getElementById('de').value;
        const ate = document.getElementById('ate').value;
        const tabuadaContainer = document.getElementById('tabuada');
        const tabuadaNumero = document.getElementById('tabuada-numero');
        tabuadaContainer.innerHTML = '';

        if (numero && de && ate) {
            tabuadaNumero.innerText = numero;
            for (let i = de; i <= ate; i++) {
                const resultado = numero * i;
                const item = document.createElement('div');
                item.className = 'tabuada-item';
                item.innerText = `${numero} x ${i} = ${resultado}`;
                tabuadaContainer.appendChild(item);
            }
        } else {
            tabuadaNumero.innerText = '';
        } */
