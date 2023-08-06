function obtenerTasasDeCambio() {
    const API_URL = "https://api.apilayer.com/exchangerates_data/latest?apikey=YOUR_API_KEY";
  
    return fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error en la solicitud a la API");
        }
        return response.json();
      })
      .then(data => {
        return data.rates; // Develve
      })
      .catch(error => {
        throw error; // Rechaza
      });
  }
  
 
  obtenerTasasDeCambio()
    .then(tasas => {
      console.log("Tasas de cambio:", tasas);
  
      
      const pesosArgentinos = parseFloat(document.getElementById("pesoArgentino").value);
      const tasaDolar = tasas.USD; // Tomamos la tasa de cambio del dólar
      const equivalenteEnDolares = pesosArgentinos * tasaDolar;
  
      document.getElementById("resultado").innerHTML = "USD " + equivalenteEnDolares.toFixed(2);
    })
    .catch(error => {
      console.error("Error al obtener las tasas de cambio:", error);
      // mensaje de error en la página
    });