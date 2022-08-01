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

let cuenta = {
    titular: 'Alex',
    saldo: 0,
    informar: () => { alert("La cuenta del titular " + cuenta.titular + " tiene $" + cuenta.saldo + " a la fecha.") },
    ingresar: () => {
        while (confirm("¿Desea depositar dinero?") == true) {
            let deposito = parseFloat(prompt("Ingrese cifra a depositar"));
            if (isNaN(deposito) == false && deposito >=0) {
                cuenta.saldo = cuenta.saldo + deposito
                alert("El dinero disponible es $"+cuenta.saldo)
            }
            else{
                alert("Lo ingresado no es una cifra válida.")
            }
        }
    },
    extraer: () => {
        while (confirm("¿Desea extraer dinero?") == true) {
            let retiro = parseFloat(prompt("Ingrese cifra a extraer"));
            if (isNaN(retiro) == false && retiro >=0) {
                if(cuenta.saldo-retiro>=0){
                    cuenta.saldo = cuenta.saldo - retiro
                    alert("El dinero disponible es $"+cuenta.saldo)
                }
                else if(cuenta.saldo-retiro<=0){
                    alert("Saldo insuficiente")
                }               
            }
            else {
                alert("Lo ingresado no es una cifra válida.")
            }
        }
        }
    }
   
cuenta.informar()
cuenta.ingresar()
cuenta.informar()
cuenta.extraer()
cuenta.informar()



