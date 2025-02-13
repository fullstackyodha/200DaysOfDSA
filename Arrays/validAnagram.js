function isAnagram(s1, s2) {
	if (s1.length !== s2.length) {
		return false;
	}

	let hash1 = {},
		hash2 = {};

	for (let i = 0; i < s1.length; i++) {
		hash1[s1[i]] = (hash1[s1[i]] || 0) + 1;
		hash2[s2[i]] = (hash2[s2[i]] || 0) + 1;
	}

	for (const key in hash1) {
		if (hash1[key] !== hash2[key]) {
			return false;
		}
	}

	return true;
}

console.log(isAnagram('anagram', 'margana'));
console.log(isAnagram('rat', 'cat'));
