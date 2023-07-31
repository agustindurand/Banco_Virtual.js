

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
            while (prestamo <= 0 || cuotas <= 0) {
                prestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));
                cuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
            }
            // Variables, de interes el cual vamos a aplicar a lo anterior, de total de intereses a pagar y de total de prestamo con sus operaciones //
            let interes = 0.12; // Tasa de interés del 12%
            let totalIntereses = prestamo * interes * cuotas;
            let totalPrestamo = prestamo + totalIntereses;

            document.getElementById("resultadoPrestamo").innerHTML = "Monto del préstamo: $" + prestamo.toFixed(2) +
                "<br>Cantidad de cuotas: " + cuotas +
                "<br>Total de intereses: $" + totalIntereses.toFixed(2) +
                "<br>Total a devolver: $" + totalPrestamo.toFixed(2);
        } else {
            document.getElementById("resultadoPrestamo").innerHTML = "Por favor, acérquese a la sucursal para solicitar un préstamo.";
        }
    } else {
        document.getElementById("resultadoPrestamo").innerHTML = "No cumple con el ingreso mínimo solicitado.";
    }
}

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