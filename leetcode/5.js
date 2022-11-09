/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ansleft = 0;
  let ansright = 0;
  let n = s.length;
  if (n === 1) {
    return s;
  }
  for (let i = 0; i < n; i++) {
    helper(i, i);
    helper(i, i + 1);
  }
  function helper(left, right) {
    while (left >= 0 && right < n && s[left] === s[right]) {
      left--;
      right++;
    }
    if (right - left - 1 >= ansright - ansleft) {
      ansleft = left + 1;
      ansright = right;
    }
  }
  return s.slice(ansleft, ansright);
};
