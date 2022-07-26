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
*/

const fecha = new Date();
let transaccion = Math.round(Math.random() * 10000);
let cajero = Math.round(Math.random() * 100);

class Cuenta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
    this.movimientos = [""];
  }
  ingresar(deposito) {
    if (isNaN(deposito) == false && deposito >= 0) {
      this.saldo += deposito;
      this.movimientos.unshift(`Depósito: ${deposito}`);
      alert(`Se depositó $${deposito}`);
    } else {
      alert("Lo ingresado no es una cifra válida.");
    }
  }
  extraer(retiro) {
    if (isNaN(retiro) == false && retiro >= 0) {
      if (this.saldo >= retiro) {
        this.saldo -= retiro;
        this.movimientos.unshift(`Retiro: ${retiro}`);
        alert(`Se retiró $${retiro}`);
      } else {
        alert(`Saldo insuficiente`);
      }
    } else {
      alert("Lo ingresado no es una cifra válida.");
    }
  }
  informar() {
    alert(`La cuenta de ${this.titular}, posee un saldo de $${this.saldo}`);
  }
  movimientosEnSesion() {
    alert(
      `La cuenta de ${this.titular}, registró lo siguientes movimientos (ordenados de más reciente a más antiguo) ${this.movimientos}`
    );
  }
}

let cliente = new Cuenta("Alex", 0, [""]);

while (confirm("Click Aceptar para operar con Rolling Bank") == true) {
  let eleccion = parseInt(
    prompt(`Ingrese una opción:
1 - Información de la cuenta.
2 - Depositar.
3 - Extraer.
4 - Consultar movimientos.
`)
  );

  switch (eleccion) {
    case 1:
      cliente.informar();
      break;
    case 2:
      let deposito = parseFloat(prompt("Ingrese el monto deseado"));
      cliente.ingresar(deposito);
      cliente.informar();
      break;
    case 3:
      let retiro = parseFloat(prompt("Ingrese el monto a extraer"));
      cliente.extraer(retiro);
      cliente.informar();
      break;
    case 4:
      cliente.movimientosEnSesion();
      break;
    default:
      alert("Ingresaste una opción errónea");
  }
}

alert("Gracias por operar con Rolling Bank. Se imprimirá su ticket");

document.write("<h3> ROLLING BANK</h3><br>");
document.write("FECHA: " + fecha + "<br>");
document.write("CAJERO: " + cajero + "<br>");
document.write("TRANSACCION: " + transaccion + "<br>");
document.write("NRO DE TARJETA: ++++++++++980 <br>");
document.write("EXTRACCIÓN DE CTA DE AHORROS. <br>");
document.write("CUENTA N°: 98564231567895 <br>");
document.write("DINERO DISPONIBLE $ " + cliente.saldo + "<br>");
document.write("No caigas en las estafas virtuales.<br>");
document.write("No compartas tus claves con desconocidos.<br>");
document.write("#PROTEGETUINFORMACION<br>");

/*

Method 3: unshift() method

The unshift() method is used to add one or multiple elements to the beginning of an array. It returns the length of the new array formed. An object can be inserted by passing the object as a parameter to this method. The object is hence added to the beginning of the array.

*/
