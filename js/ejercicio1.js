/*
1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
*/

let auto = {
    //propiedades -> clave: valor
    color: ['negro','blanco','plateado','rojo'],
    marca: ['Chevrolet','Ford','Peugeout','Toyota','Nissan','Fiat','Volkswagen','Citröen','Renault'],
    modelo:['urbano','sub-compacto','compacto','familiar','sedán','berlina','descapotable','coupé'],
    encendido:false,
    encender: ()=>{ document.write(`<p>Se encendió el vehículo.</p>`)},
    apagar: ()=>{ document.write(`<p>Se apagó el vehículo.</p>`)}
}
   
document.write(`<p>Colores de vehículos: ${auto.color}</p>`)
document.write(`<p>Marcas de vehículos: ${auto.marca}</p>`)
document.write(`<p>Modelos de vehículos: ${auto.modelo}</p>`)

auto.encender();
auto.apagar();