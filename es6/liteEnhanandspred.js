//1
// function user(name, age, work){
//     return {
//         name: name,  // here parameter and value both are same
//         age:age,       // Enhance literal in which the key value are same 
//         work:work,
//     };
// }

//2
/*function user(name, age, work){
         return {
             name,  
             age,       
             work,
                         // METHODS ARE FUNC THAT ARE AVAILABLE INSIDE A OBJ
             intro:() =>{
                console.log(`My name is ${name} & I'm ${age} & I'm ${work}`);
                
             }             // CAN USE
         };
     }
 const jonty = user("Jonty", 22,'Developer');
console.log(jonty.intro());*/

/*var a = 1;
var b = 2;
var c = 3;
  // using const it is also working
var obj = {
    a:a,
    b:b,
    c:c,
};

console.log(obj);*/

/*var lib = {
    sum:function(a,b){
        return a+b;
    },
    mult: function(a,b){
        return a*b;
    },
};

console.log(lib.sum(2,3));
console.log(lib.mult(2,3));*/   // converting into ES6

/*const  lib = {
    sum:(a,b)=> a+b,
    
    mult:(a,b)=> a*b,
    
};

console.log(lib.sum(2,3));
console.log(lib.mult(2,3));*/

// literal Enhancements

/*function getPerson(name, age,height){
    return{name,age,height};
}*/

// function creating name and mult with 2 parameters and multiply value;
/*function mul(a,b=1){
return a*b
}

console.log(mul(2,2));*/

/*function give4(a,b,c,d){
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

const  color = ["red", "green","blue","orange"]; // here spread operator spread it into 4 argument to color array
give4(...color);*/


