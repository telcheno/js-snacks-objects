console.log("Js Objects")

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