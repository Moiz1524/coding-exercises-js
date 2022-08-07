// Challenge # 2 — Reversing letters and words

// Input: "I evol uoy os !hcum"

// Output: I love you so much!

const reverseWords = (str) => {
  return str.split(' ').map((item) => {
    return item.split('').reverse().join('')
  }).join(' ');
};