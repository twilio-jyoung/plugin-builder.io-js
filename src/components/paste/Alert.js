// command + shift + L to update all instances of word at once
import { Alert } from "@twilio-paste/core";

export const AlertComponent = {
	component: Alert,
	componentOptions: {
		name: "Paste Alert",
		image:
			"https://raw.githubusercontent.com/tabler/tabler-icons/ffed949675ec8b825e7a6eaa45166a83bc6f8ff8/packages/icons/icons/exclamation-mark.svg",
		docsLink: "https://paste.twilio.design/components/alert",
		inputs: [
			{
				friendlyName: "Alert Message",
				name: "children",
				type: "text",
				defaultValue: "this is default alert text",
				required: true,
			},
			{
				friendlyName: "Variant",
				name: "variant",
				type: "text",
				enum: ["neutral", "warning", "error"],
				defaultValue: "neutral",
				required: true,
			},
		],
	},
};
