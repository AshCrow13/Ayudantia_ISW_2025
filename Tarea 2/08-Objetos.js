//Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
const persona = {
    nombre: "Omar",
    edad: 29,
    genero: "Masculino"
};
console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Género: ${persona.genero}`);

//Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
const caja = {
    cuadernos: 7,
    lapices: 13,
    papel: 23,
    fotografias: 9,
    estado: "Buen estado"
};
console.log(caja);
console.log(`Cuadernos: ${caja.cuadernos}, Tipo: ${typeof caja.cuadernos}`); 
console.log(`Lapices: ${caja.lapices}, Tipo: ${typeof caja.lapices}`); 
console.log(`Papel: ${caja.papel}, Tipo: ${typeof caja.papel}`); 
console.log(`Fotografias: ${caja.fotografias}, Tipo: ${typeof caja.fotografias}`); 
console.log(`Estado: ${caja.estado}, Tipo: ${typeof caja.estado}`); 