// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if(x>y){
    return x;
  }else if(y>x){
    return y;
  }return x;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var a = "Allowed"
  var b = "Not allowed"
  if(edad>17){
    return a; 
  }return b;
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if(status===1){
    return "Online";
  }else if(status===2){
    return "Away";
  }return "Offline";
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if(idioma=="aleman"){
    return "Guten Tag!";
  }else if(idioma=="mandarin"){
    return "Ni Hao!";
  }else if(idioma=="ingles"){
    return "Hello!";
  }return "Hola!";
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
  case "blue":
    return "This is blue";
    break;
  case "red":
    return "This is red";
    break;
  case "green":
    return "This is green";
    break;
  case "orange":
    return "This is orange";
    break;
  default: return "Color not found"
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero===10||numero===5){
    return true;
  }
  return false;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero<50&&numero>20){
    return true;
  }return false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var x = Math.floor(numero);
  if(x<0){
    x=x*-1;
    numero=numero*-1;
  }
  var a= numero-x;
  if(a!==0){
    return false;
  }return true;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var num1=numero;
  if(numero<0){
    numero=numero*-1;
  }
  var a=numero/3;
  var b=numero/5;
  var s3=Math.floor(a);
  var s5=Math.floor(b);
  var div3=a-s3;
  var div5=b-s5;
  if(div3===0&&div5===0){
    return "fizzbuzz";
  }else if(div3===0){
    return "fizz";
  }else if(div5===0){
    return "buzz";
  }return num1;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  if(num1<0||num2<0||num3<0){
    return "Hay negativos";
  }else if(num1===0||num2===0||num3===0){
    return "Error";
  }
  if(num1>num2&&num1>num3){
    return "Número 1 es mayor y positivo";
  }else if(num3>num1&&num3>num2){
    num3=num3+1;
    return num3;
  }return false;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if(numero===0||numero===1){
    return false;
  }else if(numero===2){
    return true;
  }  
  var num=numero;
  var div=2;
  var primo;
  for(f=2;f<numero;f++){
    var a=num/div;
    var b=Math.floor(a);
    var c=a-b;
    div++;
    if(c===0){
      primo=0;
    }
  }
  if(primo===0){
    return false;
  }return true;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if(valor===true){
    return "Soy verdadero";
  }return "Soy falso";
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var resultados=[1];
  var mult=0;
  for(f=0;f<11;f++){
    var x=mult*6;
    resultados[mult]=x;
    mult++;
  }return resultados;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if(numero<0){
    numero=numero*-1;
  }
  var x=numero-100;
  if(x>=0&&x<900){
    return true;
  }return false;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var d=0;
  var x;
  do{
    d++;
    x=numero+5;
    numero=x;
  }while(d<8);
  return x;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
