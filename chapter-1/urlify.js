/**
 * Write a method to replace all spaces in a string
 * with '%20'. You may assume that the string has sufficient
 * space at the end to hold the additional characters, and
 * that you are given the "true" length of the string.
 * EXAMPLE:
 * input: "Mr  John  Smith     ", 13
 * output: "Mr%20John%20Smith"
 */

function urlify(str, length) {
	return str
		.trim()
		.split(' ')
		.filter(Boolean)
		.join('%20');
}

console.log(urlify('Mr  John  Smith     ', 13));
