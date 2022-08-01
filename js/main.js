/*Crear un programa que me permita ingresar el stock de ropa con sus respectivas
etiquetas*/

class Ropa {
  constructor(tipo, nombre, talle, temporada, stock, id) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.talle = talle;
    this.temporada = parseInt(temporada);
    this.stock = stock;
    this.id = id;
  }

  asignarId(array){
    this.id=array.length;
  }

}

const ropa = [
  new Ropa("Remera", "Markingdriven", "XL", 2019, "En stock", 1),
  new Ropa("Pantalon", "Circa", "L", 2022, "En stock", 2),
  new Ropa("Pantalon", "Volcom", "L", 2015, "No hay stock", 3),
  new Ropa("Buzo", "MKD", "M", 2018, "En stock", 4),
  new Ropa("Buzo", "Redol", "S/M", 2020, "En stock", 5),
  new Ropa("Gorra", "Cleveland", "2", 2020, "En stock", 6),
  new Ropa("Remera", "MKD", "S", 2017, "Stock a reponer", 7),
];

/*Ingresar la indumentaria que se desee en el sistema*/

let continuar = true;

while (continuar) {
  let ingresar = prompt(
    "Ingresa lo nuevo que entra en stock: Tipo, nombre, talle, temporada, stock separados por un guion medio (-). Ingresa P para finalizar "
  );

  if (ingresar.toUpperCase()=='P'){
    continuar = false;
    break;
  }

  let dato = ingresar.split("-");
  const indumentaria = new Ropa(dato[0], dato[1], dato[2], dato[3], dato[4]);

  ropa.push(indumentaria);

  indumentaria.asignarId(ropa);

  console.log(ropa);
}

/*Fin del ingreso de la indumentaria*/