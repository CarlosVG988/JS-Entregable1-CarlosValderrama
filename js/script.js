// Objeto para manejar los eventos y funciones relacionadas
const AnalisisNumeros = {
    // Método para borrar los números ingresados
    borrarNumeros: function() {
        const numeros = document.querySelectorAll('.numero');
        numeros.forEach(numero => numero.value = '');
        localStorage.removeItem('resultado');
        document.getElementById('resultado').innerText = '';
    },

    // Método para analizar los números ingresados
    analizarNumeros: function() {
        const numeros = Array.from(document.querySelectorAll('.numero'))
                            .map(numero => parseInt(numero.value))
                            .filter(numero => !isNaN(numero)); // Filtrar los números no ingresados

        if (numeros.length === 0) {
            document.getElementById('resultado').innerText = 'No se han ingresado números.';
            return;
        }

        const primos = this.obtenerPrimos(numeros);
        const suma = numeros.reduce((total, numero) => total + numero, 0);
        const multiplicacion = numeros.reduce((total, numero) => total * numero, 1);

        let resultadoText = '';
        if (primos.length > 0) {
            resultadoText += 'Existen números primos: ' + primos.join('-') + '. ';
        } else {
            resultadoText += 'No existen números primos. ';
        }
        resultadoText += 'La suma de los valores es: ' + suma + '. ';
        resultadoText += 'La multiplicación de los valores es: ' + multiplicacion + '.';
        document.getElementById('resultado').innerText = resultadoText;

        // Guardar el resultado en local storage
        localStorage.setItem('resultado', resultadoText);
    },

    // Método para obtener los números primos de un array de números
    obtenerPrimos: function(numeros) {
        const primos = [];
        for (let numero of numeros) {
            if (this.esPrimo(numero)) {
                primos.push(numero);
            }
        }
        return primos;
    },

    // Método para verificar si un número es primo
    esPrimo: function(numero) {
        if (numero <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }
};

// Vincular explícitamente el contexto de this para los métodos
AnalisisNumeros.borrarNumeros = AnalisisNumeros.borrarNumeros.bind(AnalisisNumeros);
AnalisisNumeros.analizarNumeros = AnalisisNumeros.analizarNumeros.bind(AnalisisNumeros);

// Eventos
document.getElementById('borrarNumeros').addEventListener('click', AnalisisNumeros.borrarNumeros);
document.getElementById('analizarNumeros').addEventListener('click', AnalisisNumeros.analizarNumeros);

// Cargar resultado desde local storage si existe
window.onload = function() {
    const resultadoGuardado = localStorage.getItem('resultado');
    if (resultadoGuardado) {
        document.getElementById('resultado').innerText = resultadoGuardado;
    }
};
