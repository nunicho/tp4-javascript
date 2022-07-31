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
let titulo1 = "Guerra Mundial Z";
let titulo2 = "Mundo Anillo";
let extensionNovela1 = 900;
let extensionNovela2 = 850;

    if (extensionNovela1> extensionNovela2){
        document.write(`El libro ${titulo1} tiene más páginas que el libro ${titulo2}. `)
    }
    else if (extensionNovela1 < extensionNovela2){
        document.write(`El libro ${titulo2} tiene más páginas que el libro ${titulo1}. `)
    }
    else{
    document.write(`El libro ${titulo1} tiene igual cantidad de páginas que el libro ${titulo2}. `)
    }
