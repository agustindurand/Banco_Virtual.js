

function Tarjeta(marca, color, internacional, montoMaximo) {
    this.marca = marca;
    this.color = color;
    this.internacional = internacional;
    this.montoMaximo = montoMaximo; 
  }
  
  // Crear instancias de tarjetas utilizando el constructor
  const tarjeta1 = new Tarjeta("Visa", "Dorado", false, 1000000);
  const tarjeta2 = new Tarjeta("Mastercard", "Plateado", true, 300000);
  const tarjeta3 = new Tarjeta("Mastercard", "Dorado", true, 1300000);
  const tarjeta4 = new Tarjeta("American Express", "Azul", true, 2000000);
  
  // Crear un array que contiene objetos 
  let tarjetas = [tarjeta1, tarjeta2, tarjeta3, tarjeta4];


  console.log(tarjetas[3].color); 

  // Retorno de Funcion //

  function edadMinimaParaTarjeta (minimo) {
    return function (edadUsuario) {
        if (edadUsuario >= minimo) {
            console.log ("El usuario puede pedir una tarjeta en nuestro banco!");
        } else { 
            console.log ("El usuario no se encuentra con la edad suficiente para usufructar la solicitud de tarjeta");
        }
    }
  }

  let verificarMayoriaEdad = edadMinimaParaTarjeta(18);
  let edadIngresada = prompt ("Ingrese edad: ");
  let edad = edadIngresada;

  verificarMayoriaEdad(edad);
