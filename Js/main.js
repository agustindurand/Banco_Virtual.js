

// Declaracion de Funcion // 
function convertirMoneda() {
    // Mediante Document.getElementById se busca el elemento Html con el nombre pesoArgentino //
    // Utilizacion de parseFloat antes del documento.getElementById a fin de que convierta en numero decimal el valor que se ingresa en pesoArgentino //
    let pesoArgentino = parseFloat(document.getElementById("pesoArgentino").value);
    // Declaracion de variable de dolarEstadounidense con su operacion correspondiente //
    let dolarEstadounidense = pesoArgentino / 448;
    // Mediante document.getElementById buscamos elemento resultado del Html donde vamos a mostrar el resultado de la operacion de variable DolarEstadounidense//
    // Concatenamos el string USD, con el valor que nos va a resultar de la operacion de la variable dolarEstadounidense, asi mismo utilizamos la funcion ToFixed, a fines de que redondee en dos numeros decimales //
    document.getElementById("resultado").innerHTML = "USD " + dolarEstadounidense.toFixed(2);
}

    const botonPrimeraVez = document.getElementById("boton1");
    botonPrimeraVez.onclick = () => {
        Swal.fire({
            title: 'Alto',
            text: 'Inicie sesion o registrese ',
            icon: 'info',
            confirmButtonText: 'Aceptar' ,
            footer: '<a href="../html/registraciocuenta"> Presione aqui </a>' 
          })
    }


    const botonOpinion = document.getElementById("boton2");
    botonOpinion.onclick = () => {
        Swal.fire({
            title: 'Como nos califica?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Buen servicio',
            denyButtonText: `Mal servicio`,
          }).then((result) => {
           
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }


// Declaracion de la Funcion //
function calcularPrestamo() { 
    // Obtiene el valor ingresado en el elemento html ingresoNeto y tiene la utilizacion de parseFloat para convertilo en decimal //
    let ingresoNeto = parseFloat(document.getElementById("ingresoNeto").value);

    // Si el ingreso neto es mayor a 100.000 pesos, luego declara la variable si el usuario tiene prestacion en el banco a traves de la funcion confirm que emite un cuadro que presionas Aceptar o Rechazar, si el usuario tiene prestacion, se llamara al elemento resultadoPrestamo  //
    if (ingresoNeto > 100000) {
        let tienePrestacion = confirm("¿Tiene alguna prestación del banco actualmente?");
        if (tienePrestacion) {
            document.getElementById("resultadoPrestamo").innerHTML = "Su préstamo será calculado.";

            // variables para prestamo y cuotas, inciializadas en 0 // 
            let prestamo = 0;
            let cuotas = 0;

            // Bucle While, en el cual se le asignara valores a las variables Prestamo y Cuotas mediante prompt, las cuales deberan ser maypres a 0)
            while (! (prestamo > 0) || !(cuotas> 0)) {
                prestamo = parseFloat(prompt("Ingrese el monto del préstamo:")) || 0;
                cuotas = parseInt(prompt("Ingrese la cantidad de cuotas:")) || 0;
            }
            // Variables, de interes el cual vamos a aplicar a lo anterior, de total de intereses a pagar y de total de prestamo con sus operaciones //
            let interes = 0.12; // Tasa de interés del 12%
            let totalIntereses = prestamo * interes * cuotas;
            let totalPrestamo = prestamo + totalIntereses;
            let valorCuota = totalPrestamo / cuotas;

            document.getElementById("resultadoPrestamo").innerHTML = "Monto del préstamo: $" + prestamo.toFixed(2) +
                "<br>Cantidad de cuotas: " + cuotas +
                "<br>Total de intereses: $" + totalIntereses.toFixed(2) +
                "<br>Total a devolver: $" + totalPrestamo.toFixed(2) +
                "<br> Valor de Cuota: $ " + valorCuota.toFixed(2);

              // Almacenar datos en el localStorage utilizando JSON.stringify
              const datosPrestamo = { prestamo, cuotas, interes, totalIntereses, totalPrestamo};
            localStorage.setItem("datosPrestamo", JSON.stringify(datosPrestamo));
        } else {
            document.getElementById("resultadoPrestamo").innerHTML = "Por favor, acérquese a la sucursal para solicitar un préstamo.";
        }
    } else {
        document.getElementById("resultadoPrestamo").innerHTML = "No cumple con el ingreso mínimo solicitado.";
    }
}

// Local Storage // 
// Función para cargar datos del localStorage y mostrarlos al cargar la página
function cargarDatosAlIniciar() {
    // Obtener datos almacenados en el localStorage utilizando JSON.parse
    const datosPrestamo = JSON.parse(localStorage.getItem("datosPrestamo")) ?? {};

    // Verificar si hay datos almacenados y mostrarlos en el resultado
    if (datosPrestamo) {
        document.getElementById("resultadoPrestamo").innerHTML = "Monto del préstamo: $" + datosPrestamo.montoPrestamo.toFixed(2) +
            "<br>Cantidad de cuotas: " + datosPrestamo.cuotas +
            "<br>Total de intereses: $" + datosPrestamo.totalIntereses.toFixed(2) +
            "<br>Total a devolver: $" + datosPrestamo.totalPrestamo.toFixed(2);
    }
}

// Evento para cargar datos al iniciar la página
window.addEventListener("load", cargarDatosAlIniciar);

// Session Storage // 
const login = document.getElementById("login");
login.addEventListener ("submit", function(event) {
    event.preventDefault ();

const username = document.getElementById("email").value;
const contraseña = document.getElementById("direccion").value;

if (username === "usuario" && contraseña == "contraseña") {
    sessionStorage.setItem ("loggedIn", "true");
    window.location.href="index.html"
}
})