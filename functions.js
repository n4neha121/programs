function nameOfstudents(){
console.log("8uuuuuuuuuuuuu")
}
nameOfstudents();
let fun=function()
{
    console.log("examplle of function")
}
fun()
//arguements and parameters
let invitation = function (name){
    console.log(`welcome",${name} ,"yoyu are invited in evenyt`)
}
invitation("neha")
invitation("pushkar")

let agecalculation = function(birthyear,currentyear=2023)
{
    let age=currentyear-birthyear;
    return age;
}

let addition=function(a,b){
    let sum =a+b;
    console.log(`after addition of "${a}"and"${b}"wed get ${sum}`)
}
addition(10,20)

let funres=agecalculation(2004)
console.log(`your age = ${funres}`)

//let invitation_ =functionname(name1)
//{
  //  console.log(`Welcome ${name1} to the event`)
//}
//invitation_("coders")

let invitations= name1 => `Welcome ${name1} to this event`;
console.log(invitations("coders"))


let uppercase=function(str){
    return str.toUpperase();
}

let lowercase=function(str){
    return str.toLowerCase();
}
let transformer = function(str,fun)
{
    return fun(str)
}
console.log(transformer ("HELLO PRogrammers",lowercase))

let compliment =function(msg){
    return function(name){
      console.log(`${msg} ${name}`);
    }
};
console.log(compliment("you are a good")("coder"));


let comhyu98rk9fj = compliment("you atre t6wrngyy");
comhyu98rk9fj("carry")


 