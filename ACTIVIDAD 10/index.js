//ACTIVIDAD 10
//1. Condicionales
//1.a
const verificarEdad = edad => {
    if (edad >= 18) {
        console.log("Es mayor de edad")
    } else {
        console.log("Es menor de edad")
    }
}

verificarEdad(20)

//1.b
const verificarNumero = numero => {
    if (numero % 2 === 0) {
        console.log("El numero es par")
    } else {
        console.log("El numero es impar")
    }
}

verificarNumero(5)
verificarNumero(6)

//1.c
const darNota = nota => {
    if (nota < 4) {
        console.log("Reprobado")
    } else if (nota >= 4 && nota < 7) {
        console.log("Aprobado")
    } else {
        console.log("Excente")
    }
}

darNota(3)
darNota(5)
darNota(8)

//2. Bucles
//2.a 
const imprimirNumeros = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}

imprimirNumeros()

//2.b
const imprimirNumerosDesc = () => {
    for (let i = 10; i >= 1; i--) {
        console.log(i)
    }
}

imprimirNumerosDesc()

//2.c combinado con el d
const verificarParImpar = () => {
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(`El numero ${i} es par`)
        } else {
            console.log(`El numero ${i} es impar`)
        }
    }
}

verificarParImpar()
