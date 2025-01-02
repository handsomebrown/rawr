import { Field, Label, SelectBox, SelectBoxOption } from "@handsomebrown/stencil";
import { TimezoneOptions } from "../../lib/Tzid.ts";
import useRawrStore from "../../store/useRawrStore.ts";

export default function Tzid({ disabled = false }: { disabled?: boolean }) {
	const { tzid, setTzid } = useRawrStore();
	return (
		<Field disabled={disabled} inline={true}>
			<Label>Timezone</Label>
			<SelectBox value={tzid} onChange={setTzid}>
				{TimezoneOptions.map((o) => (
					<SelectBoxOption key={o.value} value={o.value}>
						{o.label}
					</SelectBoxOption>
				))}
			</SelectBox>
		</Field>
	);
}
