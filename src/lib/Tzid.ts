import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import type { SelectOptionType } from "../types";

dayjs.extend(utc);
dayjs.extend(timezone);

export const TimezoneOptions: SelectOptionType<string>[] = Intl.supportedValuesOf("timeZone")
	.filter((tz) => tz.includes("America"))
	.map((tz) => {
		return {
			label: tz.replaceAll("_", " "),
			value: tz,
		};
	});
