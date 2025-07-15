const users = [
  {
    name: "Bilal",
    dailyHours: [8, 9, 0, 7, 6, 0, 0, 9, 8, 7, 6, 0, 0, 0, 8, 9, 8, 0, 0, 0, 7, 6, 5, 0, 8, 9, 0, 0]
  },
  {
    name: "Aya",
    dailyHours: [9, 8, 7, 9, 8, 4, 0, 8, 7, 6, 5, 0, 0, 0, 9, 9, 10, 0, 0, 0, 8, 7, 8, 0, 9, 10, 0, 0]
  },
  {
    name: "Youssef",
    dailyHours: [6, 7, 5, 6, 5, 0, 0, 6, 5, 5, 4, 0, 0, 0, 5, 6, 7, 0, 0, 0, 6, 5, 4, 0, 5, 6, 0, 0]
  }
];

const test = users.map(std=>{
  const red = std.dailyHours.reduce((acc , hour)=>{
     return acc + hour 
  } ,0)
 return {
  name : std.name,
  red
 }
}).sort((a,b)=> b.red - a.red).map(user => {
console.log(`${user.name}, hours: ${user.name}, status: ${ user.red >= 140 ? "exellent" : user.red >= 100 ? "good" : "bad" }`)

user.status = user.red >= 140 ? "exellent" : user.red >= 100 ? "good" : "bad" 
return user
})

console.log(test);





