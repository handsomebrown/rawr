import type { Dayjs } from "dayjs";
import type { GeneratedRule } from "../../types";

export type RawrOptions = {
	useStartDate?: boolean;
	initialStartDate?: Dayjs | Date | string;
	useTimezones?: boolean;
	defaultTimeZone?: string;
	defaultFrequency?: string;
	excludeFrequencies?: string[];
};

export type RawrProps = {
	options?: RawrOptions;
	rruleString?: string;
	onRuleChange: (value: GeneratedRule) => void;
};
