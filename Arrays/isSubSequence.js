function isSubsequence(s1, s2) {
	let ptr1 = 0,
		ptr2 = 0;

	while (ptr1 < s1.length && ptr2 < s2.length) {
		if (s1[ptr1] === s2[ptr2]) {
			ptr1++;
		}
		ptr2++;
	}

	return ptr1 >= s1.length;
}

console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
