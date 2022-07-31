/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. 

Si quieres añadir alguna propiedad extra puedes hacerlo. !!!!!!!!!!!!!!!!!!!!!!!!!!

Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.

generaDNI(): genera un número aleatorio de 8 cifras.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Para realizar este método tener en cuenta la siguiente tabla de generaciones:
*/

let yearPresente = new Date().getFullYear()

class Persona{ 

    constructor(nombre, edad, DNI, sexo, peso, altura, yearNacimiento,){
        this.nombre = nombre;   
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.yearNacimiento = yearNacimiento;
        }
        mostrarGeneracion(){
            if(this.yearNacimiento>=1930 && this.yearNacimiento<=1948){
                document.write("La persona pertenece a la generación Silent Generation, Los niños de la posguerra.")
                document.write("El rasgo característico de esta generación es la austeridad.")
            }
            else if(this.yearNacimiento>=1949 && this.yearNacimiento<=1968){
                document.write("La persona pertenece a la generación Baby Boom.")
                document.write("El rasgo característico de esta generación es la ambición.")
            }
            else if(this.yearNacimiento>=1969 && this.yearNacimiento<=1980){
                document.write("La persona pertenece a la generación X.")
                document.write("El rasgo característico de esta generación es la obsesión por el éxito.")
            }
            else if(this.yearNacimiento>=1981 && this.yearNacimiento<=1993){
                document.write("La persona pertenece a la generación Y, Millennials.")
                document.write("El rasgo característico de esta generación es la frustación.")
            }
            else if(this.yearNacimiento>=1981 && this.yearNacimiento<=1993){
                document.write("La persona pertenece a la generación Z.")
                document.write("El rasgo característico de esta generación es la irreverencia.")
            }
            else{
                document.write("No hay una generación definida para su año de nacimiento.")
            }
        }
        generaDNI(){
                this.DNI = Math.round(Math.random()*10000000);
                
        }
        esMayorDeEdad(){
            if(yearPresente - this.yearNacimiento >=18 ){
                document.write("La persona es mayor de edad.")
            }
            else{
                document.write("La persona es menor de edad")
            }
        
        }
        gem
        mostrarDatos(){
            document.write(`<h5>La persona tiene las siguientes características: <h5>
            <ol>
            <li>Nombre: ${this.nombre}</li> 
            <li>Edad: ${this.edad}</li>
            <li>DNI: ${this.DNI}</li>
            <li>Sexo: ${this.sexo}</li>
            <li>Peso: ${this.peso}</li>
            <li>Altura: ${this.altura}</li>
            <li>yearNacimiento: ${this.yearNacimiento}</li>
            </ol>
            `)}
    } 

    let casoPersona = new Persona (
        nombre=prompt("Ingrese el nombre de la persona"),
        edad=parseInt(prompt("Ingrese la edad")),
        DNI=this.DNI,
        sexo=prompt("Indique si es hombre o mujer"),
        peso=parseInt(prompt("Indique su peso en kg")),
        altura=parseInt(prompt("ingrese su altura en cms")),
        yearNacimiento=parseInt(prompt("Ingrese su año de nacimiento"))
    )
casoPersona.mostrarDatos()
casoPersona.esMayorDeEdad()
casoPersona.mostrarGeneracion()
