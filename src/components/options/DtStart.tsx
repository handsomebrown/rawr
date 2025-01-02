import { DatePicker, Field, Label } from "@handsomebrown/stencil";
import dayjs from "dayjs";
import useRawrStore from "../../store/useRawrStore.ts";

export default function DtStart() {
	const { dtStart, setDtStart } = useRawrStore();
	return (
		<Field inline={true}>
			<Label>Starting on</Label>
			<DatePicker selected={dtStart?.toDate()} onChange={(date) => setDtStart(dayjs(date))} />
		</Field>
	);
}
