//Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function sumaArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}
const array1 = [2, 3, 5, 7, 11];
console.log(sumaArray(array1));

//Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function promedioArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}
const array2 = [2, 3, 5, 7]; 
console.log(promedioArray(array2));

//Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
function mayusArray(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(array[i].toUpperCase());
    }
    return nuevoArray;
}
const array3 = ["Hola", "Mundo"];
console.log(mayusArray(array3));

//Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function paresArray(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
console.log(paresArray(array4));