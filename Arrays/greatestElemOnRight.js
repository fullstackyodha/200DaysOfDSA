function replaceElementsOnRight(arr) {
	let res = [],
		max = -1;

	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] >= max) {
			res.unshift(max);
			max = arr[i];
		} else {
			res.unshift(max);
		}
	}

	return res;
}

console.log(replaceElementsOnRight([17, 18, 5, 4, 6, 1]));
