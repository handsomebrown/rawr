import { Frequency } from "rrule";
import type { RawrOptions } from "../components/Rawr/Rawr.types.ts";
import { FreqReverse } from "../lib/Freq.ts";
import type { GeneratedRule } from "../types";
import { EndOptionType, RuleOptionType } from "../types/enum.ts";
import type { StoreRRuleOptions } from "./store-state.ts";

class Defaults {
	[key: string]: unknown;

	static readonly OPTIONS: Required<RawrOptions> = {
		useStartDate: false,
		useTimezones: false,
		initialStartDate: new Date(),
		excludeFrequencies: [],
		defaultFrequency: FreqReverse[Frequency.MONTHLY],
		defaultTimeZone: "",
	};

	static readonly GENERATED_RULE: GeneratedRule = {
		rule: [],
		text: "",
	};

	static readonly STORE_STATE: StoreRRuleOptions = {
		rruleOpt: RuleOptionType.ByMonthDay,
		rruleEndOpt: EndOptionType.Never,
		dtStart: null,
		freq: Frequency.YEARLY,
		byMonth: [1],
		byMonthDay: [1],
		bySetPos: [1],
		byDay: [1],
		interval: 1,
		count: 1,
		until: null,
		tzid: "America/New_York",
	};

	static readonly FREQ_STATE: Partial<StoreRRuleOptions>[] = [
		{
			freq: Frequency.YEARLY,
			rruleOpt: RuleOptionType.ByMonthDay,
			interval: 1,
			byMonth: [1],
			byMonthDay: [1],
			bySetPos: [1],
			byDay: [1],
		},
		{
			freq: Frequency.MONTHLY,
			rruleOpt: RuleOptionType.ByMonthDay,
			interval: 1,
			byMonthDay: [1],
			bySetPos: [1],
			byDay: [1],
		},
		{
			freq: Frequency.WEEKLY,
			rruleOpt: RuleOptionType.Interval,
			interval: 1,
			byDay: [1],
		},
		{
			freq: Frequency.DAILY,
			rruleOpt: RuleOptionType.Interval,
			interval: 1,
		},
		{
			freq: Frequency.HOURLY,
			rruleOpt: RuleOptionType.Interval,
			interval: 1,
		},
		{
			freq: Frequency.MINUTELY,
			rruleOpt: RuleOptionType.Interval,
			interval: 1,
		},
		{
			freq: Frequency.SECONDLY,
			rruleOpt: RuleOptionType.Interval,
			interval: 1,
		},
	];
}

export default Defaults;
