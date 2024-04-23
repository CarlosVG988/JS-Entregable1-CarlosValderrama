
let consulta1

function intro(){
    alert("Bienvenido a la calculadora de arrays")
    consulta1 = parseInt(prompt("Hola!, introduce el numero total de numeros enteros que requieres analizar"))
}

numeros = [];
function rellenarArreglo(valor) {


    for (let i = 1; i <= consulta1; i++) {
        let consulta2 = prompt("Introduce el numero (entero)" + " " + i + " " + "del arreglo")

        if (consulta2 === null) {
            alert("Cancelaste el proceso de relleno del arreglo")
            
            return;
        }

        let consulta3 = parseInt(consulta2);
        numeros.push(consulta3);

    }
    alert("Los numeros que ingresaste son los siguientes:" + " " + numeros.join("-"));
}

intro();
rellenarArreglo(consulta1);

let opciones = prompt("A continuacion tienes las siguientes operaciones para hacer con los numeros que ingresaste. Ingresa un 1: Sumar todos los numeros. Ingresa un 2: Multiplicar todos los numeros" );


