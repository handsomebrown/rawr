import { Field, Label, SelectBox, SelectBoxOption } from "@handsomebrown/stencil";
import { SetPosOptions } from "../../lib/BySetPos.ts";
import useRawrStore from "../../store/useRawrStore.ts";

export default function BySetPos({ disabled = false }: { disabled?: boolean }) {
	const { bySetPos, setBySetPos } = useRawrStore();
	return (
		<Field disabled={disabled}>
			<Label className="sr-only">By Set Pos</Label>
			<SelectBox value={bySetPos[0]} onChange={setBySetPos}>
				{SetPosOptions().map((o) => (
					<SelectBoxOption key={o.value} value={o.value}>
						{o.label}
					</SelectBoxOption>
				))}
			</SelectBox>
		</Field>
	);
}
