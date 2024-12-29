import fs from 'node:fs/promises';
import { cal2, Pair, parseLine } from "./f1";

(async () => {
	const file = await fs.readFile('./f1_input.txt');

	const pairs: Pair[] = file.toString()
		.split('\n')//.filter((_, index) => index < 10)
		.map(line => parseLine(line));

	console.log(cal2(pairs));
})();