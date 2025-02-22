//basics examples
/*function outer(){
    const outervariable = "outervariable";
    function inner(){
        console.log("outervariable");  
    };
    inner();
}

outer();*/

//Lexical scope only works one way
/*function outer(){
    let outerVar = "outer";
    function inner(){
        let innerVar = "inner";
        console.log(outerVar);
    }
    inner();
    console.log(innerVar); // here we will get error becoz we cannot access inner variable outside the functional scope
}
outer();*/

/*function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
    y();   // this how we are calling function and accessing the value of outer scope this is all is cloure 
    // function which is bundled with its lexical scope

}
x();*/

// instead of calling we can also return a function also
/*function x(){
    var a = 10;
    function y(){
        console.log(a);
        var a = 100;  // it will give 100 bcoz func y is with its lexical scope not referencing the value
    }
    return y; // here we are returning function
}

var z = x(); // here we are calling the function and storing the returned function in z
//var z = x; // here if we are not doing ()then x function will called in z
console.log(z);
z(); */

/*function z() {
    var b=900;
    function x() {
        var a = 10;
        function y() {
            console.log(a,b); // here we are accessing its parent scope and also parent's parent's scope also
        }
        y(); 
        }
        x();
}
z();*/

//print 1-5 after every one second

function x() {for(let i=1; i<=5;i++){
setTimeout(()=>{
    console.log(i);
},i*1000)
}
}
x();

