import type { Meta, StoryObj } from "@storybook/react";
import Rawr from "../components/Rawr/Rawr.tsx";
import type { GeneratedRule } from "../types";
import Values from "./Values.tsx";

const meta = {
	title: "Rawr RRR",
	component: Rawr,
	parameters: {},
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Rawr>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs = {
	options: {
		excludeFrequencies: ["HOURLY", "MINUTELY", "SECONDLY"],
	},
};

export const Basic: Story = {
	args: {
		options: {
			...defaultArgs.options,
		},
		onRuleChange: (value: GeneratedRule) => {
			console.log("onRuleChange", value);
		},
	},
	render: (args) => {
		return (
			<>
				<Rawr {...args} />
				<Values />
			</>
		);
	},
};

export const WithStartDate: Story = {
	args: {
		options: {
			...defaultArgs.options,
			useStartDate: true,
		},
		onRuleChange: (value: GeneratedRule) => {
			console.log("onRuleChange", value);
		},
	},
	render: (args) => {
		return (
			<>
				<Rawr {...args} />
				<Values />
			</>
		);
	},
};

export const WithTimeZone: Story = {
	args: {
		options: {
			...defaultArgs.options,
			useTimezones: true,
		},
		onRuleChange: (value: GeneratedRule) => {
			console.log("onRuleChange", value);
		},
	},
	render: (args) => {
		return (
			<>
				<Rawr {...args} />
				<Values />
			</>
		);
	},
};
