import { Stack } from "@twilio-paste/core/stack";
import { spacingSizes } from "../../utils/designTokenHelper";

const component = (props) => {
	return (
		<Stack orientation={props.orientation} spacing={props.spacing}>
			{props.children}
		</Stack>
	);
};

export const StackComponent = {
	component: component,
	componentOptions: {
		name: "Paste Stack",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/stack-3.png",
		docsLink: "https://paste.twilio.design/components/stack",
		canHaveChildren: true,
		inputs: [
			{
				friendlyName: "Orientation",
				name: "orientation",
				type: "text",
				enum: ["horizontal", "vertical"],
				defaultValue: "horizontal",
			},
			{
				friendlyName: "Spacing",
				name: "spacing",
				type: "text",
				enum: spacingSizes,
				defaultValue: "space40",
			},
			{
				friendlyName: "Content",
				name: "children",
				type: "uiBlocks",
				helperText: "Drag and drop additional components onto the Stack",
			},
		],
		defaultStyles: {
			minHeight: "30px",
		},
	},
};
