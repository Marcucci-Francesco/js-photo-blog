// CONSEGNA 1
/*
**Milestone 1**
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

**Milestone 2**
Utilizzando Postman o Thunder Client, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

**Milestone 3**
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

**Bonus**
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
*/

/* =============================================================================== */

// CONSEGNA 2
/*
Milestone 1
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.

Milestone 2
Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

Milestone 3
Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare :faccia_leggermente_sorridente:

Bonus
Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare
*/

/* =============================================================================== */


// Dopo aver testato la chiamata all'endpoint di JSON ho verificato che gli elementi utili sono il title e l'url, da qui salvo in una const la chiamata ed essendo un endpoint di json placeholder vado ad usare poi fetch.

const endPoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6'
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.btn');



// Richiamo il file json per poi andare a leggere i dati, vado poi a richiamare l'id di dove andrò ad inserire le cards per assegnargli una stringa vuota in modo da resettarla, dopodiche faccio un forEach per iterare i dati per poi richiamare la funzione di stampa delle cards in modo tale da stamapre una card ad ogni iterazione dell'array di oggetti.

fetch(endPoint)
  .then(res => {
    return res.json();
  })
  .then(data => {
    document.getElementById('row-cards').innerHTML = '';
    data.forEach(summer => printCards(summer));
    imgOverlay()
    btnOverlay();
  })
  .catch(error => {
    console.log(error);
  })



// Mi creo una funzione per stampare le cards in pagina, andando a destrutturare gli elementi che mi occorrono con cui andro poi a sostituire i paramentri nell'html delle cards, richiamando prima l'id di dove le andrò ad inserire.

function printCards(summer){
  const {title, url} = summer;

  document.getElementById('row-cards').innerHTML += `
  <div class="col-3">
    <div class="fm-cards text-center position-relative">
      <img src="assets_day1/img/pin.svg" alt="" class="img-point">
      <img src="${url}" alt="" class="img">
      <div>
        <p>${title}</p>
      </div>
    </div>
  </div>`
}



// Creo due funzioni di cui la prima per aggiungere la classe d-none all'overlay, mentre la seconda per scatenare la prima al click del btn, poi lo aggiungo alla chiamata fetch nel .then

function imgZoomDown(){
  overlay.classList.add('d-none');
}

function btnOverlay() {
  btn.addEventListener('click', imgZoomDown);
}



// creo una funzione in cui richiamo le cards e le itero con il forEach così da leggerne il contenuto, nella funzione di callback faccio scatenare, al click della card, un'altra funzione in cui vado a rimuovere la classe d-none all'overlay per mostrarlo poi salvo in una costante l'evento che va a leggere (con il .currentTarget) il percorso delle immagini delle cards, successivamente prendo il percorso dell'img all'interno dell'overlay ed indico che è uguale al percorso delle immagini delle cards così da mostrarle nell'overlay.
function imgOverlay() {
  const cards = document.querySelectorAll('.fm-cards');
  cards.forEach(card => {
    card.addEventListener('click', function(event) {
      overlay.classList.remove('d-none');
      const img = event.currentTarget.querySelector('.img').src
      document.querySelector('.overlay img').src = img;
    })
  })
}

