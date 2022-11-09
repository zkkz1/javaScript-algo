/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let i = 0;
  let ans = 0;
  for (let c of s) {
    while (set.has(c)) {
      set.delete(s[i]);
      i++;
    }
    set.add(c);
    ans = Math.max(ans, set.size);
  }
  return ans;
};
