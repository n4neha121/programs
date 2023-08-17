let eventElement = document.querySelector('.click1')

eventElement.addEventListener('click',function(){
    console.log("Clicked for 1st")
})

let elements=document.querySelectorAll('li');
console.log(elements)

elements.forEach(function(element){

element.addEventListener('click',function(e){
    console.log("Item clicked")
    console.log(e.target)
    e.target.style.textDecoration = "line-through"
})
})
let eventselement=document.querySelector('.click2')
eventselement.addEventListener('click',function(){
    console.log("clicked  for 2nd")
})
let element1=document.querySelectorAll('li');
console.log(element1)
element1.forEach(function(elementss){

    elementss.addEventListener('click',function(e){
        console.log(e.target)
        e.target.remove()


        console.log("Item clicked2")
      
    })
})




























































