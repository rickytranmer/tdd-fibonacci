/* global define */

    /**
     * @description Calculate any number in the Fibonacci sequence.
     * @param {Number} n The index of the sequence to calculate; zero-based.
     * @returns {Number} the nth element of the Fibonacci sequence.
     */
    // TODO: return definition of `fibonacci` function here
function fibonacci(n) {
	if ((typeof(n) !== 'number') || (Math.floor(n) !== Math.ceil(n))) { return 'whole numbers only'}
	if (n === 0 || n === 1) {
		return 1;
	} else if (n > 1) {
		return (fibonacci(n-1) + fibonacci(n-2));
	} else {
		return 0;
	}
}

module.exports = fibonacci;