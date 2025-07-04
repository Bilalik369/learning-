import { count } from "console";

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
      
   const employees = [
    { name: "Ali", salary: 3000, department: "IT" },
    { name: "Sara", salary: 2500, department: "HR" },
    { name: "Omar", salary: 4000, department: "IT" },
    { name: "Nadia", salary: 3500, department: "Finance" },
    { name: "Khalid", salary: 2800, department: "HR" },
    { name: "Laila", salary: 4200, department: "Finance" },
  ];
  
  const deptStats = employees.reduce((acc, cur) => {
    if (!acc[cur.department]) {
      acc[cur.department] = { totalSalary: 0, count: 0 };
    }
    acc[cur.department].totalSalary += cur.salary;
    acc[cur.department].count++;
    return acc;
  }, {});
  

  for (let dept in deptStats) {
    const stat = deptStats[dept];
    stat.avgSalary = stat.totalSalary / stat.count;
  }
  
  console.log(deptStats);


  const productss = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Smartphone", price: 800, category: "Electronics" },
    { name: "Shirt", price: 50, category: "Clothing" },
    { name: "Jeans", price: 70, category: "Clothing" },
    { name: "Coffee Maker", price: 100, category: "Home Appliances" },
    { name: "Microwave", price: 150, category: "Home Appliances" },
    { name: "Microwave", price: 150, category: "Home Appliances" },
  ];


  const stats = {}

  for(let i = 0 ; i<productss.length ; i++){
    const product = productss[i];
    const category = product.category

    if(!stats[category]){
        stats[category]  = {count : 0,  totalPrice : 0}
    }


    stats[category].count++;
    stats[category].totalPrice += product.price;


  }

  for(const category in stats){
    stats[category].avgPrice = stats[category].totalPrice / stats[category].count;
  }
  console.log(stats)

<<<<<<< HEAD
  
=======



const branches = [
  {
    name: "Casablanca",
    sales: [
      { product: "Laptop", price: 8000, quantity: 3 },
      { product: "Phone", price: 5000, quantity: 5 },
      { product: "Mouse", price: 100, quantity: 20 },
    ]
  },
  {
    name: "Rabat",
    sales: [
      { product: "Laptop", price: 8500, quantity: 2 },
      { product: "Phone", price: 4800, quantity: 4 },
      { product: "Keyboard", price: 300, quantity: 10 },
    ]
  },
  {
    name: "Marrakech",
    sales: [
      { product: "Laptop", price: 8200, quantity: 1 },
      { product: "Phone", price: 5100, quantity: 6 },
      { product: "Headset", price: 600, quantity: 5 },
    ]
  }
];


function sam(a , b){

  return a + b;

}

let res = sam(4 , 2);
console.log(res)


function milti( a , b){
  return a * b;
}

console.log(milti(4 , 5))
 
let b = [1, 2, 3];
let a = [1, 2, 3]; 
let c = b;

console.log(a === b);
console.log(c === b); 



const usr = [
  { name: "Tom", contact: { email: "t@t.com" }},
  { name: "Bob" }
];


const typ = usr.filter(e => e.contact).map(e=>e.name);
console.log(typ)



const arr = [{v: 1}, {v: -2}, {v: 3}];

const positiveValues = arr.reduce((acc, item) => {
  if (item.v > 0) {
    acc.push(item.v);
  }
  return acc;
}, []);

console.log(positiveValues); 



const fawakih = ["banan " , "banan" , "pomme" , "poe"] 

//  Retourner le double des nombres pairs d’un tableau.
const numr = [1, 2, 3, 4, 5, 6];

const pair = numr.filter(e=>e % 2 == 0).map(e=>e * 2)
console.log(pair)




// Récupérer un tableau des `city` depuis une liste d’objets `users`.
const nass = [
  { name: "Alice", address: { city: "Paris" }},
  { name: "Bob", address: { city: "Lyon" }}
]

const city = nass.map(e=> e.address).map(e=> e.city)
console.log(city)


// Transformer un tableau en objet regroupant les éléments par role.



const people = [
  { name: "Tom", role: "admin" },
  { name: "Anna", role: "user" },
  { name: "Sam", role: "admin" }
];

const rle = people.reduce((a ,c)=> {
  if(!a[c.role]){
    a[c.role] = []; 
  }

  a[c.role].push(c);
  return a;
} , {})

console.log(rle)


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const disir =  fruits.reduce((a , fruit)=>{

a[fruit] = (a[fruit] || 0) + 1 ;

return a;


} , {})
console.log(disir)



const obj1 = {a:1};
const obj2 = {b:2};
const obj3 = {c:3};

const totalobjet = { ...obj1 , ...obj2 , ...obj3}

console.log(totalobjet);


const peoplee = [
  { name: "Alice", age: 25 },
  { name: "Eve", age: 30 }
];
 const eve = peoplee.find(e=> e.name === "Eve") ?.age
 console.log(eve)


 function sum(a , b , c , d){
   return a + b+c +d;
 }
 console.log(sum(1 ,2  ,3 ,4 ))
 
 function zid(...nbr){
    return nbr.reduce((a , c)=> a + c , 0)
 }
console.log(zid(1 ,2  ,3 ,4))


const arrr = [1, 2, 4, 5];

const sup = arrr.filter(e=> e>3).map(e=> e * 2)

console.log(sup)

const ar = [1,2,3];

const reseve = [];

for( let i = ar.length - 1 ; i >= 0 ; i--){
   reseve.push(ar[i])
}
console.log(reseve)


const arred = [1,2,3];

const red = arred.reduce((a , c)=>{
   return [c , ...a]
}, [])
console.log(red)


>>>>>>> 062d788 (qulque)
