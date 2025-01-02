import { Label, Radio, RadioField, RadioGroup } from "@handsomebrown/stencil";
import useRawrStore from "../../store/useRawrStore.ts";
import { RuleOptionType } from "../../types/enum.ts";
import ByDay from "../options/ByDay.tsx";
import ByMonth from "../options/ByMonth.tsx";
import ByMonthDay from "../options/ByMonthDay.tsx";
import BySetPos from "../options/BySetPos.tsx";

export default function Yearly() {
	const { rruleOpt, setRruleOpt } = useRawrStore();
	return (
		<RadioGroup value={rruleOpt} onChange={setRruleOpt} className={"space-y-6"}>
			<div className="inline-row gap-x-3">
				<RadioField>
					<Radio value={RuleOptionType.ByMonthDay} />
					<Label>On</Label>
				</RadioField>
				<ByMonth disabled={rruleOpt !== RuleOptionType.ByMonthDay} />
				<ByMonthDay disabled={rruleOpt !== RuleOptionType.ByMonthDay} />
			</div>
			<div className="inline-row gap-x-3">
				<RadioField>
					<Radio value={RuleOptionType.BySetPos} />
					<Label>On the</Label>
				</RadioField>
				<BySetPos disabled={rruleOpt !== RuleOptionType.BySetPos} />
				<ByDay disabled={rruleOpt !== RuleOptionType.BySetPos} />
				<ByMonth disabled={rruleOpt !== RuleOptionType.BySetPos} label="on" />
			</div>
		</RadioGroup>
	);
}
