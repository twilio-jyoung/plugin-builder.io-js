import { Separator } from "@twilio-paste/core/separator";
import { spacingSizes } from "../../utils/designTokenHelper";

// vertical separator not supported on the version of paste we are using, so we are using a horizontal separator

const component = (props) => {
	// return props.orientation === "horizontal" ? (
	return <Separator orientation="horizontal" verticalSpacing={props.verticalSpacing} />;
	// ) : (
	// 	<Separator orientation="vertical" horizontalSpacing={props.horizontalSpacing} />
	// );
};

export const SeparatorComponent = {
	component: component,
	componentOptions: {
		name: "Paste Separator",
		image:
			"https://raw.githubusercontent.com/tabler/tabler-icons/ffed949675ec8b825e7a6eaa45166a83bc6f8ff8/packages/icons/icons/separator.svg",
		docsLink: "https://paste.twilio.design/components/separator",
		inputs: [
			// {
			// 	friendlyName: "Orientation",
			// 	name: "orientation",
			// 	type: "text",
			// 	// enum: ["horizontal", "vertical"],
			// 	defaultValue: "horizontal",
			// },
			// {
			// 	friendlyName: "Horizontal Spacing",
			// 	name: "horizontalSpacing",
			// 	type: "text",
			// 	enum: spacingSizes,
			// 	defaultValue: "space60",
			// 	showIf: (options) => {
			// 		return options.get("orientation") === "vertical";
			// 	},
			// },
			{
				friendlyName: "Vertical Spacing",
				name: "verticalSpacing",
				type: "text",
				enum: spacingSizes,
				defaultValue: "space60",
				// showIf: (options) => {
				// 	return options.get("orientation") === "horizontal";
				// },
			},
			{
				friendlyName: "Margin",
				name: "margin",
				type: "text",
				enum: spacingSizes,
				defaultValue: "space0",
				hideFromUI: true,
			},
		],
		defaultStyles: {
			marginTop: null,
		},
	},
};
