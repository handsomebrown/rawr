import ByDay from "../options/ByDay.tsx";

export default function Weekly() {
	return (
		<div className="inline-row">
			<ByDay label="On" single={false} />
		</div>
	);
}
