import { Frequency } from "rrule";
import type { SelectOptionType } from "../types";

export const FrequencyOptions = (excludes: string[] = []): SelectOptionType<number>[] =>
	Object.keys(Frequency)
		.filter((f, i) => !excludes.includes(FreqReverse[i]) && Number.isNaN(Number(f)))
		.map((f, j) => {
			return {
				label: f.charAt(0) + f.slice(1).toLowerCase(),
				value: j,
			};
		});

export const FreqReverse = ["YEARLY", "MONTHLY", "WEEKLY", "DAILY", "HOURLY", "MINUTELY", "SECONDLY"];
