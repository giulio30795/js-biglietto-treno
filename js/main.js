// Richiesta età e Km al cliente
const età = parseInt (prompt('Quanti anni hai?') );
const km = parseFloat (prompt('Quanti km vuoi fare?') );



// Calcolo prezzo standard 0,21*KM
let prezzo = (km*0.21).toFixed(2);

// Sconti
const over65 = (prezzo*40/100)
const minorenni = (prezzo*20/100)

// Alert
if (isNaN(età) || isNaN(km)) {
    alert('Dati inseriti non validi, riprovare.');
}
// Calcolo prezzo scontato
if (età < 18) {
    prezzo -= minorenni.toFixed(2);
} else if (età > 65) {
    prezzo -= over65.toFixed(2);
}
// Output risultato
document.getElementById('prezzo').innerHTML =`il prezzo del biglietto è: ${prezzo}`;