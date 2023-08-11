function binary(decimal) {
	let quo=0;
	let rem,y=1;
	while(decimal!=0)
		{
			rem=decimal%2
			decimal=parseInt(decimal/2);
			quo=quo+rem*y;
			y=y*10;
		}
	return quo.toString()
}
let input=binary(50);
console.log(input);
	
	
	
