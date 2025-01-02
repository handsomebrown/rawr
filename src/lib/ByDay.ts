import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import type { SelectOptionType } from "../types";

dayjs.extend(localeData);

export const WeekdayOptions: SelectOptionType<number>[] = dayjs()
	.localeData()
	.weekdays()
	.map((weekday, i) => {
		return {
			label: weekday,
			value: i,
		};
	});
