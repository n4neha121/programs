//function matchsticks(step)
//{
//if(step==1){
//return step*6;
//}
//else
//{
 //step= (step*6) - (step-1);
//return step;
//}
//}
//let result =matchsticks(4);
//console.log(result)//*

//function minMax(arr) {

  //  let max=0;
    //let min=100;
      //  for(let i=0;i<arr.length;i++)
        //    {
          //      if (arr[i]>max){
            //       max=arr[i];}
              //  if (arr[i]<min){
                //  min=arr[i];}
            //}

    
      //return [max,min];
        //}
      //let arr=[5,6,2,8,0]
     /* let result=minMax(arr);
      console.log(result);*/
   let obj={
    month:"11",
    day:"24",
    year:"2024"

   }
   function newDate(obj)
   {
    if(obj.month=="11" && obj.day=="24")
    {
        return true;
    }
    else {
        return false
   }
}
let result = newDate(obj);
console.log(result) 