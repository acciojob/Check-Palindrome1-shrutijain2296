// complete the given function

function palindrome(str){
	let isPalindrome = true;
	let i = 0, j = str.length-1;
	while(i <= j && isPalindrome){
		if(str[i] != str[j]){
			isPalindrome = false;
			return;
		}
		if(str[i] === ' '){
			i++;
		}
		if(str[j] === ' '){
			j--;
		}
		i++;
		j--;
	}
	console.log(isPalindrome ? "Palindrome : Not a Palindrome")
}
module.exports = palindrome
