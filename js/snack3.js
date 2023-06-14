//JS RESET
console.log('JS OK')

//! OPERAZIONI INIZIALI:

// Array di oggetti bicicletta
const bikes = [
    { name: 'Carrera', weight: 7 },
    { name: 'Cinelli', weight: 6 },
    { name: 'Cipollini', weight: 5 },
    { name: 'Colnago', weight: 8 },
  ];
  
// Variabile per peso minimo:
let minWeightBike = bikes[0];

//! LOGICA EFFETTIVA:

//Ciclo che ripeta attraverso il resto degli oggetti nell'array:
for (let i = 1; i < bikes.length; i++) {

    // Destructuring per ottenere il peso dell'oggetto corrente
    const { weight } = bikes[i];

    // Verifica se il peso dell'oggetto corrente è minore del peso della bici con peso minore attualmente registrata
  if (weight < minWeightBike.weight) {
    
    // Se è minore, assegna l'oggetto corrente come bici con peso minore
    minWeightBike = bikes[i];
  }
}