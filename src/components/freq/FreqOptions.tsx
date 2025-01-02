import { Frequency } from "rrule";
import useRawrStore from "../../store/useRawrStore.ts";
import Monthly from "./Monthly.tsx";
import Weekly from "./Weekly.tsx";
import Yearly from "./Yearly.tsx";

export default function FreqOptions() {
	const { freq } = useRawrStore();
	return (
		<div className="ml-16">
			{freq === Frequency.YEARLY && <Yearly />}
			{freq === Frequency.MONTHLY && <Monthly />}
			{freq === Frequency.WEEKLY && <Weekly />}
		</div>
	);
}
