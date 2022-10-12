const prezzoAlKm = 0.21
const maggiorenne = 18
const over = 65
const scontoMaggiorenne = 0.2
const scontoOver = 0.4
let NomeCognome;
let kmPercorso;
let etaUtente;

const primaCarrozza = 1
const ultimaCarrozza = 7
const minCodice = 10000
const maxCodice = 50000

let prezzoTot;
let sconto;

//form del biglietto
const btnGenera = document.getElementById('btn-genera');

btnGenera.addEventListener('click', function(){
  const NomeCognome = prompt('Qual è il tuo nome completo?');
  const kmPercorso = parseInt(prompt('Quanti km devi percorrere per il tuo viaggio?'));
  const etaUtente = parseInt(prompt('Quanti anni hai?'));
  const PrezzoBiglietto = kmPercorso * prezzoAlKm
  
  document.getElementById('input-nome').value = NomeCognome;
  document.getElementById('input-km').value = kmPercorso;

  if (etaUtente < 18){
    document.getElementById('age').value = 'minorenne';
    document.getElementById('offerta').innerHTML = 'Sconto del 20%'
    sconto = PrezzoBiglietto * scontoMaggiorenne;
    prezzoTot = PrezzoBiglietto - sconto;

  } else if (etaUtente >= 65){
    document.getElementById('age').value = 'over-65';
    document.getElementById('offerta').innerHTML = 'Sconto del 40%'
    sconto = PrezzoBiglietto * scontoOver;
    prezzoTot = PrezzoBiglietto - sconto;

  }else{
    document.getElementById('age').value = 'maggiorenne';
    document.getElementById('offerta').innerHTML = 'Biglietto Standard'
    prezzoTot = PrezzoBiglietto;
  }

  //dettagli biglietto

  document.getElementById('nome-passeggero').innerHTML = NomeCognome;
  document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * (ultimaCarrozza - primaCarrozza) + primaCarrozza);
  document.getElementById('codice').innerHTML = Math.floor(Math.random() * (maxCodice - minCodice) + minCodice);
  document.getElementById('costo-biglietto').innerHTML = `${prezzoTot.toFixed(2)} €`;

})

//pulsante del reset
const btnReset = document.getElementById('btn-annulla');

btnReset.addEventListener('click', function(){
  document.getElementById('input-nome').value = "";
  document.getElementById('input-km').value = "";
  document.getElementById('age').value = "";
  document.getElementById('nome-passeggero').innerHTML = "";
  document.getElementById('offerta').innerHTML = "";
  document.getElementById('carrozza').innerHTML = "";
  document.getElementById('codice').innerHTML = "";
  document.getElementById('costo-biglietto').innerHTML = "";
  
})

