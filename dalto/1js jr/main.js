/* let nombre = prompt("Hey Dime tu nombre");

alert("Hola " + nombre); */

/* var saludo = "Hola";

var Pregunta = "Como estas?";

alert(saludo + Pregunta); */
/* var numero1 = 23;

var numero2 = 22;

let frase = "" + numero1 + numero2;
 document.write(frase) */
/* 
 var nombre = "Luis Venegas";
 var frase = `soy ${nombre} y estoy caminando`;
 document.write(frase);
 */

var dineroDeRoberto = prompt("¿Cuanto dinero tienes roberto?"); 
//var dineroDePedro = prompt("¿Cuanto dinero tienes Pedro?"); 
//var dineroDeCofla = prompt("¿Cuanto dinero tienes Cofla?");

//Precios de helados
 let heladoDeAgua = 0.6;
let heladoDeCrema = 1;
let heladix = 1.6;
let heladovich = 1.7;
let helardo = 1.8;
let confites = 2.9;
let boteGrande = 2.9;

if (dineroDeRoberto > heladoDeAgua && dineroDeRoberto < heladoDeCrema) {
    alert(" Roberto Te alcanza para el helado de agua " + `y tu cambio es ${dineroDeRoberto - heladoDeAgua}`)
}else if (dineroDeRoberto > heladoDeCrema && dineroDeRoberto < heladix) {
    alert(" Roberto Te alcanza para el helado de crema " + `y tu cambio es ${dineroDeRoberto - heladoDeCrema}`)
}else if  (dineroDeRoberto > heladix && dineroDeRoberto < heladovich) {
    alert(" Roberto Te alcanza para el helado de heladix " + `y tu cambio es ${dineroDeRoberto - heladix}`)
}else if  (dineroDeRoberto > heladovich && dineroDeRoberto < helardo) {
    alert(" Roberto Te alcanza para el helado de heladovich " + `y tu cambio es ${dineroDeRoberto - heladovich}`)
}else if  (dineroDeRoberto > helardo && dineroDeRoberto < confites) {
    alert(" Roberto Te alcanza para el helado de helardo " + `y tu cambio es ${dineroDeRoberto - helardo}`)
}else if (dineroDeRoberto > confites && boteGrande){
    alert(" Roberto Puedes comprar los confites o el bote grande")

}else if  (dineroDeRoberto > confites && dineroDeRoberto < boteGrande) {
    alert(" Roberto Te alcanza para el helado de confites " + `y tu cambio es ${dineroDeRoberto - confites}`)
}else if  (dineroDeRoberto > boteGrande) {
    alert(" Roberto Te alcanza para el bote grande " + `y tu cambio es ${dineroDeRoberto - boteGrande}`)
}else if(dineroDeRoberto > heladoDeAgua) {
    alert("no te alcanza para nada")
}

if (dineroDePedro > heladoDeAgua && dineroDePedro < heladoDeCrema) {
    alert(" Roberto Te alcanza para el helado de agua " + `y tu cambio es ${dineroDePedro - heladoDeAgua}`)
}else if (dineroDePedro > heladoDeCrema && dineroDePedro < heladix) {
    alert(" Roberto Te alcanza para el helado de crema " + `y tu cambio es ${dineroDeRoberto - heladoDeCrema}`)
}else if  (dineroDeRoberto > heladix && dineroDeRoberto < heladovich) {
    alert(" Roberto Te alcanza para el helado de heladix " + `y tu cambio es ${dineroDeRoberto - heladix}`)
}else if  (dineroDePedro > heladovich && dineroDePedro < helardo) {
    alert(" Roberto Te alcanza para el helado de heladovich " + `y tu cambio es ${dineroDePedro - heladovich}`)
}else if  (dineroDePedro > helardo && dineroDePedro < confites) {
    alert(" Roberto Te alcanza para el helado de helardo " + `y tu cambio es ${dineroDePedro - helardo}`)
}else if (dineroDePedro > confites && boteGrande){
    alert(" Roberto Puedes comprar los confites o el bote grande")

}else if  (dineroDePedro > confites && dineroDeRoberto < boteGrande) {
    alert(" Roberto Te alcanza para el helado de confites " + `y tu cambio es ${dineroDePedro - confites}`)
}else if  (dineroDePedro > boteGrande) {
    alert(" Roberto Te alcanza para el bote grande " + `y tu cambio es ${dineroDePedro - boteGrande}`)
}else if(dineroDePedro > heladoDeAgua) {
    alert("no te alcanza para nada")
}

if (dineroDeRoberto > heladoDeAgua && dineroDeRoberto < heladoDeCrema) {
    alert(" Roberto Te alcanza para el helado de agua " + `y tu cambio es ${dineroDeRoberto - heladoDeAgua}`)
}else if (dineroDeRoberto > heladoDeCrema && dineroDeRoberto < heladix) {
    alert(" Roberto Te alcanza para el helado de crema " + `y tu cambio es ${dineroDeRoberto - heladoDeCrema}`)
}else if  (dineroDeRoberto > heladix && dineroDeRoberto < heladovich) {
    alert(" Roberto Te alcanza para el helado de heladix " + `y tu cambio es ${dineroDeRoberto - heladix}`)
}else if  (dineroDeRoberto > heladovich && dineroDeRoberto < helardo) {
    alert(" Roberto Te alcanza para el helado de heladovich " + `y tu cambio es ${dineroDeRoberto - heladovich}`)
}else if  (dineroDeRoberto > helardo && dineroDeRoberto < confites) {
    alert(" Roberto Te alcanza para el helado de helardo " + `y tu cambio es ${dineroDeRoberto - helardo}`)
}else if (dineroDeRoberto > confites && boteGrande){
    alert(" Roberto Puedes comprar los confites o el bote grande")

}else if  (dineroDeRoberto > confites && dineroDeRoberto < boteGrande) {
    alert(" Roberto Te alcanza para el helado de confites " + `y tu cambio es ${dineroDeRoberto - confites}`)
}else if  (dineroDeRoberto > boteGrande) {
    alert(" Roberto Te alcanza para el bote grande " + `y tu cambio es ${dineroDeRoberto - boteGrande}`)
}else if(dineroDeRoberto > heladoDeAgua) {
    alert("no te alcanza para nada")
}
//