const users = [
    { name: "Ahmed", age: 25 },
    { name: "Akram", age: 17 },
    { name: "Hassan", age: 30 },
    { name: "Ibrahim", age: 20 },
    { name: "Ali", age: 19 }
  ];


  const userfiltre = users.filter(user => user.name.startsWith("A") && user.age >18);

  console.log(userfiltre);


  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

  const paire  = numbers.filter(num => num %2 === 0)
  console.log(paire)

  const numberss = [10, 20, [12 ,1] , [1, 1] ,  "bb" , 1 , [1 ]];


  const arry = numberss.filter(item  => Array.isArray(item))
  console.log(arry)
  const nmbarray = arry.reduce((a , c) => a + c .length , 0)
  console.log(nmbarray)

   
  const userss = [
    { name: "Ahmed", age: 25 },
    { name: "Akram", age: 17 },
    { name: "Hassan", age: 30 },
    { name: "Ibrahim", age: 20 },
    { name: "Ali", age: 19 }
  ];

 


const user = [
    { name: "Said", note: 10 },
    { name: "Hamada",  note: 7 },
    { name: "Karim",  note: 5 },
    { name: "imane",  note: 9 },
    { name: "saida", note: 17 },
    { name: "jarmouni", note: 14 }
    ]

    const ret = [];
    for (let i = 0 ; i>user.length ;  i++){
        if(user[i].note > 7 && user[i].note<10){
            ret.push(user[i].name);
        }
    } 
    console.log(ret)


    const products = [
        { name: "Laptop", price: 8000, quantity: 3 },
        { name: "Phone", price: 5000, quantity: 10 },
        { name: "Mouse", price: 15, quantity: 50 },
        { name: "Keyboard", price: 300, quantity: 40 },
        { name: "Monitor", price: 2000, quantity: 5 }
      ];
      
      const totalGan = products.map(pro => pro.price * pro.quantity);
      const total = totalGan.reduce((a, c) => a + c, 0);
      
      const plus = products.filter(pro => pro.price * pro.quantity > 2000);
      const names = plus.map(pro => pro.name);
      
      console.log( total); 
      console.log( totalGan);
      console.log(names);


      const product = [
        { name: "Laptop", price: 8000, quantity: 3 },
        { name: "Laptop", price: 8000, quantity: 3 },
        { name: "Phone", price: 5000, quantity: 10 },
        { name: "Mouse", price: 15, quantity: 50 },
        { name: "Mouse", price: 15, quantity: 50 },
        { name: "Keyboard", price: 300, quantity: 40 },
        { name: "Monitor", price: 2000, quantity: 5 }
      ];

      const talamid = [
        {namee : "ayma" , cal :10},
        { namee :"ta" , cal :11},
        {namee :"aybama" , cal :12},
        {namee : "ayhama" , cal :15},
    ]


    const tes = talamid.reduce((a , c)=> a + c.cal , 0);
    console.log(tes)

    const tess = talamid.reduce((a, c)=>{
        return c.cal>12  ? a+1 :a;
    }, 0 );

    console.log(tess)


    const etud = [
        { name: "Ayman", cal: 14, level: "2ème" },
        { name: "Sara", cal: 9, level: "1ère" },
        { name: "Mohammed", cal: 18, level: "2ème" },
        { name: "Lina", cal: 13, level: "1ère" },
        { name: "Youssef", cal: 7, level: "2ème" },
        { name: "Amine", cal: 16, level: "1ère" },
      ];
      
  const levelsatus = etud.reduce((acc , curr)=>{
    if(!acc[curr.level]){
        acc[curr.level] = {total : 0 , count : 0}
    }
    acc[curr.level].total  += curr.cal;
    acc[curr.level].count++;
    return acc;
  }, {})


  for(let level in levelsatus){
    const stat = levelsatus[level]
    stat.avg = stat.total / stat.count
  }


  console.log(levelsatus);

   const successTalamid = etud.filter(e=> e.cal> 10 ).sort((a , b) => b.cal - a.cal).map(e=> e.name)
   console.log(successTalamid)
      



      