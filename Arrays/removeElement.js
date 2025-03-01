function removeElement(nums, val) {
	let k = 0,
		j = nums.length - 1;

	while (k <= j) {
		if (nums[k] === val) {
			[nums[k], nums[j]] = [nums[j], nums[k]];
			j--;
		} else {
			k++;
		}
	}

	return k;
}

let res = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log(res);
