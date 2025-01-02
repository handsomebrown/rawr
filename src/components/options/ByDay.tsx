import { Field, Label, SelectBox, SelectBoxOption } from "@handsomebrown/stencil";
import { WeekdayOptions } from "../../lib/ByDay.ts";
import useRawrStore from "../../store/useRawrStore.ts";

export default function ByDay({
	single = true,
	disabled = false,
	label,
}: { single?: boolean; disabled?: boolean; label?: string }) {
	const { byDay, setByDay } = useRawrStore();
	return (
		<Field disabled={disabled} inline={true}>
			{label ? <Label>{label}</Label> : <Label className="sr-only">By Weekday</Label>}
			<SelectBox value={single ? byDay[0] : byDay} onChange={setByDay} multiple={!single}>
				{WeekdayOptions.map((o) => (
					<SelectBoxOption key={o.value} value={o.value}>
						{o.label}
					</SelectBoxOption>
				))}
			</SelectBox>
		</Field>
	);
}
