import type { SelectOptionType } from "../types";
import { SetPos } from "../types/enum.ts";

export const SetPosOptions = () => {
	const options: SelectOptionType<number>[] = [];
	for (const [key, value] of Object.entries(SetPos)) {
		if (Number.isNaN(Number(key))) {
			options.push({
				label: key,
				value: Number(value),
			});
		}
	}
	return options;
};
