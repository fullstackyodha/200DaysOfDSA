function getConcatenation(nums) {
	// let ans = [];
	// for (let i = 0; i < 2; i++) {
	// 	for (let num of nums) {
	// 		ans.push(num);
	// 	}
	// }
	// return ans;

	// [...ans, ...ans]

	let n = nums.length,
		ans = new Array(2 * n);

	for (let i = 0; i < n; i++) {
		ans[i] = ans[i + n] = nums[i];
	}

	return ans;
}

console.log(getConcatenation([1, 3, 2, 1]));
