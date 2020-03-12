/**
 * Given a string, write a function to check if it is a permutation of a
 * palindrome. A palindrome is a word or phrase that is the same forwards
 * and backwards. A permutation is a rearrangement of letters. The palindrome
 * does not need to be limited to just dictionary words.
 * EXAMPLE:
 * input: Tact Coa
 * output: True(permutations: "taco cat", "atco cta", etc)
 */

/**
 * Idea: as long as the string can be a palindrome, it is true
 * To check if a string can be a palindrome, we only need to check
 * every letter has a pair or only one letter has no pair
 */

function palindromePermutation(str) {
	const map = new Map();
	for (let i = 0; i < str.length; i++) {
		const l = str[i].toLowerCase();
		if (l !== ' ') {
			if (map.has(l)) {
				map.delete(l);
			} else {
				map.set(l, l);
			}
		}
	}
	return map.size === 0 || map.size === 1;
}

console.log(palindromePermutation('Tcct Cbc'));
