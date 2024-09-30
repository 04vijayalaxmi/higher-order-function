/*function goodStart(){
    document.write("Apple is Red in Color" +"<br>");
    
}

goodStart();
goodStart(); 
goodStart();
goodStart();
goodStart();
goodStart();
goodStart();
goodStart();*/

/* Scopes*/
//Global Scope
//Function Scope
//Block Scope

/*var Apple="red";
let orange="Yellow";
const banana="green";
function fruit(){
    var x=100;
    let y=200;
    const  z="mahesh";
    document.write(x +"<br>");
    document.write(y +"<br>");
    document.write(z);
}
fruit()
document.write(x);*/
//function Expression
var b=function apple(){
    document.write("red in colour" + "<br>");
}
b();

//Anonymous Function
var b=function (){
    document.write("green in colour" + "<br>");
}
b();

// Function with parameters and Return Value
function score(a,b){
    return a+b;
}
document.write(score(10,20) +"<br>");
document.write(score(125,200) +"<br>");
document.write(score(100,270) +"<br>");
document.write(score(160,980) +"<br>");
document.write(score(130,204) +"<br>");

// examples of function

function game(x,y){
    return document.write("I Like" +  x  + "and" + y + "<br> ");
}
game("chess", "football");
game("caram", "chess");

// guest
// var userName= prompt("please enter your Name");


//function guest( myFriend){
  //  return document.write("Hello welcome " +  myFriend + "<br>")
//}
//guest(userName)
//Block Scope

function  sports() {
    let cricket ="virat";
    document.write( cricket +"<br>");
}
sports()


//Methods
//1.Array Methods....are 1. push(), 2. Pop(),3.Shift(), 4.Unshift(), 5.Join(),6.Slice, 7.splice, 8.indexOf()
//2.String Method
//3.Object Method

//let collections=["akash", 55,true,{name:"pratham"}]
//PushManager()=("Adds one or more elements to the the end of the array and retuns the lenght of the array");

let xy =["cricket", "football"];
xy.push("scoker", 88);
document.write(xy+ "<br>");
document.write(xy.length +"<br>");


//pop() method

let books=["Maths","physics", "chemistry"];
document.write(books +"<br>");
let someResult=books.pop()
document.write(books+ "<br>");
document.write ("Deleted by pop method is " + someResult);


//Shift method

//shift()=  ("removes the first element fro an array and return that element");

let states=["Delhi","maharastra","telangana"];
 let newStates=states.shift()
document.write(newStates.length, + "<br>");
//Unshift Method

let marks=[25,65,89,105]
marks.unshift("suresh" );
document.write(marks + "<br>");

//contact
//concat()=("combunes two or more arrays")
let scores=[11,22,33,44];
let players=["amith","suresh", "mahesh"];
let newPlayers= scores.concat(players);
document.write(newPlayers + "<br>");


//join
var team=[10,20,30,"sunil","anil","mahadev"];
var myTeam=team.join("/")
document.write(myTeam +"<br>")


//Slice: Returns Shallow copy of portion of an array into new array

let students=["anil", "balu","karthik", 10,20,30,40,50]
let myStudents=students.slice(0,4)
document.write(myStudents +"<br>")


//splice: Chnages the content of an array by removing replacing and by adding

let myNumbers=[0,1,2,3,4,5,6,7,8]
document.write(myNumbers + "<br>")
let myNewNumbers= myNumbers.splice(0,5)
document.write(myNumbers +"<br>")

document.write(myNewNumbers +"<br>")

// index of

let members=["anil","banti", "suresh","mahesh","girish"]
document.write(members +"<br>");
var newMember=members.indexOf("satish")
if(newMember==-1){
    members.push("satish")
}
document.write(members +"<br>")

document.write(members.indexOf("mahesh" ));



//String Methods


//split

var sample ="This is a string sample text"
document.write(sample.split(" "))
console.log(sample.split(""))

//Trim
var student ="      ramesh      ";

document.write(student +"<br>");

console.log(student.trim());   //removes the white space from string

//CharAt

var student ="ramesh";

document.write(student.charAt(5));



//Loop Syntax
//1.for loop

// Increment
for(var a=5; a<=10; a++){
    document.write(a+ ")" + "I LOVE INDIA " + "<br>" )

}


for(var a=1; a<=50; a++){
    document.write(a+ ")" + "I LOVE INDIA " + "<br>" )

}



//Decrement
for(var a=10; a>=1; a--){
    document.write(a+ ")" + "I LOVE INDIA " + "<br>" )
 
}


//While loop

let x=1;
while(x<=10){
    document.write(x+ ")" + "Hello Everyone" + "<br>")
    x++
}


//do while loop  // if condition is false then also it executes one time
let y=0;
do{
    document.write("This is do-while output" + "<br>")
    y++
}while(y<20)   // increment condition shoild be mentioned without  increment or decrement it will enter in infinite loop.


//practice on loops
var amount=100;
var days=30;
var interest=2;

for(let i=1; i<=days; i++){
if (i%4===0){
    amount += interest
}
document.write("Your amount for"+ i + "th day" +amount + "<br>")
}


var myNumberss = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]

myAnswer=[1,2,3,4,5,6,7,8,9]

//EVENT AND EVENTLISTNER



