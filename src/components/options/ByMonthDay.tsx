import { Field, Label, SelectBox, SelectBoxOption } from "@handsomebrown/stencil";
import { DaysOptions } from "../../lib/ByMonthDay.ts";
import useRawrStore from "../../store/useRawrStore.ts";

export default function ByMonthDay({ disabled = false }: { disabled?: boolean }) {
	const { byMonthDay, setByMonthDay } = useRawrStore();
	return (
		<Field disabled={disabled}>
			<Label className="sr-only">By Month Day</Label>
			<SelectBox value={byMonthDay} onChange={setByMonthDay} multiple={true}>
				{DaysOptions().map((o) => (
					<SelectBoxOption key={o.value} value={o.value}>
						{o.label}
					</SelectBoxOption>
				))}
			</SelectBox>
		</Field>
	);
}
