import dayjs from "dayjs";
import { Frequency, RRule, type Weekday } from "rrule";
import type { StoreRRuleOptions } from "../store/store-state.ts";
import { EndOptionType, RuleOptionType } from "../types/enum.ts";

export default function rruleStrToState(rruleString: string): StoreRRuleOptions {
	const parsedObj = RRule.parseString(rruleString);
	const newState: StoreRRuleOptions = {} as StoreRRuleOptions;

	if (parsedObj.freq === undefined) {
		return newState;
	}

	newState.freq = parsedObj.freq;

	if (parsedObj.freq === Frequency.YEARLY) {
		if (parsedObj.byweekday || parsedObj.bysetpos) {
			newState.rruleOpt = RuleOptionType.BySetPos;
		} else if (parsedObj.bymonth || parsedObj.bymonthday) {
			newState.rruleOpt = RuleOptionType.ByMonthDay;
		}
	} else if (parsedObj.freq === Frequency.MONTHLY) {
		if (parsedObj.bymonthday) {
			newState.rruleOpt = RuleOptionType.ByMonthDay;
		} else if (parsedObj.bysetpos || parsedObj.byweekday) {
			newState.rruleOpt = RuleOptionType.BySetPos;
		}
	} else {
		newState.rruleOpt = RuleOptionType.Interval;
	}

	if (parsedObj.dtstart) {
		newState.dtStart = dayjs(parsedObj.dtstart).isValid() ? dayjs(parsedObj.dtstart) : null;
	}

	if (parsedObj.until) {
		newState.until = dayjs(parsedObj.until).isValid() ? dayjs(parsedObj.until) : null;
		newState.rruleEndOpt = EndOptionType.On;
	} else if (parsedObj.count) {
		newState.count = parsedObj.count;
		newState.rruleEndOpt = EndOptionType.After;
	} else {
		newState.rruleEndOpt = EndOptionType.Never;
	}

	if (parsedObj.bymonth) {
		if (!Array.isArray(parsedObj.bymonth)) {
			newState.byMonth = [parsedObj.bymonth];
		} else {
			newState.byMonth = parsedObj.bymonth;
		}
	}

	if (parsedObj.bymonthday) {
		if (!Array.isArray(parsedObj.bymonthday)) {
			newState.byMonthDay = [parsedObj.bymonthday];
		} else {
			newState.byMonthDay = parsedObj.bymonthday;
		}
	}

	if (parsedObj.byweekday) {
		if (Array.isArray(parsedObj.byweekday)) {
			newState.byDay = parsedObj.byweekday.map((d) => (d as Weekday).getJsWeekday());
		} else {
			newState.byDay = [(parsedObj.byweekday as Weekday).getJsWeekday()];
		}
	}

	if (parsedObj.bysetpos) {
		if (!Array.isArray(parsedObj.bysetpos)) {
			newState.bySetPos = [parsedObj.bysetpos];
		} else {
			newState.bySetPos = parsedObj.bysetpos;
		}
	}
	return newState;
}
