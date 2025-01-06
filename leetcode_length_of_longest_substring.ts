 export function lengthOfLongestSubstring(s: string): number {
    let lengthOfLongestSubstring = 0;

    for(let index = 0; index < s.length - lengthOfLongestSubstring; index ++) {
        const lengthOfLongestSubstringFromCurrentPosition = lengthOfLongestSubstringFrom(s, index);

        if (lengthOfLongestSubstringFromCurrentPosition > lengthOfLongestSubstring) {
            lengthOfLongestSubstring = lengthOfLongestSubstringFromCurrentPosition;
        }
            
    }

    return lengthOfLongestSubstring;
};

export function lengthOfLongestSubstringFrom(s: string, start: number): number {
    let characters: Set<number> = new Set<number>();

    for(let index = start; index < s.length; index ++) {
        const currentCharacter = s.charCodeAt(index);
        if(characters.has(currentCharacter))
            return index - start;

        characters.add(currentCharacter);
    }

    return s.length - start;
}

