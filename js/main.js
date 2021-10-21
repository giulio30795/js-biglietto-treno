// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Richiesta età e Km al cliente
// Calcolo prezzo standard 0,21*KM
// Calcolo prezzo scontato minorenni -20%
// Calcolo prezzo scontato over 65 -40%


const età = parseInt (prompt('Quanti anni hai?') );
const km = parseInt (prompt('Quanti km vuoi fare?') );

let prezzo = (km*0.21)

if (età <= 18 {
    prezzo = prezzo
}