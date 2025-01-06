import { lengthOfLongestSubstring, lengthOfLongestSubstringFrom } from "./leetcode_length_of_longest_substring";

describe('lengthOfLongestSubstring', () => {
    it('will return 0 for empty string', () => {
        expect(lengthOfLongestSubstring('')).toBe(0);
    })

    it('will return 3 for abcabcbb', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    })

    it('will return 1 for aaaaa ', () => {
        expect(lengthOfLongestSubstring('aaaaa')).toBe(1);
    })

    it('will return 3 for pwwkew', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    })
})

describe('lengthOfLongestSubstringFrom', () => {
    it('will return 2 for ab', () => {
        expect(lengthOfLongestSubstringFrom('ab', 0)).toBe(2);
    })

    it('will return 1 for aa', () => {
        expect(lengthOfLongestSubstringFrom('aa', 0)).toBe(1);
    })

    it('will return 2 for aab from 1', () => {
        expect(lengthOfLongestSubstringFrom('aab', 1)).toBe(2);
    })
})