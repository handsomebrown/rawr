import dayjs from "dayjs";
import { Frequency, type Options, RRule, type WeekdayStr } from "rrule";
import type { StoreRRuleOptions } from "../store/store-state.ts";
import type { GeneratedRule } from "../types";
import { EndOptionType, RuleOptionType } from "../types/enum.ts";

export default function stateToRrule({
	rruleOpt,
	rruleEndOpt,
	dtStart,
	freq,
	byMonth,
	byMonthDay,
	bySetPos,
	byDay,
	interval,
	count,
	until,
	tzid,
}: Required<StoreRRuleOptions>): GeneratedRule {
	const rruleOptions: Options = {
		freq: freq,
		dtstart: dtStart !== null ? dtStart.toDate() : dayjs().toDate(),
		interval: 0,
		wkst: null,
		count: null,
		until: null,
		tzid: null,
		bysetpos: null,
		bymonth: null,
		bymonthday: null,
		bynmonthday: null,
		byyearday: null,
		byweekno: null,
		byweekday: null,
		bynweekday: null,
		byhour: null,
		byminute: null,
		bysecond: null,
		byeaster: null,
	};
	rruleOptions.interval = interval;
	rruleOptions.tzid = tzid;

	if (freq === Frequency.YEARLY) {
		if (rruleOpt === RuleOptionType.ByMonthDay) {
			rruleOptions.bymonthday = byMonthDay;
			rruleOptions.bymonth = byMonth;
		} else if (rruleOpt === RuleOptionType.BySetPos) {
			rruleOptions.byweekday = byDay.map((day) => RRule[day as WeekdayStr]);
			rruleOptions.bymonth = byMonth;
			rruleOptions.bysetpos = bySetPos;
		}
	}

	if (freq === Frequency.MONTHLY) {
		if (rruleOpt === RuleOptionType.ByMonthDay) {
			rruleOptions.bymonthday = byMonthDay;
		} else if (rruleOpt === RuleOptionType.BySetPos) {
			rruleOptions.bysetpos = bySetPos;
			rruleOptions.byweekday = byDay.map((day) => RRule[day as WeekdayStr]);
		}
	}

	if (freq === Frequency.WEEKLY) {
		rruleOptions.byweekday = byDay.map((day) => RRule[day as WeekdayStr]);
	}

	switch (rruleEndOpt) {
		case EndOptionType.Never:
			break;
		case EndOptionType.After:
			rruleOptions.count = count;
			break;
		case EndOptionType.On:
			rruleOptions.until = until ? until.toDate() : null;
			break;
		default:
			break;
	}

	const rule = new RRule(rruleOptions);
	return {
		rule: rule.toString().split("\n"),
		text: rule.toText(),
	};
}
