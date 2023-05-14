// complete the given function

function palindrome(str){

	let str1 = str.toLowerCase()
	// let isPalindrome = true;
	let i = 0, j = str1.length-1;
	while(i <= j && isPalindrome){
		if(str1[i] != str1[j]){
			return false;
		}
		if(str1[i] === ' '){
			i++;
		}
		if(str1[j] === ' '){
			j--;
		}
		i++;
		j--;
	}
	return true;
}
module.exports = palindrome
