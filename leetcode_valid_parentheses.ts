const ps = [
    {s:'(', e:')'},
    {s:'[', e:']'},
    {s:'{', e:'}'}
]


export function isValid(s: string): boolean {
    if (s.length % 2 != 0)
        return false;
    
    let stack = [];
    for(let index = 0; index < s.length; index ++) {
        const parenthesesModel = ps.filter(p => p.s == s[index]);
        if (parenthesesModel.length > 0) {
            stack.push(parenthesesModel[0].e);
            continue;
        }

        if (stack.pop() != s[index])
            return false;
    }

    return stack.length == 0;    
};