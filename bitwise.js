function bitwiseAND(n1, n2) {
	return n1 & n2;
}

function bitwiseOR(n1, n2) {
	return n1 | n2;
}

function bitwiseXOR(n1, n2) {
	return n1 ^ n2;
}

/*const num1=7;
const num2=12;*/
const result1=bitwiseAND(7,12);
const result2=bitwiseOR(7,12);
const result3=bitwiseXOR(7,12);
console.log("for AND operation=",result1);
console.log("for OR operation=",result2);
console.log("for XOR operation=",result3);

