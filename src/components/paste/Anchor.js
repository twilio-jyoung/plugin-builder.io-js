import { Anchor } from "@twilio-paste/core";

const component = (props) => {
	return (
		<Anchor
			href={props.href}
			showExternal={props.showExternal}
			target={props.target}
			variant={props.variant}
		>
			{props.text}
		</Anchor>
	);
};

export const AnchorComponent = {
	component: component,
	componentOptions: {
		name: "Paste Anchor",
		image:
			"https://raw.githubusercontent.com/tabler/tabler-icons/ffed949675ec8b825e7a6eaa45166a83bc6f8ff8/packages/icons/icons/link.svg",
		docsLink: "https://paste.twilio.design/components/anchor",
		canHaveChildren: true,
		inputs: [
			{
				friendlyName: "Link Text",
				name: "text",
				type: "text",
				defaultValue: "Link Text",
				required: true,
			},
			{
				friendlyName: "HREF",
				name: "href",
				type: "url",
				required: true,
			},
			{
				friendlyName: "Show External Link Icon",
				name: "showExternal",
				type: "boolean",
				defaultValue: false,
			},
			{
				friendlyName: "Target",
				name: "target",
				type: "text",
				enum: ["_self", "_blank", "_parent", "_top"],
			},
			{
				friendlyName: "Variant",
				name: "variant",
				type: "text",
				enum: ["default", "inverse"],
				defaultValue: "default",
			},
		],
	},
};
