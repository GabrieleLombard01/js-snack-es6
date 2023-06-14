//JS RESET
console.log('JS OK')

//! OPERAZIONI INIZIALI:

//todo PRENDO GLI ELEMENTI INTERESSATI:
const guestList = 
[
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];
const tableName = 'Tavolo VIP';
const placeCards = [];

//! LOGICA EFFETTIVA:

for (let i = 0; i < guestList.length; i++) {
    const guest = {
      table: tableName,
      name: guestList[i],
      seat: i + 1
    };
    placeCards.push(guest);
  }

// Stampo in console la lista dei segnaposti
console.log(placeCards);