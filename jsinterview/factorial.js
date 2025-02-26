/*function calculatefact(x){
let fact = 1;
for(let i=1; i<=x;i++){
    fact *= i;
}
return fact;
}
console.log(calculatefact(5));*/

// by recursion
/*function calculatefact(x){
    if(x ===0 || x===1){
        return 1;
    }
    return x * calculatefact(x -1);
}
console.log(calculatefact(5));*/

/*function leapyear(year){
 return year %4 ===0 ? true : false;
}
console.log(leapyear(2004));
console.log(leapyear(2023));*/

// break the number into string

/*function sumofDigit(x){
let digitinString = x.toString().split('')
console.log(digitinString);

let sumDigit = digitinString.reduce((sum , y)=> sum +parseInt(y),0)
return sumDigit
}

console.log(sumofDigit(12));*/

/*function abc(){
    console.log("Hello");
}
const value = new abc();
console.log(value);*/

/*function abc(name){
    this.name = name;
}
const value = new abc("Jonty");
console.log(value);*/

/*function func1(){
    return 2
}

function func2() {
    return 4
}

let a = (func1() , func2())
console.log(a);*/

/*console.log(true === '');
console.log('1' == 1);*/

