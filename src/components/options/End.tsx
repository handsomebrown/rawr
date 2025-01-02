import { Field, Label, SelectBox, SelectBoxOption } from "@handsomebrown/stencil";
import { EndOptions } from "../../lib/End.ts";
import useRawrStore from "../../store/useRawrStore.ts";
import { EndOptionType } from "../../types/enum.ts";
import Count from "./Count.tsx";
import Until from "./Until.tsx";

export default function End() {
	const { rruleEndOpt, setRruleEndOpt } = useRawrStore();
	return (
		<div className="inline-row gap-x-3">
			<Field inline={true}>
				<Label>Ending</Label>
				<SelectBox value={rruleEndOpt} onChange={setRruleEndOpt}>
					{EndOptions.map((o) => (
						<SelectBoxOption key={o.value} value={o.value}>
							{o.label}
						</SelectBoxOption>
					))}
				</SelectBox>
			</Field>
			{rruleEndOpt === EndOptionType.After && <Count disabled={rruleEndOpt !== EndOptionType.After} />}
			{rruleEndOpt === EndOptionType.On && <Until disabled={rruleEndOpt !== EndOptionType.On} />}
		</div>
	);
}
