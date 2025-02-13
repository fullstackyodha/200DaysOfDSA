function twoSum(nums, target) {
	let hash = new Map();

	for (let i = 0; i < nums.length; i++) {
		// Cal diff
		const diff = target - nums[i];

		// Check if diff present in hash
		if (hash.has(diff)) {
			// Return indexes
			return [hash.get(diff), i];
		}

		// Set num and index in the hash
		hash.set(nums[i], i);
	}

	return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
