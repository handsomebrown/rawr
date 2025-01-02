import { Field, Input, InputGroup, Label } from "@handsomebrown/stencil";
import useRawrStore from "../../store/useRawrStore.ts";

export default function Count({ disabled = false }: { disabled?: boolean }) {
	const { count, setCount } = useRawrStore();
	return (
		<Field disabled={disabled}>
			<Label className="sr-only">Count</Label>
			<InputGroup>
				<Input min={1} type="number" value={count} onChange={(e) => setCount(Number.parseInt(e.target.value))} />
				<div data-slot="add-on">occurrences</div>
			</InputGroup>
		</Field>
	);
}
