/*
SCRIPT PARA PROBAR CÓDIGOS

*/


let meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

let mesBuscado = meses.indexOf(prompt("Ingresar mes"))
if(mesBuscado != -1){
    alert(meses[mesBuscado+1])
}
else{
    alert("Lo ingresado no es válido")
}        

