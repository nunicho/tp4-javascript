/*
CUENTA BANCARIA
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta.
Rectángulos
*/  

let cuenta ={
    titular: 'Alex',
    saldo: 0,
    informar: ()=>{ alert("La cuenta del titular "+cuenta.titular+" tiene $"+cuenta.saldo+" a la fecha.")},
    ingresar: ()=>{
        let deposito = parseInt(prompt("Ingrese cifra a depositar"));
        cuenta.saldo = cuenta.saldo + deposito
    },
    extraer: ()=>{
        let retiro = parseInt(prompt("Ingrese cifra a extraer"));
        cuenta.saldo = cuenta.saldo - retiro
    }
    
}
cuenta.informar()
cuenta.ingresar()
cuenta.informar()
cuenta.extraer()
cuenta.informar()




/*
let deposito = parseInt(prompt("Ingrese valor"));

cuenta.saldo = cuenta.saldo + deposito

document.write(cuenta.saldo)

*/