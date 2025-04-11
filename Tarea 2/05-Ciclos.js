//Imprimir en consola los números del 1 al 10.
for (let i = 1; i < 11; i++) {
    console.log(i);
}

//Imprimir en consola los números del 10 al 1.
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//Imprimir en consola los números del 1 al 10 pero solo los pares.
for (let i = 1; i < 11; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

//Imprimir en consola los números del 1 al 10 pero solo los impares.
for (let i = 1; i < 11; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}

//Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
for (let i = 1; i < 11; i++) {
    if(i % 3 == 0) {
        console.log(i);
    }
}

//Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
for (let i = 1; i < 11; i++) {
    if(i % 5 == 0) {
        console.log(i);
    }
}

//Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
for (let i = 1; i < 11; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}

//Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.
for (let i = 1; i < 11; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
        console.log(i);
    }
}
