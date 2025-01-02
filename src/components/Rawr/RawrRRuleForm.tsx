import { FieldGroup } from "@handsomebrown/stencil";
import useRawrStore from "../../store/useRawrStore.ts";
import FreqOptions from "../freq/FreqOptions.tsx";
import DtStart from "../options/DtStart.tsx";
import End from "../options/End.tsx";
import Freq from "../options/Freq.tsx";
import Tzid from "../options/Tzid.tsx";

export default function RawrRRuleForm() {
	const { options } = useRawrStore();
	return (
		<FieldGroup className="w-full">
			{options.useStartDate && <DtStart />}
			<Freq />
			<FreqOptions />
			<End />
			{options.useTimezones && <Tzid />}
		</FieldGroup>
	);
}
