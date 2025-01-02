import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import type { SelectOptionType } from "../types";

dayjs.extend(localeData);

export const MonthOptions: SelectOptionType<number>[] = dayjs()
	.localeData()
	.monthsShort()
	.map((month, i) => {
		return {
			label: month,
			value: i + 1,
		};
	});
