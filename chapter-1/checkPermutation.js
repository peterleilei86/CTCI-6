/**
 * Given two strings, write a method to decide if one is a permutation of the other
 */

function checkPermutation(s1, s2) {
	if (s1.length !== s2.length) {
		return false;
	}
	const map = new Map();
	for (let i = 0; i < s1.length; i++) {
		const l1 = s1[i];
		map.set(l1, l1);
	}
	for (let j = 0; j < s2.length; j++) {
		const l2 = s2[j];
		if (!map.has(l2)) {
			return false;
		} else {
			// remove letter that has been checked
			map.delete(l2);
		}
	}
	return true;
}

console.log(checkPermutation('abc', 'cbc'));
