function lengthOfLastWord(s) {
	if (s.length <= 1) return s.length;

	let ptr1 = s.length - 1,
		ptr2 = s.length - 1;

	while (ptr2 >= 0) {
		if (s[ptr2] == ' ' && s[ptr1] == ' ') {
			ptr1--;
			ptr2--;
		} else if (s[ptr2] == ' ' && s[ptr1] != ' ') {
			break;
		} else {
			ptr2--;
		}
	}

	return ptr1 - ptr2;
}

console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy  '));
console.log(lengthOfLastWord('a   '));
console.log(lengthOfLastWord('  a   '));
