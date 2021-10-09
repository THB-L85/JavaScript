/**
 * Tipos de datos en JavaScript
 */

//Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(typeof numero);

//Tipo de dato object
var object = {
  nombre: "Luis",
  edad: 21,
};
console.log(object);

//Tipo de dato boolean (True, False)
var bandera = true;
console.log(bandera);

//Tipo de dato function
function miFuncion() {}
console.log(miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");

//Tipo clase es una funcion
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(Persona);

//Tipo de dato undefine
var x;
console.log(x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

//arrays
var autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

//valores vacios
var z = "";
console.log(z);
console.log(typeof z);
