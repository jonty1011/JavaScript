// Question 1
/*function showData(){
    console.log("variable name is ",name);
    console.log("variable name is ",age);
    var name = "Jonty";
    let age = 255;
}      // output undefined and reference error;
showData(); */ 

// Question 2
/*for(var i = 0; i <4; i++) {
    setTimeout(()=> console.log(i),5)
}

for(let i =0; i<4; i++) {
    setTimeout(()=> console.log(i),5)
}*/

//Question 3
   /*const income ={
    skills:108,
    monthly(){
    return this.skills * 108;  // this will give multiple of num because this refers to the object
    },// because we call this method in the context of this 
    yearly:()=> 888 * this.skills,  
   };// in yearly we used the arrow function and the scope of this is of parent

   console.log(income.monthly());
   console.log(income.yearly());*/
   
// Question 4
/*console.log(+true);  // 1
console.log(!"JavaScript");*/ // false 

// Question 5
/*const code = {
    type:"web",
};

const reactJs = {
    name:"js",
    web:true,
};*/

 //reactJs[code.type]; // key variable me ho
//  reactJs[reactJs["type"]]

//Question 6
/*let a ={
    greeting:"Hi"
};
let z = a;
z.greeting = "Bye";  // output is bye becoz object passes references not a value;
console.log(a.greeting);*/

// Question 7
/*let a = 108;
let b = new Number(108);
let c = 108;
console.log(a==b); // true
console.log(a===b); // false
console.log(b===c); // false*/

// Question 8
/*let message;
mesage = {data:[24]}; // get output data array
console.log(mesage); */ // becoz js declare undeclared variable and store them in window object; 

// Question 9
/*function showModal(){
    console.log(showModal.timeout);
} 
showModal();
showModal.timeout = 200;
showModal.timeout = 100;
showModal();*/

//Question 10 
/*function getSummary(one,two,three){
    console.log(one);
    console.log(two);
    console.log(three);
}
const fName = "Jonty";
const age = 22;

getSummary`${fName} age is ${age}`*/

// Question 11
 /*function getAge(){
    "use strict";
     salary = 8212;
    console.log(salary);
 }
 getAge();*/

 /*const obj = {1:"a",2:"b",3:"c"};
 const set = new Set([1,2,3,4,5]);
 console.log(obj.hasOwnProperty("1")); // objects key value in string so true
 console.log(obj.hasOwnProperty(1));  // compare with == to

 console.log(set.has("1"));
 console.log(set.has(1));*/ 

 //Question 12 
 /*const obj = {a:"1",b:"2",a:"3"};
 console.log(obj);*/

 //Question 13
 /*for(let i=1; i<5; i++) {
    if(i===3) continue;
    console.log(i);  // 1,2,4
  }*/

// Question 14 
/*const a = {};
const b = {key:"b"};
const c = {key:"c"};
a[b] = 222;
a[c] = 999;
console.log(a[b ]);*/

//Question 15 

/*const lang = {name:"ReactJS"}
function getLib(ver){
    return `${this.name} version ${ver}`
}
console.log(getLib.call(lang, 18));
console.log(getLib.bind(lang, 18));*/

/*function sayHi(){
    return (()=> 0)();
}
console.log(typeof sayHi());*/

 /*const  numbers = [1,2,3];
 numbers[10] = 11;
 console.log(numbers);*/

// Question 17 
/*(()=> {
    let x,y;
    try {
        throw new Error();
    }catch(x){
        (x=1),(y=2)
        console.log(x);
    }
    console.log(x);
    console.log(y); 
})();*/
     
// Question 18
/*function getMessage(){
    throw 'Hello world!';
}
function sayHello(){
    try {
      const data = getMessage();
      console.log('worked!',data);
      
    }catch(e){
        console.log('an error:',e);
        
    }
}
sayHello();*/

// Question 19
/*console.log(parseInt('10+2'));
console.log(parseInt('G7FM'));*/

// Question 20
/*[1,2,3].map(num =>{
    if(num > 0) return;

    return num * 2;
}); */

function getInfo(member, year){
    member.name = "FrontendDev" // getinfo func member ko modify krdega
    year = "2002"
}

/*const person = {name:'Jonty'}; // obj is reference type data type so it will modify it 
const birthYear = "2025";

getInfo(person, birthYear);
console.log(person, birthYear);*/

/*function Hero(){
    this.make = 'Bhagat Singh';
    return {make : 'Vivekanand'};
}

const myHero  = new Hero();
console.log(myHero.make);*/

/*(()=> {
let x = (y=10);
/* actually this code is like this 
   y = 10;
   let x = 10;
*/
// })();

/*console.log(typeof x);  // undefined 
console.log(typeof y);  // number */

/* function addItem(item, list){
    return list.push(item);
}// push always returns a value not an array
const result = addItem("😸",['🐕']);

console.log(result); */ 

/*const name = 'Mr.J';
age = 20;

console.log(delete name);
// age is undeclared so all this variables added to window scope and it is removing age key from window object
console.log(delete age); */

//Question -- Direct return krenge toh pending state me hoga...
/*async function getData(){
    return await Promise.resolve("Jonty")
}

const data = getData();
data.then(data => console.log(data));*/







 
 
