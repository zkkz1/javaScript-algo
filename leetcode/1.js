/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const s = new Map();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (s.has(target - nums[i])) {
      return [s.get(target - nums[i]), i];
    }
    s.set(nums[i], i);
  }
};
