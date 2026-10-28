// 1. Arreglos
// 1.a 
let numeros = [];
for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Ingrese un numero"));
  numeros.push(numero);
}
console.log(numeros);

// 1.b 
let numerosImpares = [];
for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Ingrese un numero"));
  if (numero % 2 !== 0) {
    numerosImpares.push(numero);
  }
}
console.log(numerosImpares);

// 1.c
let frutas = ["pera", "manzana", "banana", "durazno"];
frutas.forEach((fruta, i) => {
  frutas[i] = fruta.toUpperCase();
});
console.log(frutas);

// 1.d 
let frutas2 = ["pera", "manzana", "banana", "durazno"];
const frutas2Mayusculas = frutas2.map((fruta) => fruta.toUpperCase());
console.log(frutas2Mayusculas);

// 1.e
const frutasFiltradas = frutas2.filter((fruta) => fruta.includes("na"));
console.log(frutasFiltradas);

// 2. Objetos
// 2.a
const producto = {
  nombre: "Correa perro",
  precio: 50,
  stock: 10,
  talles: ["S", "M", "L"],
};

// 2.b
const productos = [
  producto,
  { nombre: "Collar perro", precio: 30, stock: 3, talles: ["S", "M", "L"] },
  { nombre: "Juguete perro", precio: 20, stock: 20, talles: ["S", "M", "L"] },
  { nombre: "Cama perro", precio: 200, stock: 2, talles: ["S", "M", "L"] },
];

productos.forEach((p) => {
  if (p.stock < 5) {
    console.log(p);
  }
});

// 2.c
const productosConDescuento = productos.map((p) => ({
  ...p,
  precio: p.precio * 0.9,
}));
console.log(productosConDescuento);

// 2.d
const productosFiltrados = productos.filter((p) => p.stock > 10);
console.log(productosFiltrados);