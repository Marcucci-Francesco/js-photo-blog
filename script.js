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



// Dopo aver testato la chiamata all'endpoint di JSON ho verificato che gli elementi utili sono il title e l'url, da qui salvo in una const la chiamata ed essendo un endpoint di json placeholder vado ad usare poi fetch.

const endPoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6'


// Richiamo il file json per poi andare a leggere i dati, vado poi a richiamare l'id di dove andrò ad inserire le cards per assegnargli una stringa vuota in modo da resettarla, dopodiche faccio un forEach per iterare i dati per poi richiamare la funzione di stampa delle cards in modo tale da stamapre una card ad ogni iterazione dell'array di oggetti.

fetch(endPoint)
  .then(res => {
    return res.json();
  })
  .then(data => {
    document.getElementById('row-cards').innerHTML = '';
    data.forEach(summer => printCards(summer));
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
        <img src="${url}" alt="">
        <div>
          <p>${title}</p>
        </div>
      </div>
    </div>`
  }