// complete the given function

function palindrome(str){

	let stringWithoutSpaces = str.split(" ").join("");
	// let isPalindrome = true;
	let i = 0, j = stringWithoutSpaces.length-1;
	while(i <= j){
		if(stringWithoutSpaces.charAt(i) !== stringWithoutSpaces.charAt(j)){
			return false;
		}
		else{
			i++;
			j--;
		}
	}
	return true;
}
module.exports = palindrome
