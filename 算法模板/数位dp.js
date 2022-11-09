// https://leetcode.cn/problems/count-special-integers/solution/shu-wei-dp-mo-ban-by-endlesscheng-xtgx/
var countSpecialNumbers = function (n) {
  let str = String(n);
  let len = str.length;
  let dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(1 << 10).fill(-1);
  }

  function solve(i, mask, isLimit, isNum) {
    if (i === str.length) {
      return Number(isNum);
    }
    if (!isLimit && isNum && dp[i][mask] >= 0) {
      return dp[i][mask];
    }
    let res = 0;
    if (!isNum) {
      res += solve(i + 1, mask, false, false);
    }
    let up = isLimit ? Number(str[i]) : 9;
    let low = isNum ? 0 : 1;
    for (let j = low; j <= up; j++) {
      if (((mask >> j) & 1) === 0) {
        res += solve(i + 1, mask | (1 << j), isLimit && j === up, true);
      }
    }
    if (!isLimit && isNum) dp[i][mask] = res;
    return res;
  }

  return solve(0, 0, true, false);
};
