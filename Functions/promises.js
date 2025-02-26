/*const GITHUB_API = "https://api.github.com/users";
const users = fetch(GITHUB_API);
console.log(users);

// we can add callbacks attaches to this function

users.then(function(data){
    console.log(data);
    
} )*/

/*const cart = ["shoes", "pants","kurta"];

const promise = createOrder(cart); // this will returns a promise to us;
promise.then(function(){  // consumer part
    proceedToPayment(orderId);
});

//producer part we will write a createOrder
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){

    });
}*/

/*let promise = new Promise((resolve ,reject)=>{
    console.log("I am a promise");
    
})*/

let promise = new Promise((resolve, reject)=>{
    console.log ("I am a promise");
   
    resolve(56);
});
console.log("Hello one");
setTimeout(()=>{
    console.log("Hello Two in 2 second");
},2000)

console.log("My name is "+ "Hello Three");
console.log(promise);

