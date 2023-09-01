// command + shift + L to update all instances of word at once
import iconsJson from "@twilio-paste/icons/json/icons.json";
import { Button } from "@twilio-paste/core";
import { IconLoader } from "../../utils/IconLoader";

const component = (props) => {
	let decorative = props.size !== "icon";

	let title = decorative ? props.text : props.icon;

	return (
		<Button size={props.size} variant={props.variant}>
			{(props.icon !== "" || props.icon !== "undefined") && (
				<IconLoader icon={props.icon} decorative={decorative} title={title} />
			)}

			{!decorative && <React.Fragment>{props.text}</React.Fragment>}
		</Button>
	);
};

export const ButtonWithIconComponent = {
	component: component,
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
			},
			{
				friendlyName: "Button Size",
				name: "size",
				type: "text",
				enum: ["icon", "icon_small"],
				defaultValue: "icon",
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
