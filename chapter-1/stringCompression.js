/**
 * Implement a method to perform basic string compression using
 * the counts of repeated characters. For example, the string
 * 'aabcccccaaa' would become 'a2b1c5a3'. If the "compressed" string
 * would not become smaller than the original string, you should return
 * the original string. You can assume the string has only uppercase
 * and lowercase letters(a-z).
 */

function stringCompress(str) {
	let result = '';
	let count = 1;
	for (let i = 1; i < str.length; i++) {
		const pre = str[i - 1];
		const cur = str[i];
		if (pre !== cur) {
			result += pre + count;
			count = 1;
		} else {
			count++;
			if (i === str.length - 1) {
				result += pre + count;
			}
		}
	}
	return result.length > str.length ? str : result;
}

console.log(stringCompress('aabcdef'));
