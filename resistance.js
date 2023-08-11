
    function calculateParallelResistance(resistances) {
        let ans=0;
       for(i=0;i<resistances.length;i++)
       {
        ans=ans+(1/resistances[i])
        
       }
       
      let totalresistance=1/ans;
      return totalresistance;
}

let totalresult=calculateParallelResistance([6,3,6])
console.log("total parallel resistance = ",totalresult);
   
  
  
  
  
  