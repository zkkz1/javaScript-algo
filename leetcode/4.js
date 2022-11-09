/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  let left = Math.floor((n1 + n2 + 1) / 2);
  let right = Math.floor((n1 + n2 + 2) / 2);
  return (
    Math.floor(
      helper(nums1, 0, n1 - 1, nums2, 0, n2 - 1, left) +
        helper(nums1, 0, n1 - 1, nums2, 0, n2 - 1, right)
    ) / 2
  );

  function helper(nums1, start1, end1, nums2, start2, end2, k) {
    let l1 = end1 - start1 + 1;
    let l2 = end2 - start2 + 1;
    if (l1 > l2) return helper(nums2, start2, end2, nums1, start1, end1, k);
    if (l1 === 0) return nums2[start2 + k - 1];
    if (k === 1) return Math.min(nums1[start1], nums2[start2]);
    let i = start1 + Math.min(l1, Math.floor(k / 2)) - 1;
    let j = start2 + Math.min(l2, Math.floor(k / 2)) - 1;
    if (nums1[i] > nums2[j]) {
      return helper(
        nums1,
        start1,
        end1,
        nums2,
        j + 1,
        end2,
        k - (j - start2 + 1)
      );
    } else {
      return helper(
        nums1,
        i + 1,
        end1,
        nums2,
        start2,
        end2,
        k - (i - start1 + 1)
      );
    }
  }
};
