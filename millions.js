function roundingtomillions(number)
{
    if(typeof number==='number')
    {
        return Math.round(number/1000000)*1000000;
    }
 return number;
}
let result=[2345678,1234567,"apple",5576467];
let roundedarray=result.map(roundingtomillions);
console.log(roundedarray);
