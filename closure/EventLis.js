/*document.getElementById("clickMe")
.addEventListener("click",function(){})*/

// garbage collection & removeEventListeners

/* SET TIMEOUT IN JS WHICH TOOK MORE TIME WHEN BLOCK THE CODE */

console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
},5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate +10000){
endDate = new Date().getTime();
}
console.log("While loop expires");





