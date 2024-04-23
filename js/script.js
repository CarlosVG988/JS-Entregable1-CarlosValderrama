
let consulta1

function intro() {
    alert("Bienvenido a la calculadora de arrays")
    consulta1 = parseInt(prompt("Hola!, introduce el numero total de numeros enteros que requieres analizar"))
}

numeros = [];
function rellenarArreglo(valor) {


    for (let i = 1; i <= consulta1; i++) {
        let consulta2 = prompt("Introduce el numero (entero)" + " " + i + " " + "del arreglo")

        if (consulta2 === null) {
            alert("Cancelaste el proceso de relleno del arreglo")
            console.log("Se cancelo la operacion por el usuario")
            return;
        }

        let consulta3 = parseInt(consulta2);
        numeros.push(consulta3);

    }
    alert("Los numeros que ingresaste son los siguientes:" + " " + numeros.join("-"));
}

intro();
rellenarArreglo(consulta1);

function sumar(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma
}

function multiplicar(arreglo) {
    let mult = 1;
    for (let i = 0; i < arreglo.length; i++) {
        mult *= arreglo[i];
    }
    return mult
}


let opciones;

do{
opciones = parseInt(prompt("A continuacion tienes las siguientes operaciones para hacer con los numeros que guardaste. Ingresa un 1: Sumar todos los numeros. Ingresa un 2: Multiplicar todos los numeros. Ingresa un 3: Termina el programa"));

switch (opciones) {
    case 1:
        let resultado1 = sumar(numeros);
        alert("El resultado de la suma de los numeros es:" + " " + resultado1 + " .Podras tambien ver el resultado en consola")
        console.log(resultado1);
        break;

    case 2:
        let resultado2 = multiplicar(numeros);
        alert("El resultado de la multiplicacion de los numeros es:" + " " + resultado2 + " .Podras tambien ver el resultado en consola")
        console.log(resultado2);
        break;

    case 3:
        alert("Finalizara el programa, adios!")
            break;


    default:
        alert("Opción no reconocida, intente nuevamente");
        break;
}

}

while (opciones !== 3 )