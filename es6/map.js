// map filter filter function
/*const numbers = [65,44,12,4]

 myFunc =((num)=>{
    return num *10
});

const newArr = numbers.map(myFunc);
console.log(newArr);*/


//FILTER
/*const songs = [
    { name: "Shape of You", singer: "Ed Sheeran", duration: 3.53 },
    { name: "Blinding Lights", singer: "The Weeknd", duration: 3.20 },
    { name: "Rolling in the Deep", singer: "Adele", duration: 3.48 },
    { name: "Uptown Funk", singer: "Bruno Mars", duration: 4.30 },
    { name: "Someone Like You", singer: "Adele", duration: 4.45 },
  ];

  console.log(songs.filter((song) => song.duration>4));*/

/*const ages = [32,33,16,40,18,15,12,50];

console.log(ages.filter((age)=> age >= 18));*/

//Find()

/*consoleconst ages =[3,10,5,7,15,19,21,24,25];

console.log(ages.find((age)=>age>18));*/

const users = [
  { firstname: "John", lastname: "Doe", age: 26 },
  { firstname: "Jane", lastname: "Smith", age: 75 },
  { firstname: "Mike", lastname: "Johnson", age: 50 },
  { firstname: "Emily", lastname: "Davis", age: 26 },
];

/*const output = users.reduce((acc,curr)=>{
  if(acc[curr.age]){
   acc[curr.age] = ++acc[curr.age];
  }
  else{
    acc[curr.age] = 1
  }
  return acc;
},{})

console.log(output);*/

//const output = users.filter((x)=> x.firstname && x.age<30)
const output = users.filter((x)=> x.age<30)
.map((x)=> x.firstname);
console.log(output);
