// // import { count } from "console";



// // const users = [
// //     { name: "Ahmed", age: 25 },
// //     { name: "Akram", age: 17 },
// //     { name: "Hassan", age: 30 },
// //     { name: "Ibrahim", age: 20 },
// //     { name: "Ali", age: 19 }
// //   ];


// //   const userfiltre = users.filter(user => user.name.startsWith("A") && user.age >18);

// //   console.log(userfiltre);


// //   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// //   const paire  = numbers.filter(num => num %2 === 0)
// //   console.log(paire)

// //   const numberss = [10, 20, [12 ,1] , [1, 1] ,  "bb" , 1 , [1 ]];


// //   const arry = numberss.filter(item  => Array.isArray(item))
// //   console.log(arry)
// //   const nmbarray = arry.reduce((a , c) => a + c .length , 0)
// //   console.log(nmbarray)

   
// //   const userss = [
// //     { name: "Ahmed", age: 25 },
// //     { name: "Akram", age: 17 },
// //     { name: "Hassan", age: 30 },
// //     { name: "Ibrahim", age: 20 },
// //     { name: "Ali", age: 19 }
// //   ];

 


// // const user = [
// //     { name: "Said", note: 10 },
// //     { name: "Hamada",  note: 7 },
// //     { name: "Karim",  note: 5 },
// //     { name: "imane",  note: 9 },
// //     { name: "saida", note: 17 },
// //     { name: "jarmouni", note: 14 }
// //     ]

// //     const ret = [];
// //     for (let i = 0 ; i>user.length ;  i++){
// //         if(user[i].note > 7 && user[i].note<10){
// //             ret.push(user[i].name);
// //         }
// //     } 
// //     console.log(ret)


// //     const products = [
// //         { name: "Laptop", price: 8000, quantity: 3 },
// //         { name: "Phone", price: 5000, quantity: 10 },
// //         { name: "Mouse", price: 15, quantity: 50 },
// //         { name: "Keyboard", price: 300, quantity: 40 },
// //         { name: "Monitor", price: 2000, quantity: 5 }
// //       ];
      
// //       const totalGan = products.map(pro => pro.price * pro.quantity);
// //       const total = totalGan.reduce((a, c) => a + c, 0);
      
// //       const plus = products.filter(pro => pro.price * pro.quantity > 2000);
// //       const names = plus.map(pro => pro.name);
      
// //       console.log( total); 
// //       console.log( totalGan);
// //       console.log(names);


// //       const product = [
// //         { name: "Laptop", price: 8000, quantity: 3 },
// //         { name: "Laptop", price: 8000, quantity: 3 },
// //         { name: "Phone", price: 5000, quantity: 10 },
// //         { name: "Mouse", price: 15, quantity: 50 },
// //         { name: "Mouse", price: 15, quantity: 50 },
// //         { name: "Keyboard", price: 300, quantity: 40 },
// //         { name: "Monitor", price: 2000, quantity: 5 }
// //       ];

// //       const talamid = [
// //         {namee : "ayma" , cal :10},
// //         { namee :"ta" , cal :11},
// //         {namee :"aybama" , cal :12},
// //         {namee : "ayhama" , cal :15},
// //     ]


// //     const tes = talamid.reduce((a , c)=> a + c.cal , 0);
// //     console.log(tes)

// //     const tess = talamid.reduce((a, c)=>{
// //         return c.cal>12  ? a+1 :a;
// //     }, 0 );

// //     console.log(tess)


// //     const etud = [
// //         { name: "Ayman", cal: 14, level: "2ème" },
// //         { name: "Sara", cal: 9, level: "1ère" },
// //         { name: "Mohammed", cal: 18, level: "2ème" },
// //         { name: "Lina", cal: 13, level: "1ère" },
// //         { name: "Youssef", cal: 7, level: "2ème" },
// //         { name: "Amine", cal: 16, level: "1ère" },
// //       ];
      
// //   const levelsatus = etud.reduce((acc , curr)=>{
// //     if(!acc[curr.level]){
// //         acc[curr.level] = {total : 0 , count : 0}
// //     }
// //     acc[curr.level].total  += curr.cal;
// //     acc[curr.level].count++;
// //     return acc;
// //   }, {})


// //   for(let level in levelsatus){
// //     const stat = levelsatus[level]
// //     stat.avg = stat.total / stat.count
// //   }


// //   console.log(levelsatus);

// //    const successTalamid = etud.filter(e=> e.cal> 10 ).sort((a , b) => b.cal - a.cal).map(e=> e.name)
// //    console.log(successTalamid)
      
// //    const employees = [
// //     { name: "Ali", salary: 3000, department: "IT" },
// //     { name: "Sara", salary: 2500, department: "HR" },
// //     { name: "Omar", salary: 4000, department: "IT" },
// //     { name: "Nadia", salary: 3500, department: "Finance" },
// //     { name: "Khalid", salary: 2800, department: "HR" },
// //     { name: "Laila", salary: 4200, department: "Finance" },
// //   ];
  
// //   const deptStats = employees.reduce((acc, cur) => {
// //     if (!acc[cur.department]) {
// //       acc[cur.department] = { totalSalary: 0, count: 0 };
// //     }
// //     acc[cur.department].totalSalary += cur.salary;
// //     acc[cur.department].count++;
// //     return acc;
// //   }, {});
  

// //   for (let dept in deptStats) {
// //     const stat = deptStats[dept];
// //     stat.avgSalary = stat.totalSalary / stat.count;
// //   }
  
// //   console.log(deptStats);


// //   const productss = [
// //     { name: "Laptop", price: 1200, category: "Electronics" },
// //     { name: "Smartphone", price: 800, category: "Electronics" },
// //     { name: "Shirt", price: 50, category: "Clothing" },
// //     { name: "Jeans", price: 70, category: "Clothing" },
// //     { name: "Coffee Maker", price: 100, category: "Home Appliances" },
// //     { name: "Microwave", price: 150, category: "Home Appliances" },
// //     { name: "Microwave", price: 150, category: "Home Appliances" },
// //   ];


// //   const stats = {}

// //   for(let i = 0 ; i<productss.length ; i++){
// //     const product = productss[i];
// //     const category = product.category

// //     if(!stats[category]){
// //         stats[category]  = {count : 0,  totalPrice : 0}
// //     }


// //     stats[category].count++;
// //     stats[category].totalPrice += product.price;


// //   }

// //   for(const category in stats){
// //     stats[category].avgPrice = stats[category].totalPrice / stats[category].count;
// //   }
// //   console.log(stats)




// // const branches = [
// //   {
// //     name: "Casablanca",
// //     sales: [
// //       { product: "Laptop", price: 8000, quantity: 3 },
// //       { product: "Phone", price: 5000, quantity: 5 },
// //       { product: "Mouse", price: 100, quantity: 20 },
// //     ]
// //   },
// //   {
// //     name: "Rabat",
// //     sales: [
// //       { product: "Laptop", price: 8500, quantity: 2 },
// //       { product: "Phone", price: 4800, quantity: 4 },
// //       { product: "Keyboard", price: 300, quantity: 10 },
// //     ]
// //   },
// //   {
// //     name: "Marrakech",
// //     sales: [
// //       { product: "Laptop", price: 8200, quantity: 1 },
// //       { product: "Phone", price: 5100, quantity: 6 },
// //       { product: "Headset", price: 600, quantity: 5 },
// //     ]
// //   }
// // ];


// // function sam(a , b){

// //   return a + b;

// // }

// // let res = sam(4 , 2);
// // console.log(res)


// // function milti( a , b){
// //   return a * b;
// // }

// // console.log(milti(4 , 5))
 
// // let b = [1, 2, 3];
// // let a = [1, 2, 3]; 
// // let c = b;

// // console.log(a === b);
// // console.log(c === b); 



// // const usr = [
// //   { name: "Tom", contact: { email: "t@t.com" }},
// //   { name: "Bob" }
// // ];


// // const typ = usr.filter(e => e.contact).map(e=>e.name);
// // console.log(typ)



// // const arr = [{v: 1}, {v: -2}, {v: 3}];

// // const positiveValues = arr.reduce((acc, item) => {
// //   if (item.v > 0) {
// //     acc.push(item.v);
// //   }
// //   return acc;
// // }, []);

// // console.log(positiveValues); 



// // const fawakih = ["banan " , "banan" , "pomme" , "poe"] 

// // //  Retourner le double des nombres pairs d’un tableau.
// // const numr = [1, 2, 3, 4, 5, 6];

// // const pair = numr.filter(e=>e % 2 == 0).map(e=>e * 2)
// // console.log(pair)




// // // Récupérer un tableau des `city` depuis une liste d’objets `users`.
// // const nass = [
// //   { name: "Alice", address: { city: "Paris" }},
// //   { name: "Bob", address: { city: "Lyon" }}
// // ]

// // const city = nass.map(e=> e.address).map(e=> e.city)
// // console.log(city)


// // // Transformer un tableau en objet regroupant les éléments par role.



// // const people = [
// //   { name: "Tom", role: "admin" },
// //   { name: "Anna", role: "user" },
// //   { name: "Sam", role: "admin" }
// // ];

// // const rle = people.reduce((a ,c)=> {
// //   if(!a[c.role]){
// //     a[c.role] = []; 
// //   }

// //   a[c.role].push(c);
// //   return a;
// // } , {})

// // console.log(rle)


// // const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// // const disir =  fruits.reduce((a , fruit)=>{

// // a[fruit] = (a[fruit] || 0) + 1 ;

// // return a;


// // } , {})
// // console.log(disir)



// // const obj1 = {a:1};
// // const obj2 = {b:2};
// // const obj3 = {c:3};

// // const totalobjet = { ...obj1 , ...obj2 , ...obj3}

// // console.log(totalobjet);


// // const peoplee = [
// //   { name: "Alice", age: 25 },
// //   { name: "Eve", age: 30 }
// // ];
// //  const eve = peoplee.find(e=> e.name === "Eve") ?.age
// //  console.log(eve)


// //  function sum(a , b , c , d){
// //    return a + b+c +d;
// //  }
// //  console.log(sum(1 ,2  ,3 ,4 ))
 
// //  function zid(...nbr){
// //     return nbr.reduce((a , c)=> a + c , 0)
// //  }
// // console.log(zid(1 ,2  ,3 ,4))


// // const arrr = [1, 2, 4, 5];

// // const sup = arrr.filter(e=> e>3).map(e=> e * 2)

// // console.log(sup)

// // const ar = [1,2,3];

// // const reseve = [];

// // for( let i = ar.length - 1 ; i >= 0 ; i--){
// //    reseve.push(ar[i])
// // }
// // console.log(reseve)


// // const arred = [1,2,3];

// // const red = arred.reduce((a , c)=>{
// //    return [c , ...a]
// // }, [])
// // console.log(red)


// // const emplo = [
// //   { name: "Ali", salary: 3000, department: "IT" },
// //   { name: "Sara", salary: 2500, department: "HR" },
// //   { name: "Omar", salary: 4000, department: "IT" },
// //   { name: "Nadia", salary: 3500, department: "Finance" },
// //   { name: "Khalid", salary: 2800, department: "HR" },
// //   { name: "Laila", salary: 4200, department: "Finance" },
// // ];


// // const max = emplo.reduce((a, c) => {
// //   if (!a[c.department]) {
// //     a[c.department] = c;
// //   } else {
// //     if (c.salary > a[c.department].salary) {
// //       a[c.department] = c; 
// //     }
// //   }
// //   return a;
// // }, {});
// // console.log(max)


// // const students = [
// //   { name: "Ayoub", grade: 15, major: "Math" },
// //   { name: "Salma", grade: 18, major: "Physics" },
// //   { name: "Yassine", grade: 17, major: "Math" },
// //   { name: "Imane", grade: 19, major: "Physics" },
// //   { name: "Karim", grade: 16, major: "Biology" },
// //   { name: "Rania", grade: 17.5, major: "Biology" },
// // ];

// // const grd = students.reduce((a ,c)=>{

// //   if(!a[c.major]){
// //     a[c.major] = c
// //   }else{
// //     if(c.grade > a[c.major].grade){
// //       a[c.major] = c
// //     }
// //   }
// //   return a;

// // } , {})


// // const name = Object.values(grd).map(e=>e.name)
// // console.log(name)
// // console.log(grd)


// // const messages = [
// //   { user: "Ayoub", text: "Salam" },
// //   { user: "Imane", text: "Labas?" },
// //   { user: "Ayoub", text: "Kif dayra?" },
// //   { user: "Karim", text: "Hmd" },
// //   { user: "Imane", text: "Shukran" },
// //   { user: "Ayoub", text: "Mzyan" },
// // ];


// // const nbru = messages.reduce((a , c)=>{
// //   if(!a[c.user]){
// //     a[c.user] = {user : c.user , count : 1};
// //   }
// //   else{
// //     a[c.user].count++;

// //   }
// //  return a;

// // } , {})
// // console.log(nbru)


// // const employes = [
// //   { name: "Ali", salary: 3000, department: "IT" },
// //   { name: "Sara", salary: 2500, department: "HR" },
// //   { name: "Omar", salary: 4000, department: "IT" },
// //   { name: "Nadia", salary: 3500, department: "Finance" },
// //   { name: "Khalid", salary: 2800, department: "HR" },
// //   { name: "Laila", salary: 4200, department: "Finance" },
// // ];


// // const empl = employes.reduce((a , c)=>{
// //   if(!a[c.department]){
// //     a[c.department] = { totaltest : c.salary , count : 1 };

// //   }else{
// //     a[c.department].totaltest += c.salary;
// //     a[c.department].count ++;
// //   }
// //   return a;
// // } , {})
// // console.log(empl)


// // const apprenants = [
// //   {
// //     name: "Aya",
// //     skills: [
// //       { name: "HTML", score: 90 },
// //       { name: "CSS", score: 80 },
// //       { name: "JavaScript", score: 75 },
// //     ],
// //   },
// //   {
// //     name: "Youssef",
// //     skills: [
// //       { name: "HTML", score: 40 },
// //       { name: "CSS", score: 50 },
// //       { name: "JavaScript", score: 35 },
// //     ],
// //   },
// //   {
// //     name: "Salma",
// //     skills: [
// //       { name: "HTML", score: 95 },
// //       { name: "CSS", score: 90 },
// //       { name: "JavaScript", score: 100 },
// //     ],
// //   },
// // ];


// // const apprenantsWithAverage = apprenants.map(apprenant => {
// //   const total = apprenant.skills.reduce((sum, skill) => sum + skill.score, 0);
// //   const average = total / apprenant.skills.length;
// //   return {
// //     name: apprenant.name,
// //     average: parseFloat(average.toFixed(2)),
// //   };
// // });


// // const apprenantsValidés = apprenantsWithAverage.filter(apprenant => apprenant.average >= 60);



// // const bestApprenant = apprenantsWithAverage.reduce((best, current) => {
// //   return current.average > best.average ? current : best;
// // });


// // const finalResult = apprenantsWithAverage.map(apprenant => {
// //   return {
// //     name: apprenant.name,
// //     average: apprenant.average,
// //     status: apprenant.average >= 60 ? "validée" : "non validée",
// //   };
// // });

// // console.log("Apprenants avec moyenne :", apprenantsWithAverage);
// // console.log("Apprenants validés :", apprenantsValidés);
// // console.log("Meilleur apprenant :", bestApprenant);
// // console.log("Résultat final :", finalResult);



// const appr = [
//   {
//     name: "Bilal",
//     presence: [1, 1, 0, 1, 1, 1, 0], 
//   },
//   {
//     name: "Aya",
//     presence: [1, 0, 1, 1, 1, 1, 1],
//   },
//   {
//     name: "Youssef",
//     presence: [0, 0, 1, 0, 1, 0, 1],
//   }
// ];

// // const whitPreso = appr.map(apprenant =>{
// //   const total = apprenant.presence.length;
// //   const pres = apprenant.presence.reduce((a , c)=> a + c , 0);
// //   const proncatage = (pres / total) * 100
// //   return {
// //     name : apprenant.name,
// //     presencePourcentage : parseFloat(proncatage.toFixed(2))
// //   }
  
  

// // })
// // const whitPr = whitPreso.filter(e=> e.presencePourcentage >= 80);

// // const bestPresonse  = whitPreso.reduce((best , cournt)=>{
// //   return cournt.presencePourcentage > best.presencePourcentage ? cournt : best
// // })




// // console.log(whitPreso)
// // console.log(whitPr)
// // console.log(bestPresonse)



// // const std = [
// //   { name: "Sara", grades: [14, 16, 13, 15] },
// //   { name: "Omar", grades: [8, 10, 7, 9] },
// //   { name: "Nadia", grades: [18, 17, 19, 20] },
// // ];




// // const studentsStatus = std.map(student => {
// //   const total = student.grades.reduce((sum, grade) => sum + grade, 0);
// //   const average = total / student.grades.length;

// //   let status = "Rassab"; 
// //   if (average >= 16) status = "Mumtaz"; 
// //   else if (average >= 10) status = "Najah"; 

// //   return {
// //     name: student.name,
// //     average: parseFloat(average.toFixed(2)),
// //     status,
// //   };
// // });

// // const successfulStudents = studentsStatus.filter(s => s.status !== "Rassab");

// // const bestStudent = studentsStatus.reduce((best, current) =>
// //   current.average > best.average ? current : best
// // );

// // console.log( studentsStatus);
// // console.log( successfulStudents);
// // console.log( bestStudent);


// // const works = [
// //   {
// //     name: "Bilal",
// //     workHours: [{lanudi : 8 , mardi : 7 }],
// //   },
// //   {
// //     name: "Aya",
// //     workHours: [9, 8, 8, 9, 8, 4, 0],
// //   },
// //   {
// //     name: "Youssef",
// //     workHours: [6, 7, 5, 6, 5, 0, 0],
// //   },
// // ];

// // const trava = works.map(work=>{
// //   const hourTotal = work.workHours.reduce((a , c)=> a +c , 0);
// //   let status = "3yan"
// //   if(hourTotal >= 40) status =" skhon lktaf"
// //   else if(hourTotal < 40 && hourTotal> 30 ) status = "3ADI"
// //   return {
// //     name : work.name,
// //     hour : hourTotal,
// //     status,
// //   }
// // })

// // const filt = trava.filter(s=> s.status !== "3yan")

// // const thebest = trava.reduce((best , cournt)=>{
// //    return cournt.hour > best.hour ? cournt : best
// // })
// // console.log(trava)
// // console.log(filt)
// // console.log(thebest)


// const workss = [
//   {
//     name: "Bilal",
//     workHours: [
//       { lundi: 8 },
//       { mardi: 9 },
//       { mercredi: 7 },
//       { jeudi: 8 },
//       { vendredi: 6 },
//       { samedi: 0 },
//       { dimanche: 0 }
//     ],
//   },
//   {
//     name: "Aya",
//     workHours: [
//       { lundi: 9 },
//       { mardi: 8 },
//       { mercredi: 8 },
//       { jeudi: 9 },
//       { vendredi: 8 },
//       { samedi: 4 },
//       { dimanche: 0 }
//     ],
//   },
//   {
//     name: "Youssef",
//     workHours: [
//       { lundi: 6 },
//       { mardi: 7 },
//       { mercredi: 5 },
//       { jeudi: 6 },
//       { vendredi: 5 },
//       { samedi: 0 },
//       { dimanche: 0 }
//     ],
//   },
// ];


// const tets = workss.map(work=>{

//   const hoursArray = work.workHours.map(dayObj => Object.values(dayObj)[0]);
//   const total = hoursArray.reduce((a , c)=> a + c , 0)

//   let status = "skhifa"
//   if(total>40) status = "skhon lktfa"
//   else if(total <40 && total> 30) status = "3adi mabikch"

//   return {
//     name : work.name,
//     totals :  total,
//     status
//   }

// })

// const broo = tets.filter(s=> s.status !== "skhifa")

// console.log(tets)
// console.log(broo)



// const users = [
//   {
//     name: "Bilal",
//     dailyHours: [8, 9, 0, 7, 6, 0, 0, 9, 8, 7, 6, 0, 0, 0, 8, 9, 8, 0, 0, 0, 7, 6, 5, 0, 8, 9, 0, 0]
//   },
//   {
//     name: "Aya",
//     dailyHours: [9, 8, 7, 9, 8, 4, 0, 8, 7, 6, 5, 0, 0, 0, 9, 9, 10, 0, 0, 0, 8, 7, 8, 0, 9, 10, 0, 0]
//   },
//   {
//     name: "Youssef",
//     dailyHours: [6, 7, 5, 6, 5, 0, 0, 6, 5, 5, 4, 0, 0, 0, 5, 6, 7, 0, 0, 0, 6, 5, 4, 0, 5, 6, 0, 0]
//   }
// ];


// const working = users.map(user=>{
//   const travai = user.dailyHours.reduce((a , c)=> a+c , 0)
//   const jour = user.dailyHours.filter(e=>e !== 0).length
//   const nbrjour = user.dailyHours.length
//   const moyen = travai / nbrjour

//   let status = "kassol"
//   if(moyen > 5) status = "mojtahid"
//   else if(moyen > 4 && moyen < 5 ) status ="mabihch"
//   return {
//     name : user.name,
//     travai,
//     jour,
//     moyen : parseFloat(moyen.toFixed(2)),
//     status
//   }
// })


// const thebest = working.reduce((best , cournt)=>{
//    return cournt.moyen > best.moyen ? cournt : best
// })
// console.log(working)
// console.log(thebest)



// const students = [
//   {
//     name: "Bilal",
//     grades: {
//       math: 15,
//       physics: 12,
//       history: 8,
//       english: 16,
//       biology: 14
//     }
//   },
//   {
//     name: "Aya",
//     grades: {
//       math: 18,
//       physics: 17,
//       history: 16,
//       english: 15,
//       biology: 19
//     }
//   },
//   {
//     name: "Youssef",
//     grades: {
//       math: 8,
//       physics: 9,
//       history: 7,
//       english: 10,
//       biology: 6
//     }
//   }
// ];


// const nadi = students.map(std=>{
//   const obj = Object.values(std.grades)
//   const red = obj.reduce((a ,c)=> a + c , 0)
//   const nbr = obj.length
//   const generale = red / nbr
 

//   const best = obj.reduce((best , cournt)=>{
//     return cournt > best ? cournt : best
//   })

//   const akfas =obj.filter(e => e < 10).length 
 

// return {
//   name : std.name,
//   red,
//   generale ,
//   best,
//   akfas,

// }
// })
// const layab= nadi.reduce((best , cournt)=>{
//   return cournt.akfas > best.akfas ? cournt : best
// })

// const trtob = nadi.sort((a , b)=> b.generale - a.generale)


// console.log(nadi)
// console.log(layab)
// console.log(trtob)
// const student = [
//   {
//     name: "Bilal",
//     grades: {
//       math: 15,
//       physics: 12,
//       history: 8,
//       english: 16,
//       biology: 14
//     }
//   },
//   {
//     name: "Aya",
//     grades: {
//       math: 18,
//       physics: 17,
//       history: 16,
//       english: 15,
//       biology: 19
//     }
//   },
//   {
//     name: "Youssef",
//     grades: {
//       math: 8,
//       physics: 9,
//       history: 7,
//       english: 10,
//       biology: 6
//     }
//   }
// ];

// const mapess = student.map(std=>{

//   const obj = Object.values(std.grades)
//   const lengh = obj.length
//   const red = obj.reduce((a , c)=> a + c, 0);
//   const myngenr = red / lengh 
 

//   const bestnot = obj.reduce((best , cournt)=>{
//        return cournt > best ? cournt : best
//   })

//   let status = "rasb"
//   if(myngenr >= 16) status = "wa3r"
//   else if(myngenr >10  && myngenr <16) status = "ma3lilkch"
//   const test = Object.keys(std.grades)
  
//   const mjhd = test.reduce((best , cournt)=>{
//     return std.grades[cournt] > std.grades[best]? cournt : best
//   })
//   return {
//      name : std.name,
//      myngenr,
//      bestnot ,
//      status,
//      mjhd,
//   }
  
 

// })

// const thebostone = mapess.reduce((a , c)=>{
//   return c.bestnot > a.bestnot ? c : a
// })

// const kola = student.map(std=>{
//   const kys = Object.keys(std.grades)
//   const hani = kys.reduce((best, cournt)=>{
//       return std.grades[cournt] > std.grades[best]  ? cournt : best
//   })

//   return {
//     name : std.name,
//     bestsubject : hani, 
//     bestgrade : std.grades[hani]
//   }
// })

// console.log(kola)

// const trtib = mapess.sort((a , b)=> b.bestnot - a.bestnot)

// console.log(mapess)
// console.log(trtib)
// console.log(thebostone)




// const students = [
//   {
//     name: "Bilal",
//     grades: {
//       math: [15, 14, 16, 17, 14, 13, 15, 16],
//       english: [16, 15, 14, 17, 18, 19, 15, 14],
//       physics: [12, 13, 14, 13, 12, 11, 10, 14],
//     }
//   },
//   {
//     name: "Aya",
//     grades: {
//       math: [18, 17, 16, 19, 18, 20, 17, 18],
//       english: [15, 14, 16, 15, 14, 13, 15, 16],
//       physics: [17, 18, 16, 15, 17, 18, 17, 16],
//     }
//   },
//   {
//     name: "Youssef",
//     grades: {
//       math: [10, 9, 8, 7, 10, 11, 12, 8],
//       english: [12, 11, 10, 10, 13, 14, 12, 13],
//       physics: [9, 8, 7, 8, 6, 7, 9, 8],
//     }
//   }
// ];


// const generale = students.map(std=>{

// const avrg = {}

// for (let subject in std.grades){
//   const grades = std.grades[subject]
//   const redu = grades.reduce((a , c)=> a + c , 0)/grades.length
//   avrg[subject] = redu

  
// }

// return {
//   name : std.name,
//   avrg
// }
// }).map(avg => {
//   const obj = Object.values(avg.avrg)
//   const hh = obj.reduce((a , c)=> a+ c , 0)/obj.length

//  return {
//   name : avg.name,
//   myengenerale : hh.toFixed(2),

//  }
// })


// console.log(generale)


// const studentS = [
//   {
//     name: "Bilal",
//     subjects: {
//       math: [14, 13, 15, 16, 12, 11, 14, 15],
//       physics: [12, 11, 13, 14, 13, 12, 10, 13],
//       english: [15, 14, 16, 17, 18, 17, 16, 15]
//     }
//   },
//   {
//     name: "zaka",
//     subjects: {
//       math: [17, 16, 18, 19, 18, 17, 16, 17],
//       physics: [16, 15, 17, 16, 15, 16, 15, 14],
//       english: [18, 17, 18, 18, 19, 18, 17, 18]
//     }
//   },
//   {
//     name: "hiba",
//     subjects: {
//       math: [10, 11, 9, 8, 10, 9, 10, 9],
//       physics: [8, 9, 7, 6, 8, 7, 9, 8],
//       english: [11, 12, 10, 11, 13, 12, 11, 12]
//     }
//   }
// ];



// const numbreOfManth = studentS[0].subjects.math.length;

// const months = Array.from({ length: numbreOfManth }, (_, i) => i + 1);

// const studentwith = studentS.map(std => {
//   const manthstat = months.map(month => {
//     const subjects = Object.keys(std.subjects);
//     const grades = subjects.map(sub => {
//       return {
//         subject: sub,
//         grade: std.subjects[sub][month - 1]
//       };
//     });

//     return {
//       month,
//       grades
//     };
//   });

//   return {
//     name: std.name,
//     months: manthstat
//   };
// });

// console.log(JSON.stringify(studentwith, null, 2));

for(let i = 0 ; i<=20 ; i++){
  if(i % 2 ===0){
    console.log(i)
  }
}
console.log("next")
const numbers = [10, 20, 15, 5, 30];

let sum = 0

for(let i = 0 ; i<numbers.length ; i++){
  sum += numbers[i]
  
}
console.log(sum)

console.log("next")


const fruits = ["pomme", "banane", "orange"];

let revers = []
for(let i =fruits.length - 1 ; i >=0 ; i--){
  revers.push(fruits[i])

}
console.log(revers)
console.log("next")

const nbr = [ 1 , 2 , 3]

let nbt = []
for(let i = nbr.length -1 ; i>=0 ; i--){
  nbt.push(nbr[i])
}
console.log(nbt)

console.log("next")

const students = [
  { name: "Bilal", grades: [14, 15, 13, 16] },
  { name: "Aya", grades: [17, 18, 16, 19] },
  { name: "Youssef", grades: [10, 12, 11, 13] },
];
let bro = []

for(let i = 0 ; i<students.length ; i++){
  const grade = students[i].grades
  const red = grade.reduce((a, c)=> a + c , 0)
  const lengh = grade.length
  const moyenne = red / lengh

  bro.push( {name:students[i].name, moyenne})

}
console.log(bro)

let sums = 0 ;
for(let i=1 ; i<=100 ; i++){
  if(i % 2 ===0){
    sums+= i;
  }
  
}

console.log(sums)



const fruitss= ["pomme", "banane", "orange"];
let reve = []
for(let i = fruitss.length - 1; i>=0 ; i--){


  reve.push(fruitss[i])
}
console.log(reve)


const student = [
  { name: "Bilal", grades: [14, 15, 13, 16] },
  { name: "Aya", grades: [17, 18, 16, 19] },
  { name: "Youssef", grades: [10, 12, 11, 13] },
];

let tilmid = []

for(let i = 0 ; i<student.length ; i++){
    const grad = student[i].grades
    const total = grad.reduce((a, c)=> a + c , 0) 
    const lengh = grad.length
    const moy =  total / lengh
    
   tilmid.push({name : student[i].name , moyenne : moy})
} 
tilmid.sort((a , b)=> b.moyenne - a.moyenne)

console.log(tilmid)




let phrase = "Je suis développeur Full Stack";

const ray = phrase.split("").filter(e=> e !== " ").length

console.log(ray)



const arr =  [
  {name : "brahime" , subject : { }},
  {name : "ayoub" , note : 13},
  {name : "anass" , note : 1},
  {name : "salma" , note : 11},
]

const valid= arr.filter(e=> e.note< 10).map(e => e.name)
console.log(valid)





const arrr = [2, 5, 3, 5, 7, 3, 7, 7, 2];


const red = arrr.reduce((a, c)=>{
  a[c] = (a[c] || 0) + 1
  return a
}, {})
const ee =


console.log(red)




const users = [
  {
    name: "Sara",
    purchases: [200, 300, 600],
  },
  {
    name: "Youssef",
    purchases: [150, 50],
  },
  {
    name: "Lina",
    purchases: [400, 700, 200],
  },
  {
    name: "Bilal",
    purchases: [1000, 500, 100],
  },
];


const trt = users.map(user=>{
  const max = user.purchases.reduce((a , c)=>a + c , 0)

  return {
    name : user.name,
    total : max
  }
})
const tid = trt.filter(e=>e.total>1000)
const nb = trt.reduce((best ,courn)=>{
  return courn.total > best.total ? courn: best

})
const sor = trt.sort((a , b )=> b.total - a.total)

console.log(trt)
console.log(tid)
console.log(nb)
console.log(sor)

const user = [
  { name: "Sara", purchases: [1, 2, 3, 2] },
  { name: "Youssef", purchases: [2, 3, 4, 2] },
  { name: "Lina", purchases: [2, 5, 3, 2, 2] },
  { name: "Bilal", purchases: [6, 2, 3] },
];

const flat = user.flatMap(use=>use.purchases)

const hh = flat.reduce((a ,c)=>{
  if(!a[c]){
    a[c] = {broduct : Number(c), count :  0}
  }
  a[c].count++;
  return a;
}, {})


const thebest = Object.values(hh).reduce((best , cournt)=>{
  return cournt.count> best.count ?cournt : best
})

console.log(hh)
console.log(thebest)



// const userss = [
//   { name: "Sara", purchases: ["milk", "bread", "milk", "cheese"] },
//   { name: "Youssef", purchases: ["milk", "eggs", "bread", "bread"] },
//   { name: "Lina", purchases: ["milk", "bread", "cheese", "milk", "eggs"] },
//   { name: "Bilal", purchases: ["cheese", "milk", "bread"] },
// ];

// const fla = userss.flatMap(use=>use.purchases)
// const rebtd = fla.reduce((a ,c)=>{
//   if(!a[c]){
//     a[c] = {product : c ,  count : 0}
//   }
//   a[c].count++
//   return a


// }, {})

// const arry = Object.values(rebtd)
// const top = arry.slice(0 , 3)

// console.log(rebtd)
// console.log(top)

const userss = [
  { name: "Sara", purchases: ["milk", "bread", "milk", "cheese"] },
  { name: "Youssef", purchases: ["milk", "eggs", "bread", "bread"] },
  { name: "Lina", purchases: ["milk", "bread", "cheese", "milk", "eggs"] },
  { name: "Bilal", purchases: ["cheese", "milk", "bread"] }
];

const tet= userss.flatMap(usr=>usr.purchases)
const hry =  [...new Set(tet)]

const test = tet.reduce((a , c)=>{
  if(!a[c]){
    a[c] = {count : 1}
  }
  a[c].count++;
  return a;
}, {})


console.log(hry)
console.log(test)



// const arrs = [{x:1}, {x:1}, {x:1} , {x:1}];

// const hi =arrs.every(e=> e.x === arrs[0].x)

// console.log(hi)

const usee = [
  { name: "Sara", age: 25, isActive: true },
  { name: "Omar", age: 30, isActive: false },
  { name: "Lina", age: 22, isActive: true },
  { name: "Youssef", age: 28, isActive: true },
];

const ht = usee.filter(e=> e.isActive === true).sort((a , b)=> b.age - a.age).map(e=> `${e.name} ${e.age}`)
console.log(ht)




const words = ["chat", "éléphant", "zèbre", "chien", "lion", "papillon"];
const bt = words.sort((a ,b) => a.length -b.length)

console.log(bt)



const names = ["Bilal", "Imane", "Youssef", "Amal", "Zakaria", "Nour", "Omar"];

const bey = (name) => {
  return name
    .toLowerCase()
    .split("")
    .filter((char) => ["e", "i", "u", "o", "a"].includes(char)).length;
};

const sorted = names.sort((a, b) => bey(b) - bey(a));

console.log(sorted);



const  arry = [1, 2, 3, 4, 5];

const modfi = [...arry]
modfi[3] = 0;

const outpot = [...arry, ...modfi]
console.log(outpot)

const userrs = [ 
  { 
    id: 1, 
    name: "Ali", 
    age: 25, 
    isActive: true, 
    email: "ali@mail.com", 
    orders: [10, 20, 30] 
  }, 
  { 
    id: 2, 
    name: "Nora", 
    age: 30, 
    isActive: false, 
    email: "nora@mail.com", 
    orders: [5, 15] 
  }, 
  { 
    id: 3, 
    name: "Omar", 
    age: 19, 
    isActive: true, 
    email: "omar@mail.com", 
    orders: [40, 20, 15] 
  }, 
  { 
    id: 4, 
    name: "Sara", 
    age: 17, 
    isActive: true, 
    email: "sara@mail.com", 
    orders: [] 
  } 
]; 


const tey = userrs.map(e=>{
  return {
    name : e.name,
    age : e.age
  }
})
console.log(tey)

const map = userrs.map(e=> `${e.name} (${e.email})`)
console.log(map)

const filtre = userrs.filter(e=> e.isActive===true ).map(e=>e.name)
console.log(filtre)



const filtre1 = userrs.filter(e=> e.orders.length >0)
console.log(filtre1)


const reduce = userrs.reduce(( total  , user)=> total + user.orders.reduce((a , c)=>a + c , 0) , 0 )
console.log(reduce)


const redd = userrs.reduce((a ,c)=> a + c.orders.length,0)
console.log(redd)

const fine = userrs.find(e=> e.name==="Nora")
console.log(fine)

const finde  = userrs.find(e=> e.isActive === false)
console.log(finde)


const some  = userrs.some(e=> e.age<18)
console.log(some)

const some1 = userrs.some(e=> e.orders.length ===0)
console.log(some1)

const bydd = userrs.every(e=> e.email !== undefined && e.email !== "" )
console.log(bydd)
const hhe = userrs.every(e=> e.isActive === true)
console.log(hhe)


const allOrders = userrs.flatMap(user => user.orders);

console.log(allOrders);

const sales = [
  { product: "Laptop", quantity: 4, price: 800 },
  { product: "Phone", quantity: 10, price: 500 },
  { product: "Laptop", quantity: 2, price: 800 },
  { product: "Headphones", quantity: 15, price: 50 },
  { product: "Phone", quantity: 5, price: 500 },
];

const hi = sales.reduce((a, c)=>{
  if(!a[c.quantity]){
    a[c.quantity] = { count : 0 }
    
  }
 
  a[c.quantity].count++
  return 
} , {})

console.log(hi)