//JS RESET
console.log('JS OK')

//todo FUNZIONI:

// Funzione per generare un numero casuale compreso tra min (incluso) e max (escluso) :
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

//! OPERAZIONI INIZIALI:
const teams = [
    { nome: 'Torino', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Juve', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
  ];

//! LOGICA EFFETTIVA:

// Genero numeri casuali per punti fatti e falli subiti di ogni squadra :
for (let i = 0; i < teams.length; i++) {
    teams[i].puntiFatti = getRandomNumber(0, 100);
    teams[i].falliSubiti = getRandomNumber(0, 50);
  }

// Creo un nuovo array con solo nomi e falli subiti utilizzando il destructuring :
const teamData = teams.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

// Stampo tutto in console :
console.log('Array originale di squadre di calcio:', teams);
console.log('Nuovo array con nomi e falli subiti:', teamData);