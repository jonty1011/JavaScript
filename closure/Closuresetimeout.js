//Question
/*function x(){
    var i =1;
    // this setTimeout function forms a closure;
    setTimeout(function(){  // this function takes reference to i and form a closure;
        console.log(i);
    },1000);
}
x();*/

/*function x() {
    for(var i=1;i<=5;i++){
        setTimeout(function(){
            console.log([i]);
        },i*3000)
    }
    console.log('I am Jonty');
    
}
x();*/

// when this function forms a closure

/*function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    console.log("Jonty"); 
}*/

// To handle with var we have to provide new copy of var to each and everytime when the loop iterate so we enclose inside a function

/*function x() {
    for(var i =1; i<=5; i++){
        function close(x){ // we wrap setTimeout inside this close function somehow we have to supply the new copy of the i; 
          setTimeout(function (){  // we will create a function() and enclosed this setTimeout into a function 
            console.log(x);
          },i*1000)  
        }
        close(i);  // to supply the new copy of the i we call this function with i
        // every time we call this close() function with i its create a new copy of this;
    }
}
x();*/