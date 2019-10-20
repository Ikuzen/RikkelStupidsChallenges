function longestSubsequence(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
      for (let j = 0; j < i + 1; j ++) {
        const sub = s1.slice(j, s1.length - i + j);
        if (s2.includes(sub)) {
          return sub;
        }
      }
    }
    return "";
  }
  
  longestSubsequence("abcdefg", "abcdqweqbcdefg");