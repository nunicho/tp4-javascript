/*
1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
*/

class Rodado{
    constructor(color, marca, modelo, yearProduccion, tipo, foto){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.yearProduccion = yearProduccion
        this.tipo = tipo
        this.foto = foto;
        this.estado = 'apagado'
        
    }
    set modificarEstado(nuevoEstado){
        this.estado = nuevoEstado
    }
    estadoRodado (){
        document.write(`El vehículo esta ${this.estado}. <br>`)
    }
    mostrarDatos(){
        document.write(`<hr> <br> <h5>El Rodado tiene las siguientes características: <h5>
        <ol>
        <li>Color: ${this.color}</li> 
        <li>Marca: ${this.marca}</li>
        <li>Modelo: ${this.modelo}</li>
        <li>Período: ${this.yearProduccion}</li>
        <li>Tipo: ${this.tipo}</li>
        <li>Foto: ${this.foto}</li>
        </ol>
        `)
    }
}

let auto1 = new Rodado ('Amarillo', 'Lamborghini', 'Diablo', '1990-2001', 'superdeportivo', `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Lamborghini_Diablo_SV_coupe.jpg/1024px-Lamborghini_Diablo_SV_coupe.jpg" width="25%" alt="Lamborghini">`)

auto1.mostrarDatos();
auto1.estadoRodado();
auto1.modificarEstado='encendido'
auto1.estadoRodado();
auto1.modificarEstado='apagado'
auto1.estadoRodado();

let auto2 = new Rodado ('Gris', 'Ford', 'Fiesta', '1976-presente', 'automóvil de turismo', `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2019_Ford_Fiesta_Active_X_Turbo_1.0_Front.jpg/1280px-2019_Ford_Fiesta_Active_X_Turbo_1.0_Front.jpg" width="25%" alt="Ford Fiesta">`)

auto2.mostrarDatos();
auto2.estadoRodado();
auto2.modificarEstado='encendido'
auto2.estadoRodado();
auto2.modificarEstado='apagado'
auto2.estadoRodado();

let auto3 = new Rodado ('Negro', 'Toyota', 'Hilux', '1968-presente', 'camioneta compacta', `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/2018_Toyota_Hilux_Invincible_X_D-4d_4WD_2.4_Front.jpg/1280px-2018_Toyota_Hilux_Invincible_X_D-4d_4WD_2.4_Front.jpg" width="25%" alt="Toyota Hilux">`)

auto3.mostrarDatos();
auto3.estadoRodado();
auto3.modificarEstado='encendido'
auto3.estadoRodado();
auto3.modificarEstado='apagado'
auto3.estadoRodado();


