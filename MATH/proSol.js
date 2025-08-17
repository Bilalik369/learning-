const grades = [
    [3, 5, 2, 4],
    [6, 7, 5, 3],
    [4, 2, 6, 5],
    [1, 3, 4, 2],
    [5, 6, 7, 4]
  ];

  const note = grades.map(row=>row.reduce((a, c)=> a + c, 0))
  console.log(note)

  const hey = grades.map(row=> row.reduce((best , crount)=>{
    return crount > best ? crount : best 
  }))
  console.log(hey)

  const simp = grades.map(row=> row.filter(e=> e>3))
  console.log(simp)

  const transpose = grades[0].map((_, col)=> grades.map(row => row [col])) 


  console.log(transpose)


  const A = [
    [1, 2],
    [3, 4]
  ];
  
  const B = [
    [5, 6],
    [7, 8]
  ];

let result = []



for (let i = 0; i < A.length; i++) {
    let row = [];
    for (let j = 0; j < A[i].length; j++) {
        row.push(A[i][j] + B[i][j]);
    }
    result.push(row);
}

console.log(result);


let mult = []

for(let i = 0 ; i<A.length; i++){
    let row = []
    for(let j = 0 ; j<B[0].length ; j++){
        let sum = 0
        for(let k = 0 ; k<A[0].length ; k++){
            sum+= A[i][k]*B[k][j]
        }
        row.push(sum)
    }
    mult.push(row)
}
console.log(mult)