import { EndOptionType } from "../types/enum.ts";

export const EndOptions = Object.entries(EndOptionType).map(([_, v]) => {
	return {
		label: v,
		value: v,
	};
});
