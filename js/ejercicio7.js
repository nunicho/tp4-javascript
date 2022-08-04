/*
AGENDA TELEFÓNICA
7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un
contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá
crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto
(10).
Los métodos de la agenda serán los siguientes:
● aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda
no puede almacenar más contactos indicar por pantalla.
● existeContacto(Conctacto): indica si el contacto pasado existe o no.
● listarContactos(): Lista toda la agenda
● buscarContacto(nombre): busca un contacto por su nombre y muestra su
teléfono.
● eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se
ha eliminado o no por pantalla
● agendaLlena(): indica si la agenda está llena.
● huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones por consola para probar todas estas funcionalidades.
*/

// Agenda telefónica de contactos, un contacto está definido por un nombre y un teléfono. El nombre es único.
// La agenda contiene contactos y será creada con un tamaño por defecto de 10 o el usuario puede modificar el tamaño.
// métodos:
/*
aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.
*/

// Crea un menú con opciones por consola para probar todas estas funcionalidades.

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class agenda {
  constructor(tamanio = 10) {
    this.contactos = [];
    this.tamanio = tamanio;
  }

  agregarContacto(contactoNuevo) {
    //verificar si el contacto existe
    if (this.existeContacto(contactoNuevo.nombre) === true) {
      alert("El contacto ya existe, no agregar");
    } else {
      //verificar si la agenda está llena retorna false
      if (!this.agendaLlena()) {
        // con el ! es lo mismo que poner this.agendaLlena() === false
        this.contactos.push(contactoNuevo);
      }
    }
  }

  existeContacto(nombre) {
    // es porque el contacto existe
    const contactoExistente = this.contactos.find((itemContacto) => {
      return nombre === itemContacto.nombre;
    });
    console.log(contactoExistente);
    if (contactoExistente) {
      alert("El contacto existe");
      return true;
    } else {
      alert("El contacto no existe");
      return false;
    }
  }

  mostrarContacto() {
    alert(JSON.stringify(this.contactos));
  }

  buscarContacto(nombre) {
    let contactoConsultado = this.contactos.filter((itemContacto) => {
      return itemContacto.nombre === nombre;
    });
    alert(JSON.stringify(contactoConsultado));
  }

  eliminarContacto(nombre) {
    let contactosFiltrados = this.contactos.filter((itemContacto) => {
      return itemContacto.nombre != nombre;
    });
    this.contactos = contactosFiltrados;
    alert("Elemento eliminado " + nombre);
    alert(JSON.stringify(this.contactos));
  }

  agendaLlena() {
    if (this.contactos.length === this.tamanio) {
      alert("La agenda está llena");
      return true;
    } else {
      alert("Hay espacio disponible");
      return false;
    }
  }
  agendaConEspacios() {
    if (this.contactos.length < this.tamanio) {
      let espaciosDisponibles = this.tamanio - this.contactos.length;
      alert("La agenda tiene espacio disponible: " + espaciosDisponibles);
      return true;
    } else {
      alert("La agenda está llena");
      return false;
    }
  }

  mostrarContacto() {
    alert(JSON.stringify(this.contactos));
  }

  modificarTamanioAgenda(nuevoTamanio) {
    nuevoTamanio = parseInt(
      prompt("ingresar nuevo tamaño deseado para la agenda")
    );

    if (nuevoTamanio > this.contactos.length) {
      this.tamanio = nuevoTamanio;
      alert("Nuevo tamaño de agenda:" + this.tamanio);
    } else {
      alert(
        "El tamaño de la agenda tiene que ser mayor a 0 y mayor o igual a la cantidad de contactos ya ingresados."
      );
    }
  }
}

//crear la agenda
let agendaTelefonica = new agenda(5);

// menu de opciones

do {
  let opcion = parseInt(
    prompt(`Bienvenido a MegaAgenda. Por favor, selecciona una opción:
1 - Añadir contacto.
2 - Consultar si el contacto existe.
3 - Listar los contactos.
4 - Buscar un contacto.
5 - Eliminar un contacto.
6 - Consultar si la agenda está llena.
7 - Consultar si la agenda tiene huecos libres. 
8 - Cambiar el tamaño de la agenda.
`)
  );

  switch (opcion) {
    case 1:
      // 1 - Añadir contacto.
      // pedir el nombre y el teléfono
      //crear el contacto
      // invocar a agregarContacto
      let nombre = prompt("Ingresar un nombre").toLowerCase();
      let telefono = prompt("Ingrese un telefono");
      let nuevoContacto = new Contacto(nombre, telefono);
      console.log(nuevoContacto);
      agendaTelefonica.agregarContacto(nuevoContacto);
      break;
    case 2:
      // 2 - Consultar si el contacto existe,
      let nombreBuscado = prompt("Ingresar un nombre").toLowerCase();
      agendaTelefonica.existeContacto(nombreBuscado);
      break;
    case 3:
      agendaTelefonica.mostrarContacto();
      // 3 - Listar los contactos,
      break;
    case 4:
      let numeroBuscado = prompt("Ingresar un nombre").toLowerCase();
      agendaTelefonica.buscarContacto(numeroBuscado);
      // 4 - Buscar un contacto,
      break;
    case 5:
      // 5 - Eliminar un contacto,
      let contactoBorrar = prompt("Ingresar un nombre").toLowerCase();
      agendaTelefonica.eliminarContacto(contactoBorrar);
      break;
    case 6:
      agendaTelefonica.agendaLlena();
      // 6 - Consultar si la agenda está llena.
      break;
    case 7:
      agendaTelefonica.agendaConEspacios();
      // 7 - Consultar si la agenda tiene huecos libres.
      break;
    case 8:
      agendaTelefonica.modificarTamanioAgenda();
      // 8 - Cambiar el tamaño de la agenda.
      break;
    default:
      alert("Ingresó una opción incorrecta");
  }
} while (confirm("¿Quiere realizar otra operación?"));

alert("Hasta luego");
