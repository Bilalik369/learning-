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
    let Matrix = [];
    console.log(`Entrer les éléments de la matrice ${matrixNumber}:`);
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            let value = await ask(`Matrice ${matrixNumber} - élément [${i + 1}][${j + 1}]: `);
            row.push(value);
        }
        Matrix.push(row);
    }
    return Matrix;
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
    let rows = await ask("Nombre de lignes (rows) ? ");
    let cols = await ask("Nombre de colonnes (cols) ? ");
  
    let matrixA = await getMatrix(rows, cols, 1);
    let matrixB = await getMatrix(rows, cols, 2);
  
    let sum = sumMatrices(matrixA, matrixB);
  
    console.log("Matrice A:", matrixA);
    console.log("Matrice B:", matrixB);
    console.log("Somme des matrices:", sum);
  
    rl.close();
})();
