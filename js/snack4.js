//JS RESET
console.log('JS OK')

//todo FUNZIONI:

// Funzione per generare un numero casuale compreso tra min (incluso) e max (escluso)
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