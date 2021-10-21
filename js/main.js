// Richiesta età e Km al cliente
const età = parseInt (prompt('Quanti anni hai?') );
const km = parseFloat (prompt('Quanti km vuoi fare?') );

// Calcolo prezzo standard 0,21*KM
let prezzo = (km*0.21).toFixed(2);
// Calcolo prezzo scontato minorenni -20%

const over65 = (prezzo*40/100)
const minorenni = (prezzo*20/100)

if (età < 18) {
    prezzo = (prezzo-minorenni).toFixed(2);
}
// Calcolo prezzo scontato over 65 -40%
if (età > 65) {
    prezzo = (prezzo-over65).toFixed(2);
}
// Output risultato
document.getElementById('prezzo').innerHTML =`il prezzo del biglietto è: ${prezzo}`;