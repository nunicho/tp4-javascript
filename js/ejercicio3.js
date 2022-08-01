/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulo{ 

    constructor(nombre, ancho, alto, perimetro, area){
        this.nombre= nombre;   
        this.ancho = ancho;
        this.alto = alto;
        this.perimetro=perimetro;
        this.area=area;

    }

    ingresarAlto(altura){
        altura=parseInt(prompt("Ingresar valor para Alto"))
                 this.alto += altura
    }
    ingresarAncho(anchura){
        anchura=parseInt(prompt("Ingresar valor para Ancho"))
                  this.ancho += anchura
    }
    calculos(){
            this.perimetro += 2*(this.ancho+this.alto)
            this.area += this.ancho*this.alto 
    
    }
        mostrarDatos(){
        document.write(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Ancho: ${this.ancho}</li>
        <li>Alto: ${this.alto}</li>
        <li>Perímetro: ${this.perimetro}</li>
        <li>Área: ${this.area}</li>
        </ul>   ` )
    }

}

let rectangulo1 = new Rectangulo('Rectangulo1',0,0,0,0,)
rectangulo1.ingresarAlto();
rectangulo1.ingresarAncho();
rectangulo1.calculos()


let rectangulo2 = new Rectangulo('Rectangulo2',0,0,0,0,)
rectangulo2.ingresarAlto();
rectangulo2.ingresarAncho();
rectangulo2.calculos()

let rectangulo3 = new Rectangulo('Rectangulo3',0,0,0,0,)
rectangulo3.ingresarAlto();
rectangulo3.ingresarAncho();
rectangulo3.calculos()

rectangulo1.mostrarDatos();
rectangulo2.mostrarDatos();
rectangulo3.mostrarDatos();

