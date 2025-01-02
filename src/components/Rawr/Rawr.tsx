import { Stencil } from "@handsomebrown/stencil";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import { useEffect } from "react";
import { Frequency } from "rrule";
import Defaults from "../../store/defaults.ts";
import useRawrStore from "../../store/useRawrStore.ts";
import type { RawrProps } from "./Rawr.types.ts";
import RawrRRuleForm from "./RawrRRuleForm.tsx";

dayjs.extend(timezone);

export default function Rawr({ options, rruleString, onRuleChange }: RawrProps) {
	const { setDtStart, setFreq, setOptions, setTzid, setRuleFromStr, setOnChange } = useRawrStore();

	// biome-ignore lint/correctness/useExhaustiveDependencies: no need to monitor all
	useEffect(() => {
		if (onRuleChange) {
			setOnChange(onRuleChange);
		}

		if (options) {
			if (rruleString) {
				setRuleFromStr(rruleString);
			} else {
				if (options.useStartDate) {
					if (options.initialStartDate !== undefined) {
						if (dayjs(options.initialStartDate).isValid()) {
							setDtStart(dayjs(options.initialStartDate));
						} else {
							throw new Error("Invalid initialStartDate in options");
						}
					}
				}

				if (options.defaultFrequency === undefined) {
					setFreq(Frequency[Defaults.OPTIONS.defaultFrequency as keyof typeof Frequency]);
				} else {
					setFreq(Frequency[options.defaultFrequency as keyof typeof Frequency]);
				}

				if (options.useTimezones) {
					if (options.defaultTimeZone) {
						setTzid(options.defaultTimeZone);
					} else {
						setTzid(dayjs.tz.guess());
					}
				}

				setOptions(options);
			}
		}
	}, [options, rruleString, onRuleChange]);

	return (
		<Stencil>
			<RawrRRuleForm />
		</Stencil>
	);
}
