import dayjs from "dayjs";
import type { SelectOptionType } from "../types";

export const DaysOptions = () => {
	const daysOptions: SelectOptionType<number>[] = [];
	for (let i = 1; i <= 31; i++) {
		daysOptions.push({
			label: dayjs().date(i).format("D"),
			value: i,
		});
	}
	daysOptions.push({
		label: "Last",
		value: -1,
	});
	return daysOptions;
};
