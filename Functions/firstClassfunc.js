// function statements is also known as function Declaration

function a() {
    console.log("a called");
}
// function expressions 
/*var b = function() {
    console.log("b called");
}*/

// function named expressions when we provide a name to the anonymous funtion in expression

/*var c = function d() {   
    console.log(d);
}*/

// parameters and arguments 
 var b = function(params) {
    console.log(params); // now we will get the annonymous function inside it;
    
 }

 // We can also pass a function inside a another function
 /*var b = function(params1){  // this is initialzation func as a value 
    console.log(params1); 
 }
 function xyz() {
 }*/

 // we can also return a function also
 var b = function(params) {
    return function() {
    };
 }
 function xyz() {

 };
a();
/*b(function() {
    });*/
//b(xyz);     // here we are passing a function as an argument into afunction 
console.log(b(xyz));  // here we are returning a function 
/* THIS IS WHAT IS A FIRST CLASS FUNCTION IS  */


