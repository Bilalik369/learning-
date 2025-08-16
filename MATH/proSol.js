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


  