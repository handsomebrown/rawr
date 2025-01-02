import { Field, Label, SelectBox, SelectBoxOption } from "@handsomebrown/stencil";
import { MonthOptions } from "../../lib/ByMonth.ts";
import useRawrStore from "../../store/useRawrStore.ts";

export default function ByMonth({ disabled = false, label }: { disabled?: boolean; label?: string }) {
	const { byMonth, setByMonth } = useRawrStore();
	return (
		<Field disabled={disabled} inline={true}>
			{label ? <Label>{label}</Label> : <Label className="sr-only">By Month</Label>}
			<SelectBox value={byMonth} onChange={setByMonth} multiple={true}>
				{MonthOptions.map((o) => (
					<SelectBoxOption key={o.value} value={o.value}>
						{o.label}
					</SelectBoxOption>
				))}
			</SelectBox>
		</Field>
	);
}
