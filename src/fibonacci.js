/* global define */

    /**
     * @description Calculate any number in the Fibonacci sequence.
     * @param {Number} n The index of the sequence to calculate; zero-based.
     * @returns {Number} the nth element of the Fibonacci sequence.
     */
    // TODO: return definition of `fibonacci` function here


function fibbyFib(n) {
	console.log(n);
	if (n === 0 || n === 1) {
		return 1;
	} else if (n < 0) {
		return 0;
	} else {
		return fibbyFib(n-2) + fibbyFib(n-1);
	}
}

module.exports = fibbyFib;