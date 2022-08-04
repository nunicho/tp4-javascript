/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo. 
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
*/

let yearPresente = new Date().getFullYear()

class Persona{ 

    constructor(nombre, sexo, peso, altura, yearNacimiento,){
        this.nombre = nombre;   
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.yearNacimiento = yearNacimiento;
        this.edad = yearPresente - this.yearNacimiento;
        }
        mostrarGeneracion(){
            if(this.yearNacimiento>=1930 && this.yearNacimiento<=1948){
                document.write("La persona pertenece a la generación Silent Generation, Los niños de la posguerra.<br>")
                document.write("El rasgo característico de esta generación es: <br>")
                document.write(`<img src="../img/austeridad.jpg" alt="generaciones">`)

            }
            else if(this.yearNacimiento>=1949 && this.yearNacimiento<=1968){
                document.write("La persona pertenece a la generación Baby Boom.<br>")
                document.write("El rasgo característico de esta generación es: <br>")
                document.write(`<img src="../img/ambicion.jpg" alt="generaciones">`)
            }
            else if(this.yearNacimiento>=1969 && this.yearNacimiento<=1980){
                document.write("La persona pertenece a la generación X.<br>")
                document.write("El rasgo característico de esta generación es: <br>")
                document.write(`<img src="../img/obsesion.jpg" alt="generaciones">`)
            }
            else if(this.yearNacimiento>=1981 && this.yearNacimiento<=1993){
                document.write("La persona pertenece a la generación Y, Millennials.<br>")
                document.write("El rasgo característico de esta generación es: <br>")
                document.write(`<img src="../img/frustracion.jpg" alt="generaciones">`)
            }
            else if(this.yearNacimiento>=1994 && this.yearNacimiento<=2010){
                document.write("La persona pertenece a la generación Z.<br>")
                document.write("El rasgo característico de esta generación es: <br>")
                document.write(`<img src="../img/irreverencia.jpg" alt="generaciones">`)
            }
            else{
                document.write("No hay una generación definida para su año de nacimiento.<br>")
            }
        }
        generaDNI(){
                this.DNI = Math.round(Math.random()*100000000);
                document.write("La persona tiene asignado el DNI "+this.DNI+"<br>")
                        
        }
        esMayorDeEdad(){
            if(yearPresente - this.yearNacimiento >=18 ){
                document.write(this.nombre+" es mayor de edad.<br>")
            }
            else{
                document.write(this.nombre+" es menor de edad.<br>")
            }
        
        }
        mostrarDatos(){
            document.write(`<h5>La persona tiene las siguientes características: <h5>
            <ol>
            <li>Nombre: ${this.nombre}</li> 
            <li>Sexo: ${this.sexo}</li>
            <li>Peso: ${this.peso} kgs</li>
            <li>Altura: ${this.altura} cms</li>
            <li>Año de nacimiento: ${this.yearNacimiento}</li>
            <li>Edad: ${this.edad}</li>
            </ol>
            `)
        }
        calcularIMC(){                  
            document.write('<h5> BONUS!!! CÁLCULO DEL ÍNDICE DE MASA CORPORAL </h5>')
            let alturaIMC = Math.pow(this.altura/100,2)
            let indiceIMC = this.peso/alturaIMC  ;
                if(indiceIMC <18.5){
                    document.write('<h5> Se encuentra dentro del rango de  peso <span class="text-primary">insuficiente</span>.</h5>')
                }
                else if(indiceIMC >=18.5 && indiceIMC <=24.9 ){
                    document.write('<h5> Se encuentra dentro del rango de peso <span class="text-success">saludable</span>.</h5>')
                }
                else if(indiceIMC >=25 && indiceIMC <=29.9 ){
                    document.write('<h5> Se encuentra dentro del rango de <span class="text-warning">sobrepeso</span>.</h5>')
                }
                else if(indiceIMC >=30 ){
                    document.write('<h5> Se encuentra dentro del rango de <span class="text-danger">obesidad</span>.</h5>')
                }
         } 
}

    let casoPersona = new Persona (
        nombre=prompt("Ingrese el nombre de la persona"),
        sexo=prompt("Ingrese H si es hombre o M si mujer"),
        peso=parseFloat(prompt("Indique su peso en kg")),
        altura=parseFloat(prompt("ingrese su altura en cms")),
        yearNacimiento=parseInt(prompt("Ingrese su año de nacimiento"))
    )
casoPersona.mostrarDatos();
casoPersona.generaDNI();
casoPersona.esMayorDeEdad();
casoPersona.mostrarGeneracion();
casoPersona.calcularIMC();


/*
Dado que el ejercicio nos da la libertad de agregar propiedades, y, para aprovechar los datos de peso y altura, decidí calcular el IMC.
El índice de masa corporal, que es una fórmula que hace uso de estas variables, se calcula así:

Fórmula: peso (kg) / [estatura (m)]2
Con el sistema métrico, la fórmula para el IMC es el peso en kilogramos dividido por la estatura en metros cuadrados. Debido a que la estatura por lo general se mide en centímetros, divida la estatura en centímetros por 100 para obtener la estatura en metros.

Math.pow


*/
