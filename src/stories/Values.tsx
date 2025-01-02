import useRawrStore from "../store/useRawrStore.ts";

export default function Values() {
	const {
		generated,
		rruleOpt,
		rruleEndOpt,
		dtStart,
		freq,
		byMonth,
		byMonthDay,
		bySetPos,
		byDay,
		interval,
		count,
		until,
		tzid,
	} = useRawrStore();
	return (
		<div className="mt-6 border border-zinc-300 p-4 rounded-lg">
			<h2 className="font-bold mb-2">Store Values</h2>
			<dl className="divide-y divide-zinc-200 border-t border-zinc-300">
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">Rule Text</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{generated.text}</dd>
				</div>
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">Rule String</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{generated.rule.join(" ")}</dd>
				</div>
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">DTStart</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{dtStart?.format("YYYY-MM-DD")}</dd>
				</div>
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">Freq</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{freq}</dd>
				</div>
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">Rule Option</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{rruleOpt}</dd>
				</div>
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">ByMonth</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{byMonth.join(", ")}</dd>
				</div>
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">ByMonthDay</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{byMonthDay.join(", ")}</dd>
				</div>
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">BySetPos</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{bySetPos.join(", ")}</dd>
				</div>
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">ByDay</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{byDay.join(", ")}</dd>
				</div>
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">Interval</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{interval}</dd>
				</div>
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">End Option</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{rruleEndOpt}</dd>
				</div>
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">Count</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{count}</dd>
				</div>
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">Until</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{until?.format("YYYY-MM-DD")}</dd>
				</div>
				<div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium">Tzid</dt>
					<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{tzid}</dd>
				</div>
			</dl>
		</div>
	);
}
