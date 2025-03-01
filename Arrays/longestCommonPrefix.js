function LCP(strs) {
	// IF ONLY ONE STRING IN ARRAY RETURN IT
	if (strs.length === 1) {
		return strs[0];
	}

	// SELECT ONE STR AT RANDOM FROM ARRAY
	let prefix = strs[0];
	for (let curr = 1; curr < strs.length; curr++) {
		let common = 0;

		// IF COMMON LETTER INDEX IS LESS THAN THE BOUNDS OF PREFIX OR CURRENT STRING LENGTH
		// AND THE LETTERS ARE THE SAME, INCREMENT THE COMMON INDEX
		while (
			common < Math.min(prefix.length, strs[curr].length) &&
			prefix[common] === strs[curr][common]
		) {
			common++;
		}

		// UPDATE PREFIX
		prefix = common > 0 ? strs[curr].slice(0, common) : '';
	}

	return prefix;
}

console.log(LCP(['flower', 'flow', 'flight']));
