
const grigliaHtml = document.getElementById('griglia')
let numbers = []

play.addEventListener('click', function () {

    //pulisco la griglia prima di generarne una nuova
    grigliaHtml.innerHTML = "";

    for(let i=1; i<=100; i++ ){
        
        numbers.push(i)

        //creazione cella
        let box = document.createElement("div")
        box.classList.add("box")

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
    
})
console.log(numbers)