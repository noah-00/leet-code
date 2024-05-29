/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const cleanStr = s
    .split(" ")
    .join()
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLocaleLowerCase();
  const reverseStr = cleanStr.split("").reverse().join().toLocaleLowerCase();

  return cleanStr === reverseStr;
}
// @lc code=end
