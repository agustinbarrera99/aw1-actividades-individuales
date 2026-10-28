//1. Funciones de declaracion
//1.a 
function saludar() {
    console.log("Hola, bienbenido!")
}

//1.b
function saludarPersona(nombre) {
    console.log(`Hola ${nombre}, bienvenido!`)
}

//1.c
function esMayorDeEdadDeclaracion(edad) {
    let resultado = edad >= 18 ? true : false
    return resultado
}

let miEdad = esMayorDeEdadDeclaracion(27)

//2. Funciones flecha
//2.a
const esMayorDeEdadFlecha = edad => {
    return edad >= 18 ? true : false
}
miEdad = esMayorDeEdadFlecha(15)
console.log(miEdad)


//2.b
const comparadorNumeros = (n1, n2) => {
    if (n1 > n2) {
        console.log(`${n1} es mayor que ${n2}`)
    } else if (n1 === n2) {
        console.log(`${n1} es igual a ${n2}`)
    } else {
        console.log(`${n1} es menor que ${n2}`)
    }
}

for (let i = 0; i <= 5; i++) {
    comparadorNumeros(i, 3)
}

//3. Funciones callback
//3.a + b
const operacion = (n1, n2, cb) => {
    return cb(n1, n2)
}

const suma = (n1, n2) => {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        console.log("Debe ingresar solo numeros")
        return
    }
    console.log(`El resultado de la suma es: ${n1 + n2}`)
    return n1 + n2
}

const resta = (n1, n2) => {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        console.log("Debe ingresar solo numeros")
        return
    }
    console.log(`El resultado de la resta es: ${n1 - n2}`)
    return n1 - n2
}

operacion(5, "asd", suma)
operacion(5, 3, resta)

