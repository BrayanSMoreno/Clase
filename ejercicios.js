
let mensaje;
let numero;

numero = 10

numero = 10.7 
console.log(typeof(numero))
numero = "esto es 3"
console.log(typeof(numero))
mensaje = "Hola mundo"
console.log(numero)
console.log(mensaje)
//alert(mensaje);

let verdadero = true ;
let falso = false ;


const mostrar = "esto es una prueba"
//mostrar = "Hola mundo"
console.log(mostrar)


console.log(5+7.5)
console.log(5-7.5)
console.log(5*7.5)
console.log(5/7.5)
console.log(5%7.5)
console.log(5**7.5)

console.log(5!=.5)
console.log(5>7.5)
console.log(5==7.5)
console.log(5/2)
console.log(5%7.5)
console.log(5**7.5)

let y = 2;
if(y>2){
    console.log("y es mayor que 2")
}else{
    console.log("es menor a 2")
}

let variable
variable = 1
switch (variable){
    case 1: 
        console.log("variable es igual a uno");
        break;
    case 2:
        console.log("variable es igual a dos");
        break;
    case 3:
        console.log("variable es igual a tres");
        break;
    default:
}

for (let i = 0; i<10; i++ ){
    console.log(i)
}

const n = 4;
var fact = 1;
for (let i = 0; i<= n; i++ ){
    fact *= i 
}
console.log("el factorial del numero" + n + "es" + fact);