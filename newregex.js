let form=document.querySelector(".sign-up-form");
let user=document.querySelector("#Name")
let password=document.querySelector("#password")

let username_pattern=/^[A-Za-z]{6,12}$/
if(form){
form.addEventListener('submit',(e)=>{
    e.preventDefault();    
    let username=user.value;
    //console.log(username)
    //test method returns boolean value
    let result=username_pattern.test(username)
    if(result == true){
        console.log("username is valid")
    }
    else{
        console.log("username is invalid try again")
    }
})
}



























