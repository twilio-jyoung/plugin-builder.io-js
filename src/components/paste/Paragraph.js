// command + shift + L to update all instances of word at once
import { Paragraph } from "@twilio-paste/core";

export const ParagraphComponent = {
	component: Paragraph,
	componentOptions: {
		name: "Paste Paragraph",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/typography.png",
		docsLink: "https://paste.twilio.design/primitives/text",
		inputs: [
			{
				friendlyName: "Text",
				name: "children",
				type: "text",
				defaultValue: "enter text here...",
			},
			{
				friendlyName: "Remove Bottom Margin?",
				name: "marginBottom",
				type: "text",
				defaultValue: null,
				enum: [
					{ label: "Yes", value: "space0" },
					{ label: "No", value: "" },
				],
				onChange: (options) => {
					if (options.get("marginBottom") === "") {
						options.set("marginBottom", null);
					}
				},
			},
		],
	},
};
