//Dado los siguientes valores numéricos:
const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

//Imprimir en consola el número mayor de los tres.
if (numero1 > numero2 && numero1 > numero3) {
    console.log("El número1 es el mayor");
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El número2 es el mayor");
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log("El número3 es el mayor");
}

//Imprimir en consola el número menor de los tres.
if (numero1 < numero2 && numero1 < numero3) {
    console.log("El número1 es el menor");
} else if (numero2 < numero1 && numero2 < numero3) {
    console.log("El número2 es el menor");
} else if (numero3 < numero1 && numero3 < numero2) {
    console.log("El número3 es el menor");
}

//Imprimir en consola si el numero1 es par o impar.
if (numero1 % 2 === 0) {
    console.log("El número1 es par");
} else {
    console.log("El número1 es impar");
}

//Imprimir en consola si el numero2 es par o impar.
if (numero2 % 2 === 0) {
    console.log("El número2 es par");
} else {
    console.log("El número2 es impar");
}

//Imprimir en consola si el numero3 es par o impar.
if (numero3 % 2 === 0) {
    console.log("El número3 es par");
} else {
    console.log("El número3 es impar");
}

//Imprimir en consola si el numero1 es múltiplo de 5.
if (numero1 % 5 === 0) {
    console.log("El número1 es múltiplo de 5");
}

//Imprimir en consola si el numero2 es múltiplo de 5.
if (numero2 % 5 === 0) {
    console.log("El número2 es múltiplo de 5");
}

//Imprimir en consola si el numero3 es múltiplo de 5.
if (numero3 % 5 === 0) {
    console.log("El número3 es múltiplo de 5");
}
