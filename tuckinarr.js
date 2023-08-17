function tuckIn(arr1, arr2) {
	const middleindex=Math.floor(arr1.length/2);
	arr1.splice(middleindex,0,...arr2);
	return arr1;
}
let result=tuckIn([1,8],[2,3,4,5,6,7]);
console.log(result)