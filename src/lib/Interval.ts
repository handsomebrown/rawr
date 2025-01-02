import type { Frequency } from "rrule";

export function getIntervalTypeStr(freq: Frequency, interval: number): string {
	let intervalType: string;
	switch (freq) {
		case 0:
			intervalType = "year";
			break;
		case 1:
			intervalType = "month";
			break;
		case 2:
			intervalType = "weekly";
			break;
		case 3:
			intervalType = "day";
			break;
		case 4:
			intervalType = "hour";
			break;
		case 5:
			intervalType = "minute";
			break;
		case 6:
			intervalType = "second";
			break;
		default:
			intervalType = "Invalid frequency";
	}

	if (interval > 1) {
		intervalType += "s";
	}

	return intervalType;
}
