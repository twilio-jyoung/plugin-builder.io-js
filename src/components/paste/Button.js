// command + shift + L to update all instances of word at once
//TODO: Add icon support for buttons
import { Button } from "@twilio-paste/core";

// code necessary to get buttongroups working.  see buttongroup.js for more info
// const component = (props) => {
// 	return (
// 		<Button variant={props.variant} size={props.size} {...props.attributes}>
// 			{props.children}
// 		</Button>
// 	);
// };

export const ButtonComponent = {
	component: Button,
	componentOptions: {
		name: "Paste Button",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/rectangle.png",
		docsLink: "https://paste.twilio.design/components/button",
		// buttongroup issue resolved by adding this, but creates another problem.  see buttongroup.js for more info
		// noWrap: true,
		inputs: [
			{
				friendlyName: "Button Text",
				name: "children",
				type: "text",
				defaultValue: "Button",
				required: true,
			},
			{
				friendlyName: "Size",
				name: "size",
				type: "text",
				enum: ["default", "small", "reset"],
				defaultValue: "default",
				required: true,
			},
			{
				friendlyName: "Variant",
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
				],
				defaultValue: "primary",
				required: true,
			},
		],
	},
};
