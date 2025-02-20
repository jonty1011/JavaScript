//  BASICS QUESTONS;
// console.log("Jonty",",","Get job as soon as possible"); //Question -1;
/* Display the current Year */
// console.log(45*2-10);  
/*const newdate = new Date();
console.log(newdate.getFullYear());
console.log(newdate.getMonth()+1);*/

/*create two variables for first first and last name and concatenate them and log */
/*let firstName = "Jonty";
let lastName = "Suthar";
console.log(firstName + " " + lastName);*/

/* Track the value of a variable by logging it before and after updating */
/*var a =21;
console.log(a);
a= 45;
console.log(a);*/

/*Use console.error to stimulate the error*/
// console.error("Something went wrong");

/* Log the square of the number 12 to the console */
// console.log(12*12);

/* Print the type of a variable holding the value true */
// var a = true;
/*var a = 10;
console.log(typeof a);*/

/*9 creating a variable who is holding your age and log whether it's greater than 18 */
/*let age = 23;
if(age > 18){
    console.log("Age is Greater than 18 ");
    console.log(true);  
}*/

/*10 Log the result of 100/0*/
// console.log(100/0);

// VARIABLES AND DATATYPES (QUESTIONS)
/* 11 variable with let and log it's result */
/*let a = 12;
console.log(a);*/

/* 12 create a constant to store the value of PI and log it */
/*const pi = Math.PI;
console.log(pi);*/

/* Reassigning a value to a variable declared with let and log the result */
/*let a = 5;
a = 6;
console.log(a);*/

/* 14 check the type of null and log it */
/*let b = null;
console.log(typeof b);*/

/* 15 create a variable with a number as a string and log its type */
/*let a = "25";
console.log(typeof a);*/

/*16 use Typeof check the type of a boolean variables */
/* let ab = true;
console.log(typeof ab);*/

/* 18 Declare a variable wwithout assigning a value log its type */
/*var a ;
console.log(typeof a);*/

/* Question 21 --> for(var i =1; i<51; i++){
    console.log(i);
}*/

/* Question 22 ---> while loop sum the number */
/*let a = 1;
let sum = 0;
while(a<11){
    sum += a;
    a++;
}
 console.log(sum);*/
 
 /* Question 23 */
 /*let str = "javascript"
 for(let word of str){
     console.log(word);
 }/*

/* Question 24 */
/*for(var i =0; i<21;i++){
    if(i%2 !== 0){
        console.log(i);   
    }
}*/

/* Question 25 */
/*var qa = 5;
do{
console.log(qa);
qa--;
}while(qa>0);*/

/*Question 26*/
/*let fact = 1;
for(var i=5; i>0; i--){
  fact = fact * i;
}
console.log(fact);*/

/* Question 27 */
/*var hold = 1;
for(var i =0;i<4;i++){
    var str = "";
    for(var j=1; j<4; j++){
     str += `${hold}`;
     hold++;
    }
    console.log(str); 
}*/

/* Question 28*/
/*var arr = [1,2,3,4,5];
for(var i =0; i<Math.floor(arr.length/2) ; i++){
    var temp = arr[i];
    arr[i] = arr[arr.length -1-i];
    arr[arr.length -1-i] = temp;
}
console.log(arr);*/

/*Question 29  --> Write a while loop that logs number from 1 to 100 divisible by 5*/
/*let num = 1;
while(num<101){
    if(num%5 === 0){console.log(num);} 
    num++;
}*/

/*Question 30 */
/*var obj = {
    name: "Jonty",
    email: "j@gmail.com",
    age:23
}
for(let k in obj){
    console.log(k,obj[k]);
}*/

// Arrays
/* Question 31 */
/*var a =["a","b","c","d","e","f"];
a.forEach(function(value){
    console.log(value);
})*/

/* Question 33 && 34 && 35 && 36 && 37*/
// UNSHIFT;
/*var arr = [1,2,3,4,5];
arr.unshift(0);
arr.unshift(10);
console.log(arr);*/
// POP
/*var arr = [1,2,3,4,5]
arr.pop();
arr.pop();
console.log(arr);*/
//SLICE
/*var arr = [1,2,3,4,5];
console.log(arr.slice(0,3));*/
// INDEXOF
/*var arr = [1,2,3,4,5];
var a = arr.indexOf(4);
console.log(a);*/
// .INCLUDES()
/*var arr = [1,2,3,4,5];
console.log(arr.includes(2));*/

/*var arr1 =[1,2,3];
var arr2 = [4,5,6];
// console.log(...arr1, ...arr2);
console.log(arr1.concat(arr2));*/

/*var arr = [5,2,9,1];
// console.log( arr.sort());*/

// By Bubble sort 
/*var arr = [11,24,4,53,34,5,3]
for(var i =0; i<arr.length-1; i++){
    for(var j =0; j<arr.length-i-1; j++){
        if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);*/

/*Question 40 */
/*var arr = [11,24,36,4,5];
    BY SPREAD OPERATOR
console.log(...arr);*/

/*var arr = [11,24,36,4,5];
var arr2 =[];

arr.forEach(function(value){
    arr2.push(value);
});
console.log(arr,arr2);*/

/* Question 41 */
/*function evod(value){
    if(value%2 === 0) return "even";
    else return "odd";
}
console.log(evod(14));*/

/*Question 42 Area of circle*/
/*function area(r){
    return Math.round(Math.PI * r *r);
}
console.log(area(12));*/

/*Question 43 */
/*function sumofarr(arr){
    var sum = 0;
    arr.forEach(function(v){
        sum = sum + v;
    })
    return sum;
}
console.log(sumofarr([1,2,3,4,5,6,7,8,9,10]));*/

/* Question 44 */
/*function checker(str, char){
    return str.toLowerCase().startsWith(char.toLowerCase());
}
console.log(checker("Jonty", 'j'));*/

/* Function 45  */
/*function max(a,b){
    /*if(a>b) return a;
    else if(a<b) return b;
    else return "equals";
    return Math.max(a,b);
    
}
console.log(max(1,2));*/

/* Question 47 ---> write a function that accept a string and return it reverse*/
/*function reversestr(str){
    return  str.split('').reverse().join('');
}
console.log(reversestr("jonty"));*/

/* Question 48 Create a function to find the largest number in an array */
/*function  findlargest(arr){
    return Math.max(...arr)
}
console.log(findlargest([1,2,3,4]));*/

// ALTERNATE  WAY TO DO THIS
/*function findlargest(arr){
    var max = 0;
    for(var i =1; i<arr.length; i++){
        if(arr[i] > arr[max]){
            max = i;
        }
    }
    return arr[max];
}
console.log(findlargest([1,2,3,4,5,6,7,8]));*/

/*Question 49 write a function that converts a string to kebab-case  */
/*function kebab(str){
    // return str.split(' ').join('-');
    return str.replaceAll(" ","-")
}
console.log(kebab("Hey kaise hov"));*/



















