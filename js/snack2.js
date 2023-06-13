//JS RESET
console.log('JS OK')

/*
DATI:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84 */

//! FUNZIONI:

// Funzione per ottenere i nomi degli studenti sopra una media voto specificata
function getSopra70Names(studentsList) {

};

//! OPERAZIONI INIZIALI:

const students = [
    { id: 213, name: 'Marco della Rovere', grades: 78 },
    { id: 110, name: 'Paola Cortellessa', grades: 96 },
    { id: 250, name: 'Andrea Mantegna', grades: 48 },
    { id: 145, name: 'Gaia Borromini', grades: 74 },
    { id: 196, name: 'Luigi Grimaldello', grades: 68 },
    { id: 102, name: 'Piero della Francesca', grades: 50 },
    { id: 120, name: 'Frances of Polenta', grades: 84 }
];

//! LOGICA EFFETTIVA:

// MILESTONE 1: Creare una lista degli studenti con una media voto superiore a 70
const sopra70 = students.filter(student => student.grades > 70);

const sopra70Output = document.createElement('p');
sopra70Output.textContent = 'Studenti con una media voto superiore a 70: ' + getSopra70Names(sopra70);
document.getElementById('output').appendChild(sopra70Output);

// MILESTONE 2: Creare una lista degli studenti con una media voto superiore a 70 e un ID superiore a 120
const sopra70EIdSopra120 = students.filter(student => student.grades > 70 && student.id > 120);

const sopra70EIdSopra120Output = document.createElement('p');
sopra70EIdSopra120Output.textContent = 'Studenti con una media voto superiore a 70 e un ID superiore a 120: ' + getSopra70Names(sopra70EIdSopra120);
document.getElementById('output').appendChild(sopra70EIdSopra120Output);

// MILESTONE 3: Creare una lista dei nomi degli studenti in lettere maiuscole
const nomiInMaiuscolo = students.map(student => student.name.toUpperCase());

const nomiInMaiuscoloOutput = document.createElement('p');
nomiInMaiuscoloOutput.textContent = 'Nomi degli studenti in lettere maiuscole: ' + nomiInMaiuscolo.join(', ');
document.getElementById('output').appendChild(nomiInMaiuscoloOutput);


 