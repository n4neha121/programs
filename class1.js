class person{
    constructor(firstname,lastname)
    {
        this.firstname=firstname;
        this.lastname=lastname;
    }
    printfullname(){
        console.log("before change="+ this.firstname+ " " +this.lastname);
    }

//let personinstance= new person("raj","kumar");
//personinstance.printfullname();

changename(new_firstname,new_lastname) {
    this.new_firstname=new_firstname;
    this.new_lastname=new_lastname;
    console.log("name changed = "+this.new_firstname+" "+this.new_lastname)

}
}
let personinstance=new person("neha","kumari");
personinstance.printfullname()
let namechange=personinstance.changename("riya","singh");

class employee {
    constructor(name,age,gender,caste,department){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.caste=caste;
        this.department=department;
    }
}
const emp1= new employee("raj singh",22,"female",'gen')
document.write(emp1.name);
document.write(":");
document.write(emp1.age);
document.write(":");
document.write(emp1.gender);
document.write(":");
document.write(emp1.caste);
console.log()



 
 





            
