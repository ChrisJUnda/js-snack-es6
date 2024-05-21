'use strict';

console.log('Hello mi gente');


const teams = [
  {
    nome: 'Team 1',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Team 2',
    puntiFatti: 0,
    falliSubiti: 0,
  },
]; 

console.log(teams);

//generiamo valori di punti fatti e falli subiti

const teamsModificato = teams.map((element, index, arr) => {

  return {
    ...element,
    falliSubiti: Math.random(),
    nuovaChiave: 'ciao',
  };

});

console.log(teamsModificato);



const myObj = {
  nome: 'Classe 126',
  quanti: 35,
  fame: true,
};

console.log();

const newObj = {
  ...myObj,
};

newObj.prova = true;



const obj1 = {
  nome: 'Christian',
  cognome: 'Segovia',
  eta: 21,
};


comando(obj1);

function comando({ nome, eta }) {

    

  console.log(`Il mio nome è ${nome} e l'età è ${eta}`);
}