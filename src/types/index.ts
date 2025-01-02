export type SelectOptionType<T> = {
	label: string;
	value: T extends number ? number : string;
};

export type GeneratedRule = {
	rule: string[];
	text: string;
};
