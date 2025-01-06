import { isValid } from "./leetcode_valid_parentheses"
describe('isValid', () => {
    function expectIsValid(t: string): jest.JestMatchers<boolean> {
        return expect(isValid(t));
    }

    it('will be true for empty string', () => {
        expectIsValid('').toBe(true);
    })

    it('will be true simple open and close', () => {
        expectIsValid('()').toBe(true);
    })

    it('will fail for only opening brace without closing', () => {
        expectIsValid('(').toBe(false);
    })

    it('will fail for even number of opening braces', () => {
        expectIsValid('((').toBe(false);
    })

    it('will fail for ))', () => {
        expectIsValid('))').toBe(false);
    })

    it('will fail for )(', () => {
        expectIsValid(')(').toBe(false);
    })

    it('will be true for []', () => {
        expectIsValid('[]').toBe(true);
    })

    it('will fail for [[', () => {
        expectIsValid('[[').toBe(false);
    })

    it('will work for []', () => {
        expectIsValid('[]').toBe(true);
    })

    it('will work for mixed braces ([{}])()', () => {
        expectIsValid('([{}])()').toBe(true);
    })

    it('will fail when opening bracket closed by different closing bracket', () => {
        expectIsValid('(]').toBe(false);
    })

    it('will fail if brackets are closed in incorrect order ([)]', () => {
        expectIsValid('([)]').toBe(false);
    })

    it('will fail when there is a closing bracket without an opening one', () => {
        expectIsValid('}()').toBe(false);
    })

})