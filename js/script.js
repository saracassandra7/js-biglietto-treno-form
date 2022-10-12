const prezzoAlKm = 0.21
const maggiorenne = 18
const over = 65
const scontoMaggiorenne = 0.2
const scontoOver = 0.4
let NomeCognome;
let kmPercorso;
let etaUtente;

const PrezzoBiglietto = kmPercorso * prezzoAlKm
let prezzoTot;
let sconto;

if (etaUtente < maggiorenne){
  sconto = PrezzoBiglietto * scontoMaggiorenne;
  prezzoTot = PrezzoBiglietto - sconto;
  
} else if (etaUtente >= over){
  sconto = PrezzoBiglietto * scontoOver;
  prezzoTot = PrezzoBiglietto - sconto;
  
} else {
  prezzoTot = PrezzoBiglietto;

}

let prezzoFinale = prezzoTot.toFixed(2);

//form del biglietto
const btnGenera = document.getElementById('btn-genera');

btnGenera.addEventListener('click', function(){
  const NomeCognome = prompt('Qual è il tuo nome completo?');
  const kmPercorso = parseInt(prompt('Quanti km devi percorrere per il tuo viaggio?'));
  const etaUtente = parseInt(prompt('Quanti anni hai?'));
  
  
  document.getElementById('input-nome').value = NomeCognome;
  document.getElementById('input-km').value = kmPercorso;

  if (etaUtente < 18){
    document.getElementById('age').value = 'minorenne';

  } else if (etaUtente >= 65){
    document.getElementById('age').value = 'over-65';

  }else{
    document.getElementById('age').value = 'maggiorenne';
  }

})

//pulsante del reset
const btnReset = document.getElementById('btn-annulla');

btnReset.addEventListener('click', function(){
  document.getElementById('input-nome').value = "";
  document.getElementById('input-km').value = "";
  document.getElementById('age').value = "";
  
})

//dettagli biglietto