import { Field, Label, SelectBox, SelectBoxOption } from "@handsomebrown/stencil";
import { FrequencyOptions } from "../../lib/Freq.ts";
import Defaults from "../../store/defaults.ts";
import useRawrStore from "../../store/useRawrStore.ts";
import Interval from "./Interval.tsx";

export default function Freq() {
	const { freq, setFreq, options } = useRawrStore();
	return (
		<div className="inline-row gap-x-4">
			<Field inline={true}>
				<Label>Repeat</Label>
				<SelectBox value={freq} onChange={setFreq}>
					{FrequencyOptions(options.excludeFrequencies).map((o) => (
						<SelectBoxOption key={o.value} value={o.value}>
							{o.label}
						</SelectBoxOption>
					))}
				</SelectBox>
			</Field>

			{"interval" in Defaults.FREQ_STATE[freq] && <Interval />}
		</div>
	);
}
