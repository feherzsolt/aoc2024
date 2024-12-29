
export class Pair {
	constructor(left: number, right: number) {
		this.left = left;
		this.right = right;
	}
	public readonly left: number;
	public readonly right: number;

	public diff(): number {
		return Math.abs(this.left - this.right);
	}
}

export function parseLine(line: string): Pair {
	const numbers = line.split(/\s+/).map(item => Number.parseInt(item));
	return new Pair(numbers[0], numbers[1]);
}

export function calc(pairs: Pair[]) {
	const left = pairs.map(p => p.left).sort();
	const right = pairs.map(p => p.right).sort();

	const orderedPairs = left.map((li, index) => new Pair(li, right[index]));
	const differences = orderedPairs.map(pair => pair.diff());
	return differences.reduce((p, c) => p + c, 0);
}

export function cal2(pairs: Pair[]) {
	const left = pairs.map(p => p.left);
	const right = pairs.map(p => p.right);

	return left.map(l => l * right.filter(r => r == l).length).reduce((p, c) => p + c, 0);
}




