import { Callout, CalloutHeading, CalloutText } from "@twilio-paste/core";

const component = (props) => {
	return (
		<Callout variant={props.variant}>
			<CalloutHeading as={props.headingAs}>{props.headingText}</CalloutHeading>
			<CalloutText>{props.bodyText}</CalloutText>
		</Callout>
	);
};

export const CalloutComponent = {
	component: component,
	componentOptions: {
		name: "Paste Callout",
		image:
			"https://raw.githubusercontent.com/tabler/tabler-icons/ffed949675ec8b825e7a6eaa45166a83bc6f8ff8/packages/icons/icons/rectangle.svg",
		docsLink: "https://paste.twilio.design/components/button",
		inputs: [
			{
				friendlyName: "Heading Text",
				name: "headingText",
				type: "text",
				defaultValue: "Heading Text",
				required: true,
			},
			{
				friendlyName: "Body Text",
				name: "bodyText",
				type: "text",
				defaultValue: "Body Text",
				required: true,
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
				friendlyName: "Heading Rendered As",
				name: "headingAs",
				type: "text",
				enum: ["h1", "h2", "h3", "h4", "h5", "h6", "div", "label", "span", "header"],
				defaultValue: "h2",
				advanced: true,
			},
		],
	},
};
