// command + shift + L to update all instances of word at once
import { Badge } from "@twilio-paste/core";

export const BadgeComponent = {
	component: Badge,
	componentOptions: {
		name: "Paste Badge",
		image:
			"https://raw.githubusercontent.com/tabler/tabler-icons/ffed949675ec8b825e7a6eaa45166a83bc6f8ff8/packages/icons/icons/badge.svg",
		docsLink: "https://paste.twilio.design/components/badge",
		inputs: [
			{
				friendlyName: "Badge Text",
				name: "children",
				type: "text",
				defaultValue: "this is default badge text",
			},
			{
				friendlyName: "Variant",
				name: "variant",
				type: "text",
				enum: ["neutral", "warning", "error", "success", "new"],
				defaultValue: "neutral",
				required: true,
			},
			{
				friendlyName: "URL",
				name: "href",
				type: "text",
			},
			{
				friendlyName: "Render As",
				name: "as",
				type: "text",
				enum: ["span", "button", "a"],
				defaultValue: "span",
				advanced: true,
			},
		],
	},
};
