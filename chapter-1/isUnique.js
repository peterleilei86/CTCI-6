/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you can't use additional data structures
 */

function isUnique(str) {
	const map = new Map();
	for (let i = 0; i < str.length; i++) {
		const letter = str[i];
		if (map.has(letter)) {
			return false;
		}
		map.set(letter, letter);
	}
	return true;
}

const a = isUnique('aba');
