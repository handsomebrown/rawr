import { Label, Radio, RadioField, RadioGroup } from "@handsomebrown/stencil";
import useRawrStore from "../../store/useRawrStore.ts";
import { RuleOptionType } from "../../types/enum.ts";
import ByDay from "../options/ByDay.tsx";
import ByMonthDay from "../options/ByMonthDay.tsx";
import BySetPos from "../options/BySetPos.tsx";

export default function Monthly() {
	const { rruleOpt, setRruleOpt } = useRawrStore();
	return (
		<RadioGroup value={rruleOpt} onChange={setRruleOpt}>
			<div className="inline-row gap-x-3">
				<RadioField>
					<Radio value={RuleOptionType.ByMonthDay} />
					<Label>On date(s)</Label>
				</RadioField>
				<ByMonthDay disabled={rruleOpt !== RuleOptionType.ByMonthDay} />
			</div>
			<div className="inline-row gap-x-3">
				<RadioField>
					<Radio value={RuleOptionType.BySetPos} />
					<Label>On the</Label>
				</RadioField>
				<BySetPos disabled={rruleOpt !== RuleOptionType.BySetPos} />
				<ByDay disabled={rruleOpt !== RuleOptionType.BySetPos} />
			</div>
		</RadioGroup>
	);
}
