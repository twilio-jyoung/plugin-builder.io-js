import { Heading } from "@twilio-paste/core";

const component = (props) => (
	<Heading as={props.as} variant={props.variant} marginBottom={props.marginBottom}>
		{props.text}
	</Heading>
);

export const HeadingComponent = {
	component: component,
	componentOptions: {
		name: "Paste Heading",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/heading.png",
		docsLink: "",
		inputs: [
			{
				friendlyName: "Heading Text",
				name: "text",
				type: "text",
				defaultValue: "enter heading here...",
			},
			{
				friendlyName: "As",
				name: "as",
				type: "text",
				enum: ["h1", "h2", "h3", "h4", "h5", "h6", "div", "label", "span"],
				defaultValue: "h2",
			},
			{
				friendlyName: "Variant",
				name: "variant",
				type: "text",
				enum: ["heading10", "heading20", "heading30", "heading40", "heading50", "heading60"],
				defaultValue: "heading20",
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
		defaults: {
			bindings: {
				"component.options.color": "state.theme.tokens.textColors.colorText",
				"component.options.fontFamily": "state.theme.tokens.fonts.fontFamilyText",
				"component.options.fontSize": "state.theme.tokens.fontSizes.fontSize30",
				"component.options.fontWeight": "state.theme.tokens.fontSizes.fontWeightNormal",
				"component.options.lineHeight": "state.theme.tokens.lineHeights.lineHeight40",
			},
		},
	},
};
