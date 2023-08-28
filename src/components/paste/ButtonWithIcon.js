// command + shift + L to update all instances of word at once
import { ButtonWithIcon } from "./ButtonWithIcon.Component";
import iconsJson from "@twilio-paste/icons/json/icons.json";

export const ButtonWithIconComponent = {
	component: ButtonWithIcon,
	componentOptions: {
		name: "Paste Icon Button",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/icons.png",
		docsLink: "https://paste.twilio.design/components/button",
		inputs: [
			{
				friendlyName: "Icon Name",
				name: "icon",
				type: "text",
				defaultValue: "AcceptIcon",
				enum: iconsJson.icons.map((x) => x.name).sort(),
				required: true,
			},
			{
				friendlyName: "Button Text",
				name: "text",
				type: "text",
				defaultValue: "Button",
				required: true,
			},
			{
				friendlyName: "Button Size",
				name: "size",
				type: "text",
				enum: ["default", "small", "icon", "icon_small", "reset"],
				defaultValue: "default",
				required: true,
			},
			{
				friendlyName: "Button Variant",
				name: "variant",
				type: "text",
				enum: [
					"primary",
					"secondary",
					"inverse",
					"destructive",
					"destructive_secondary",
					"destructive_link",
					"link",
					"inverse_link",
					"primary_icon",
					"secondary_icon",
					"destructive_icon",
				],
				defaultValue: "primary",
				required: true,
			},
		],
	},
};
