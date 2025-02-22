/*function info(){
    return `My name is Jonty Suthar & I'm 22 years old.`
}

console.log(`${info()}`);*/

// shadowing in js

/*var x = 10;
function test(){
    var x = 20;
    console.log(x);
}
test();

console.log(x);*/

//var does not respect block scope, shadowing inside {} might not work as expected
/*var x = 10;  // var not respect block scope boundary

if(true){
    var x =20;
    console.log(x);  
}
console.log(x);*/

/*let y =30;

if(true){
    let y=40;    // same with const also
    console.log(y); 
}
console.log(y);*/

//Illegal shadowing(Error)

/*let y = 30;

if (true) {
  let y = 40; // Shadows the outer `y`
  console.log(y); // Output: 40
}

console.log(y);*/ // Output: 30 (Outer y is NOT changed)

// Real World Example with var

/*var user = "Admin";

function checkUser(){
    if(true){
        var user = "Guest";
        console.log(user);
        
    }
    console.log(user);
}
checkUser();
console.log(user);*/

var user = "Admin";

function checkUser(){
    if(true){
        var user = "Guest";
        console.log(user);
    }
    console.log(user);
    
}
checkUser();
console.log(user);



