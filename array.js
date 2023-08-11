function canNest(arr1,arr2)
{
    let array1=maxmin(arr1);
    let array2=maxmin(arr2);

    if(array1[0] > array2[0] && array1[0] < array2[0])
    {
        return true;
    }
    else
    {

    return false;
    }

    function maxmin(arr) {

          let max=0;
          let min=100;
             for(let i=0;i<arr.length;i++)
                {
                    if (arr[i]>max){
                       max=arr[i];}
                     if (arr[i]<min){
                        min=arr[i];}
                  }
      
          
            return [max,min];
              }
            }
       let result= canNest([1,2,3],[0,1]);
       console.log(result)
     