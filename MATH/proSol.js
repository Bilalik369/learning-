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


const points = [
    [10, 12, 8, 15],
    [9, 14, 11, 10],
    [13, 7, 12, 9]
  ];

  const lignes = points.map((row=> row.reduce((a,c)=> a+c, 0)))
  console.log(lignes)

   const cols = points[0].map((_, col)=>points.reduce((a ,c)=> a +c[col] , 0))
   console.log( "hey",cols)


   const notes = [
    [12, 15, 10, 14],
    [9, 11, 13, 10],  
    [16, 14, 12, 15], 
    [8, 10, 11, 9], 
    [13, 17, 14, 16] 
  ];

  const moyenne = notes.reduce((a ,c)=> a + c.reduce((sum  , row)=> sum + row , 0), 0)
  
  console.log(moyenne)



  function reverseString(str) {
    return str.split("").reduce((a ,c)=> c + a, "")

}
console.log(reverseString("hellow"))


function findMax(numbers) {
 return numbers.reduce((best , cour)=>{
  return cour>best ? cour : best
 })
}
console.log(findMax([1 , 2 ,3 , 5, 2 ,  34])) 

function countCharacters(str) {
 return str.length 
}
console.log(countCharacters("helocncocccdz"))


const a = [1,2,3]
const b = [1,2,3]

console.log(a === b)


console.log([] + {}); 
console.log({} + []);

console.log(null == undefined)

console.log("5" - 2)

console.log([1 , 2 ] =="1,2")
console.log({} + []);


 console.log(true - true)


   



