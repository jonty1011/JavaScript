/*const strNums = ['one', 'two', 'three']
const moreStrNums = ['four', 'five', 'six']
console.log([...strNums,...moreStrNums]);*/

//const colors = ["red", "green", "blue", "yellow","orange"]
 // when we are destructuring we will write the name of that variable
 /*const [color1, color2, color3] = colors;
console.log(color1, color2, color3); /* In array des order matters but not name and 
                                        In object des the order does not but name matters
                                         */

/*const student = {name: 'Student' , rank:1, rollno : 10};
//const{jonty} = student;  // this is what name matters not order
const{rollno, rank} = student;
console.log(rollno, rank);*/
                                   
// object destructuring and res operators
/*let {a,b, ...rest} = {a:100, b:200 , c:300, d:400, e:500}; 
console.log(a,b,rest);*/

/*const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    country : 'United States',
};

const  {name:personName,age:personAge, city:personCountry} = person
console.log(personName,personAge,personCountry);*/

/*const person = {
    name:"Ram",
    age:26,
    country:"India",
}
function getinfo({name,age,country}){
    console.log(`Name:${name}`);
    console.log(`age:${age}`);
    console.log(`country:${country}`); 
}

getinfo(person);*/
// nested destructuring;
/*const songs = [
    { name: "Shape of You", singer: "Ed Sheeran", duration: "3:53" },
    { name: "Blinding Lights", singer: "The Weeknd", duration: "3:20" },
    { name: "Rolling in the Deep", singer: "Adele", duration: "3:48" },
    { name: "Uptown Funk", singer: "Bruno Mars", duration: "4:30" },
    { name: "Someone Like You", singer: "Adele", duration: "4:45" },
  ];

  const [,,,,{singer}] = songs;
  console.log(singer);*/
  
  //for in 
  /*const object = {a:1,b:2,c:3};

  for(let key in object){
    console.log(`${key}: ${object[key]}`);

  }*/

    //for off
    /*const array1 =["a","b","c"];
    for(let value of array1){
        console.log(value);
    }*/

        /*const colors = ["teal","blue","red","green"];
        
        colors.forEach((color)=> {
            console.log(color);
            
        })*/

   /* const words = ["hello","bird","table","football","code","write"]

  const capWords =   words.forEach((word,index,arr)=> {
        arr[index] = word[0].toUpperCase() + word.substring(1);
    });

    console.log(words);*/
    
    /*const numbers = [1,2,3,4,5]
    let sum =0;

    function adder(number){
        sum+=number;
    }S
    numbers.forEach(adder);
    console.log(sum);*/

    