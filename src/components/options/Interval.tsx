import { Field, Input, InputGroup, Label } from "@handsomebrown/stencil";
import { getIntervalTypeStr } from "../../lib/Interval.ts";
import useRawrStore from "../../store/useRawrStore.ts";

export default function Interval() {
	const { freq, interval, setInterval } = useRawrStore();
	return (
		<Field inline={true}>
			<Label>every</Label>
			<InputGroup>
				<Input
					value={interval}
					type="number"
					min={1}
					onChange={(e) => setInterval(Number.parseInt(e.target.value.replace(/\D/g, "")))}
				/>
				<div data-slot="add-on">{getIntervalTypeStr(freq, interval)}</div>
			</InputGroup>
		</Field>
	);
}
