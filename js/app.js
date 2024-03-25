console.log("Js Objects")

/*---------------------
  Js Snack Objects 1
-----------------------*/

/*Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e
alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a
benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

//creo array con 10 
const automobile =  [
  {
  marca: "fiat",
  modello: "punto",
  alimentazione: "benzina"
  },
  {
  marca: "jeep",
  modello: "renegade",
  alimentazione: "benzina"
  },
  {
  marca: "opel",
  modello: "mocca",
  alimentazione: "elettrico"
  },
  {
  marca: "dacia",
  modello: "sandero",
  alimentazione: "gpl"
  },
  {
  marca: "mercedes",
  modello: "clase a",
  alimentazione: "disel"
  },
  {
  marca: "fiat",
  modello: "panda",
  alimentazione: "disel"
  },
  {
  marca: "citroen",
  modello: "c1",
  alimentazione: "metano"
  },
  {
  marca: "peuteoge",
  modello: "308",
  alimentazione: "elettrico"
  },
  {
  marca: "renault",
  modello: "clio",
  alimentazione: "gpl"
  },
  {
  marca: "volkswagen",
  modello: "tiguan",
  alimentazione: "metano"
  },
]
typeof automobile;
console.log(automobile);

//creo un array per ogni tipo di alimentazione

const autoBenzina = [];
const autoDisel = [];
const altrAlimentazione = [];

//creo ciclo per dividere le automobili pre l'alimentazione 

for(let i = 0; i < automobile.length; i++){
  let machina = automobile[i];//creo una variabile per accedere ai nomi e valori del oggeto
  // console.log(machina.marca);

  //scelgo le machine secondo l'alimentazione
  //il valore del object va messa con le "virgollette"
  if(machina.alimentazione === "benzina"){
    autoBenzina.push(machina);
  }else if(machina.alimentazione === "disel"){
    autoDisel.push(machina);
  }else{
    altrAlimentazione.push(machina);
  }
  
}
console.log(autoBenzina);
console.log(autoDisel);
console.log(altrAlimentazione);

//esempio come modello slides
/**
automobile.forEach(function(automobile) {
  console.log(`
  ${automobile.marca} modello: ${automobile.modello}
  alimentazione: ${automobile.alimentazione}
  `);
});*/

/*---------------------
  Js Snack Objects 2
-----------------------*/

/*
A partire da un array di stringhe, crea un secondo array formattando le
stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

//array originale
const primoArray = ["pippo", "PLUTO", "Paperino"];
// const nuovoArray = [];

// primoArray.forEach(function(parola){
// const controloParola = capitalize(controloParola);
// nuovoArray.push(controloParola);
// })
// console.log(nuovoArray);


/*---------------------
  Js Snack Objects 3
-----------------------*/

/*Crea un array di oggetti che rappresentano degli animali.
  Ogni animale ha un nome, una famiglia e una classe.
  Es: Crea un nuovo array con la lista dei mammiferi.
  [{ nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
  { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
  { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },] */

const speci = [
  {nome: "trota",famiglia: "salmonidi", clase: "pesci"},//object
  {nome: "zabra", famiglia: "equini", clase: "mamifari"},//object
  {nome: "fagiano", famiglia: "avicoli", clase: "avicoli"},//object
  {nome: "tonno", famiglia: "scombridi", clase: "pesci"},//object
  {nome: "delfini", famiglia: "delfinidi", clase: "mamiferi"},//object
  {nome: "paernice", famiglia: "phasianidae", clase: "avicoli"},//object
  {nome: "cervo", famiglia: "cerviade", clase: "mamiferi"},//object
  {nome: "quaglia", famiglia: "fasianidi", clase: "avicoli"},//object
];//array

// console.log(animali, typeof animali);

const claseMamiferi = [];//array
const claseAnimali = [];//array


for (let i = 0; i < speci.length; i++){
  const animale = speci[i];
  // console.log(animale.clase);

  if( animale.clase === "mamiferi"){
    claseMamiferi.push(animale.clase);
    }
  }
  console.log(claseMamiferi);
  console.log(claseAnimali);
  
