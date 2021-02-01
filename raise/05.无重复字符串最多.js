// abcabcbb
const lengthOfLongestSubstring = function(s) {
  let arr = [], m = 0
  for(let i = 0; i < s.length; i++) {
    let now = s[i], index = arr.indexOf(now)
    if (index !== -1) {
      arr.splice(0, index + 1)
    }
    arr.push(now)
    m = Math.max(arr.length, m)
  }
  return m
};

console.log(lengthOfLongestSubstring("aabaab!bb"))