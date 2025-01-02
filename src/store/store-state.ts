import type { Dayjs } from "dayjs";
import type { ByWeekday } from "rrule";
import type { RawrOptions } from "../components/Rawr/Rawr.types.ts";
import type { GeneratedRule } from "../types";
import type { EndOptionType, RuleOptionType } from "../types/enum.ts";

export interface StoreState extends StoreMethods, StoreValues {}

export interface StoreValues extends StoreRRuleOptions {
	options: RawrOptions;
	onChange: (value: GeneratedRule) => void;
	generated: GeneratedRule;
}

export interface StoreRRuleOptions {
	rruleOpt: RuleOptionType;
	rruleEndOpt: EndOptionType;
	freq: number;
	dtStart: Dayjs | null;
	interval: number;
	byMonth: number[];
	byMonthDay: number[];
	bySetPos: number[];
	byDay: ByWeekday[];
	count: number;
	until: Dayjs | null;
	tzid: string;
}

export interface StoreMethods {
	setOptions: (options: RawrOptions) => void;
	setOnChange: (onChange: (value: GeneratedRule) => void) => void;

	setRruleOpt: (rruleOpt: RuleOptionType) => void;
	setRruleEndOpt: (rruleEndOpt: EndOptionType) => void;
	setDtStart: (dtStart: Dayjs) => void;
	setFreq: (freq: number) => void;
	setByMonth: (byMonth: number | number[]) => void;
	setByMonthDay: (byDay: number | number[]) => void;
	setBySetPos: (bySetPos: number | number[]) => void;
	setByDay: (byDay: ByWeekday | ByWeekday[]) => void;
	setInterval: (interval: number) => void;
	setCount: (count: number) => void;
	setUntil: (until: Dayjs) => void;
	setTzid: (tzid: string) => void;

	generateRuleFromState: () => void;
	setRuleFromStr: (ruleStr: string) => void;
}
