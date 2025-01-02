import { DatePicker, Field, Label } from "@handsomebrown/stencil";
import dayjs from "dayjs";
import useRawrStore from "../../store/useRawrStore.ts";

export default function Until({ disabled = false }: { disabled?: boolean }) {
	const { until, setUntil } = useRawrStore();
	return (
		<Field disabled={disabled}>
			<Label className="sr-only">until</Label>
			<DatePicker selected={until?.toDate()} onChange={(date) => setUntil(dayjs(date))} />
		</Field>
	);
}
