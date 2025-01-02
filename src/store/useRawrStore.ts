import dayjs, { type Dayjs } from "dayjs";
import { create } from "zustand";
import rruleStrToState from "../util/rrule-str-to-state.ts";
import stateToRrule from "../util/state-to-rrule.ts";
import Defaults from "./defaults.ts";
import type { StoreState } from "./store-state.ts";

const useRawrStore = create<StoreState>()((set, get) => ({
	options: Defaults.OPTIONS,
	setOptions: (options) => set((state) => ({ options: { ...state.options, ...options } })),

	onChange: (value) => get().onChange(value),
	setOnChange: (onChange) => set({ onChange }),

	rruleOpt: Defaults.STORE_STATE.rruleOpt,
	setRruleOpt: (rruleOpt) => {
		set({ rruleOpt });
		get().generateRuleFromState();
	},

	rruleEndOpt: Defaults.STORE_STATE.rruleEndOpt,
	setRruleEndOpt: (rruleEndOpt) => {
		set({ rruleEndOpt });
		get().generateRuleFromState();
	},

	dtStart: dayjs(),
	setDtStart: (dtStart) => {
		set({ dtStart });
		get().generateRuleFromState();
	},

	freq: Defaults.STORE_STATE.freq,
	setFreq: (freq) => {
		set((state) => ({
			...state,
			...Defaults.STORE_STATE,
			dtStart: state.dtStart,
			rruleEndOpt: state.rruleEndOpt,
			count: state.count,
			until: state.until,
			...Defaults.FREQ_STATE[freq],
		}));
		get().generateRuleFromState();
	},

	byMonth: Defaults.STORE_STATE.byMonth,
	setByMonth: (byMonth) => {
		if (Array.isArray(byMonth)) {
			set({ byMonth });
		} else {
			set({ byMonth: [byMonth] });
		}
		get().generateRuleFromState();
	},

	byMonthDay: Defaults.STORE_STATE.byMonthDay,
	setByMonthDay: (byMonthDay) => {
		if (Array.isArray(byMonthDay)) {
			set({ byMonthDay });
		} else {
			set({ byMonthDay: [byMonthDay] });
		}
		get().generateRuleFromState();
	},

	bySetPos: Defaults.STORE_STATE.bySetPos,
	setBySetPos: (bySetPos) => {
		if (Array.isArray(bySetPos)) {
			set({ bySetPos });
		} else {
			set({ bySetPos: [bySetPos] });
		}
		get().generateRuleFromState();
	},

	byDay: Defaults.STORE_STATE.byDay,
	setByDay: (byDay) => {
		if (Array.isArray(byDay)) {
			set({ byDay });
		} else {
			set({ byDay: [byDay] });
		}
		get().generateRuleFromState();
	},

	interval: Defaults.STORE_STATE.interval,
	setInterval: (interval: number) => {
		set({ interval });
		get().generateRuleFromState();
	},

	count: Defaults.STORE_STATE.count,
	setCount: (count: number) => {
		set({ count });
		get().generateRuleFromState();
	},

	until: Defaults.STORE_STATE.until,
	setUntil: (until: Dayjs) => {
		set({ until });
		get().generateRuleFromState();
	},

	tzid: Defaults.STORE_STATE.tzid,
	setTzid: (tzid: string) => {
		set({ tzid });
		get().generateRuleFromState();
	},

	generated: Defaults.GENERATED_RULE,
	generateRuleFromState: () => {
		const { rruleOpt, rruleEndOpt, dtStart, freq, byMonth, byMonthDay, bySetPos, byDay, interval, count, until, tzid } =
			get();

		if (!dtStart || freq === undefined) {
			return;
		}

		const output = stateToRrule({
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
		});

		set({ generated: output });
		get().onChange(output);
	},

	setRuleFromStr: (rruleString) => {
		const newState = rruleStrToState(rruleString);

		const useStartDate = get().options.useStartDate;
		if (!useStartDate && newState.dtStart) {
			newState.dtStart = null;
		}

		set((state) => ({
			...state,
			...Defaults.STORE_STATE,
			...Defaults.FREQ_STATE[newState.freq],
			...newState,
		}));
		get().generateRuleFromState();
	},
}));

export default useRawrStore;
