import { fontSizes, fontWeights, lineHeights } from "@twilio-paste/design-tokens";
import sortOptionNames, { spacingSizes } from "../../utils/designTokenHelper";
import { Text } from "@twilio-paste/core";

const component = (props) => {
	return (
		<Text
			as={props.as}
			color={props.color}
			fontFamily={props.fontFamily}
			fontSize={props.fontSize}
			fontWeight={props.fontWeight}
			lineHeight={props.lineHeight}
			margin={props.margin}
			padding={props.padding}
		>
			{props.text}
		</Text>
	);
};

let fontSizesSorted = sortOptionNames(fontSizes);
let fontWeightsSorted = sortOptionNames(fontWeights);
let lineHeightsSorted = sortOptionNames(lineHeights);

export const TextComponent = {
	component: component,
	componentOptions: {
		// the text component does not expose a property for the actual text?
		// therefore created a custom component which wraps text and exposes a text property
		name: "Paste Text",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/typography.png",
		docsLink: "https://paste.twilio.design/primitives/text",
		inputs: [
			{
				friendlyName: "Text",
				name: "text",
				type: "text",
				defaultValue: "please enter some text...",
				required: true,
				richText: false,
			},
			{
				friendlyName: "As",
				name: "as",
				type: "text",
				enum: ["span", "div", "label"],
				defaultValue: "span",
				required: true,
				advanced: true,
			},
			{
				friendlyName: "Display",
				name: "display",
				type: "text",
				enum: ["block", "inline-block"],
				defaultValue: "block",
				required: true,
				advanced: true,
			},
			{
				friendlyName: "Color",
				name: "color",
				type: "color",
			},
			{
				friendlyName: "Font Family",
				name: "fontFamily",
				type: "text",
			},
			{
				friendlyName: "Font Size",
				name: "fontSize",
				type: "text",
				enum: fontSizesSorted,
			},
			{
				friendlyName: "Font Weight",
				name: "fontWeight",
				type: "text",
				enum: fontWeightsSorted,
			},
			{
				friendlyName: "Line Height",
				name: "lineHeight",
				type: "text",
				enum: lineHeightsSorted,
			},
			{
				friendlyName: "Margin",
				name: "margin",
				type: "text",
				enum: spacingSizes,
				defaultValue: "space0",
			},
			{
				friendlyName: "Padding",
				name: "padding",
				type: "text",
				enum: spacingSizes,
				defaultValue: "space0",
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
