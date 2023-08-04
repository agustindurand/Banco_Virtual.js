
//Define la clase Tarjeta //
class Tarjeta {
    constructor (marca, color, alcance, montoMaximo) { 
    this.marca = marca;
    this.color = color;
    this.alcance = alcance;
    this.montoMaximo = montoMaximo; 
    }
  }

  // Instancias de Tarjetas utilizando la clase // 
  const Tarjetas = [ 
        new Tarjeta("Visa", "Dorado", false, 1000000),
        new Tarjeta("Mastercard", "Plateado", true, 300000),
        new Tarjeta("Mastercard", "Dorado", true, 1300000),
        new Tarjeta("American Express", "Azul", true, 2000000),
        ]


    // Función para mostrar productos en la página
function mostrarProductos() {
    const productosContainer = document.getElementById("productos-container");

    tarjetas.forEach(tarjeta => {
        const productoCard = document.createElement("div");
        productoCard.classList.add("producto-card");

        productoCard.innerHTML = `
            <h3>${tarjeta.marca}</h3>
            <p>Color: ${tarjeta.color}</p>
            <p>${tarjeta.internacional ? "Internacional" : "Nacional"}</p>
            <p>Monto máximo: $${tarjeta.montoMaximo.toFixed(2)}</p>
        `;

        productosContainer.appendChild(productoCard);
    });
}

  // Retorno de Funcion de edad minima //

  function edadMinimaParaTarjeta (minimo) {
    return function (edadUsuario) {
        if (edadUsuario >= minimo) {
            console.log ("El usuario puede pedir una tarjeta en nuestro banco!");
        } else { 
            console.log ("El usuario no se encuentra con la edad suficiente para usufructar la solicitud de tarjeta");
        }
    }
  }
  window.addEventListener("load", mostrarProductos);


  let verificarMayoriaEdad = edadMinimaParaTarjeta(18);
  let edadIngresada = prompt ("Ingrese edad: ");
  let edad = parseInt(edadIngresada);

  verificarMayoriaEdad(edad);
