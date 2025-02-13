function replaceElementsOnRight(arr) {
	let res = [],
		max = -1;

	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] >= max) {
			res.push(max);
			max = arr[i];
		} else {
			res.push(max);
		}
	}

	return res.reverse();
}

console.log(replaceElementsOnRight([17, 18, 5, 4, 6, 1]));
