/*function x(){
    console.log("Jonty");
}

function y(x){
    x();
}
y()*/

const radius = [3,1,2,4];

const area = function(radius){
    return Math.PI * radius * radius;
}

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function(radius){
    return 2 * radius;
}

const calculate = function(r, logic){
    const output = [];
    for(let i=0; i<r.length; i++){
        output.push(logic(r[i]));
    }
    return output;
};

console.log(calculate(radius , area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter))


/*const calculateArea = function(radius){
    const output = [];
    for(let i =0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output;
}*/
//console.log(calculateArea(radius));

console.log(radius.map(area));

function scope(){
    var a = 20;
}

console.log(a);


