const grigliaHtml = document.getElementById('griglia')
const play = document.getElementById('play');
const selectDifficolta = document.getElementById('difficolta');

play.addEventListener('click', function () {
    //dichiaro e azzero l'array prima di iniziare
    let numbers = []

    //pulisco la griglia prima di generarne una nuova
    grigliaHtml.innerHTML = "";
    
    //Dichiaro le variabili per la difficoltà
    const difficolta = selectDifficolta.value;
    var righe, colonne;

    //Scelta difficoltà
    switch (difficolta){
        case 'easy':
            righe = 10;
            colonne = 10;
            break;
        case 'medium':
            righe = 9;
            colonne = 9;
            break;
        case 'hard':
            righe = 7;
            colonne = 7;
            break;
        }
    //Generazione griglia
    for(let i=1; i<= (righe*colonne); i++ ){
        
        numbers.push(i)

        //creazione cella
        let box = document.createElement("div")

        //NOTE Dimensioni griglia in base alla difficoltà
        if (righe===10 && colonne===10){
            box.classList.toggle("box-easy")
        }else if(righe===9 && colonne===9){
            box.classList.toggle("box-medium")
        }else if(righe===7 && colonne===7){
            box.classList.toggle("box-hard")
        }
     
        //Creazione sotto-cella
        let numeroSpan = document.createElement("span");

        //inserimento numero cella
        numeroSpan.innerHTML = i;

        // Aggiunta dello span alla cella
        box.appendChild(numeroSpan);
        
        //inserisco il tutto nella griglia
        grigliaHtml.append(box)

        //NOTE Cambio colore al click
        box.addEventListener('click', function (){

            //Cambio colore cella
            box.classList.add("active")

            //Stampa in console il numero della cella cercata
            console.log('Cella cliccata:', i);
        })
    }
    console.log(numbers)
})



/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe
*/