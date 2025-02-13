function checkDuplicates(nums) {
	const set = new Set();

	for (const num of nums) {
		if (set.has(num)) {
			return true;
		}

		set.add(num);
	}

	return false;
}

console.log(checkDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
