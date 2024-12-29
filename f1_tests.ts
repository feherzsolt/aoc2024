import { cal2, calc, Pair, parseLine } from "./f1";

describe('Pair.diff( )', () => {
	it('calculate left - right', () => {
		const pair = new Pair(2, 3);
		expect(pair.diff()).toBe(1);
	});
	it('will calculate absolute diff', () => {
		const pair = new Pair(2, 0);
		expect(pair.diff()).toBe(2);
	})
});

describe('parseLine', () => {
	it('parse both numbers as integer', () => {
		expect(parseLine("1 2")).toEqual(new Pair(1, 2));
	})

	it('work with multiple spaces', () => {
		expect(parseLine("1  2")).toEqual(new Pair(1, 2));
	})
})

describe('calc for f1', () => {
	it('will calculate for trivial pairs', () => {
		expect(calc([new Pair(1, 2)])).toBe(1);
	})

	it('work for example input', () => {
		expect(calc([
			new Pair(3, 4),
			new Pair(4, 3),
			new Pair(2, 5),
			new Pair(1, 3),
			new Pair(3, 9),
			new Pair(3, 3)
		])).toBe(11);
	})
})

describe('cal2', () => {
	it('will calculate trivial input correctly', () => {
		expect(cal2([new Pair(1, 1)])).toBe(1);
	})
	it('will calculate correctly for example input', () => {
		expect(cal2([
			new Pair(3, 4),
			new Pair(4, 3),
			new Pair(2, 5),
			new Pair(1, 3),
			new Pair(3, 9),
			new Pair(3, 3)
		])).toBe(31);
	})
})

