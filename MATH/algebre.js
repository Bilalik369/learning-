import { error } from "console";
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


function determinant(martix){
    const n = martix.length


    if(n===1) return martix[0][0]
    if(n===2) return martix[0][0]*martix[1][1] - martix[1][0] * martix[0][1] 

    let det = 0
    for(let col = 0; col<n; col++){
        let subMatrix = martix.slice(1).map(row => row.filter((_,j)=> j !== col))
        det += ((col % 2 === 0 ? 1 : -1)) * determinant(subMatrix    )
    }
    return det
}

function multiplyMatrices(matrixA, matrixB){
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;

    if(colsA !== rowsB){
        throw new Error("Impossible de multiplier : le nombre de colonnes de la matrice A doit être égal au nombre de lignes de la matrice B");
    }

    let result = [];
    for(let i = 0; i < rowsA; i++){
        let row = [];
        for(let j = 0; j < colsB; j++){
            let sum = 0;
            for(let k = 0; k < colsA; k++){
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}

(async function main() {
    let rows = await ask("Nombre de lignes ? ");
    let cols = await ask("Nombre de colonnes  ? ");
  
    let matrixA = await getMatrix(rows, cols, 1);
    let matrixB = await getMatrix(rows, cols, 2);
  
    let sum = sumMatrices(matrixA, matrixB);
  
    console.log("Matrice A:", matrixA);
    console.log("Matrice B:", matrixB);
    console.log("Somme des matrices:", sum);

    if(rows === cols){
        console.log("Determinant de la matrice A:", determinant(matrixA))
        console.log("Determinant de la matrice A:", determinant(matrixB))



    }else{
        console.log("Determinant seulement pour les matrices carrées (rows === cols)");
    }
    console.log("multiplu de matrice" , multiplyMatrices(matrixA , matrixB))
  
    rl.close();
})();