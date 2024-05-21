'use strict'
console.log('Mi gente')


const bici = [
     {
        nome: 'bici 1',
        peso: 25 ,
     },

     {
        nome: 'bici nuova 2',
        peso: 7 ,
     },

     {
        nome: 'bici 2',
        peso: 8,
     },

     {
        nome: 'bici 3',
        peso: 7,
     },

     {
        nome: 'bici 4',
        peso: 13,
     },

     {
        nome: 'bici 5',
        peso: 21,
     },


]



if (bici.length) {
    let pesoLeggero = bici[0].peso;



for(let i = 0; i < bici.length; i++){


    
    const pesoAttuale = bici[i].peso

    if (pesoAttuale < pesoLeggero){

        pesoLeggero = pesoAttuale
    }

}

console.log(pesoLeggero)

const biciLeggere = []

for(let i = 0; i < bici.length; i++){

    if(bici[i].peso === pesoLeggero){
        biciLeggere.push(bici[i])
    }
}

console.log(biciLeggere)
}  else {
    console.log('non ci sono bici in elenco')
}



