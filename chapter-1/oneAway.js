/**
 * There are three types of edits that can be performed on strings:
 * insert a character, remove a character, or replace a character.
 * Given two strings, write a function to check if they are one edit
 * (or zero edits) away
 * EXAMPLE:
 * bal, la -> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bake -> false
 */

/**
 * Idea: letters in both strings have to be the same at the same index
 * except one index position. Loop through the longer string and count
 * the number of different letters at each index, if the number is larger
 * than 1, it's false.
 */

function isOneAway(s1, s2) {
	if (Math.abs(s1.length - s2.length) >= 2) {
		return false;
	}

	let start = 0;
	let end = Math.max(s1.length, s2.length);
	let difference = 0;
	while (start < end) {
		const l1 = s1[start];
		const l2 = s2[start];
		if (l1 && l2 && l1 !== l2) {
			if (difference < 1) {
				difference++;
			} else {
				return false;
			}
		}
		start++;
	}
	return true;
}

console.log(isOneAway('bal', 'ba'));
console.log(isOneAway('pale', 'bale'));
console.log(isOneAway('people', 'peoples'));
console.log(isOneAway('pale', 'bake'));
