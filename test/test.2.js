// const etudiants = [ 
//   { 
//     nom: "Ali", 
//     age: 22, 
//     notes: [15, 12, 18], 
//     filiere: "Dev", 
//     present: true 
//   }, 
//   { 
//     nom: "Lina", 
//     age: 21, 
//     notes: [9, 14, 11], 
//     filiere: "Design", 
//     present: false 
//   }, 
//   { 
//     nom: "Yassine", 
//     age: 23, 
//     notes: [17, 19, 18], 
//     filiere: "Dev", 
//     present: true 
//   }, 
//   { 
//     nom: "Sara", 
//     age: 20, 
// notes: [10, 8, 12], 
// filiere: "Marketing", 
// present: false 
// }, 
// { 
// nom: "Hiba", 
// age: 24, 
// notes: [13, 16, 17], 
// filiere: "Dev", 
// present: true 
// } 
// ]; 



// const test = etudiants.map(etd=>{
//   const hey = etd.notes.reduce((a, c)=> a + c , 0)
//   const lengh = etd.notes.length
//   const moyen  = hey / lengh

//   return {
//     ...etd,
//     notege : moyen

//   }
// })
// console.log(test)


import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(Number(answer));
    });
  });
}

async function getMatrix(rows, cols, matrixNumber) {
  let matrix = [];
  console.log(`${matrixNumber}:`);
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      let value = await ask(` ${matrixNumber} -  [${i+1}][${j+1}]: `);
      row.push(value);
    }
    matrix.push(row);
  }
  return matrix;
}

function sumMatrices(matrixA, matrixB) {
  let result = [];
  for (let i = 0; i < matrixA.length; i++) {
    let row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }
  return result;
}

(async function main() {
  let rows = await ask("(rows) ");
  let cols = await ask("(cols)");

  let matrixA = await getMatrix(rows, cols, 1);
  let matrixB = await getMatrix(rows, cols, 2);

  let sum = sumMatrices(matrixA, matrixB);

  console.log("MATRICE A:", matrixA);
  console.log("MATRICE B:", matrixB);
  console.log("Summ des matrice", sum);

  rl.close();
})();
