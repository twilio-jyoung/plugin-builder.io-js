import { ButtonGroup } from "@twilio-paste/core/button-group";

// omitting for now.
// by default, builder wraps all components with a div.  thats not usually an issue, but because this
// component requires that it's direct child is a button, we need to omit the wrapping div.
// this is accomplished using a noWrap: true property on the button object.
// this works and the buttons group as expected, but then the individual buttons are not selectable in the visual editor.

// builder recommends that on components that require the noWrap peoperty, that we forward {...props.attributes} to the component
// https://github.com/BuilderIO/builder/blob/ee8e6f2db8ebac8a6e65838aed72280f6be4a955/packages/core/src/builder.class.ts#L666
// however, even with these props forwarding, the buttons are still not selectable in the visual editor.

// i have opened an support ticket with builder to see if there is a way to make this work.
// in the meantime, i am reverting to the default button configuration (wrapped) so that the buttons are selectable in the visual editor.
// and i am removing the button group component from the builder editor until this is resolved.

const component = (props) => {
	return <ButtonGroup attached>{props.children}</ButtonGroup>;
};

export const ButtonGroupComponent = {
	component: component,
	componentOptions: {
		name: "Paste Button Group",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/apps.png",
		docsLink: "https://paste.twilio.design/components/button-group",
		canHaveChildren: true,
		childRequirements: {
			query: { "component.name": { $in: ["Paste Button", "Paste Icon Button", "Box"] } },
		},
		inputs: [
			{
				friendlyName: "Content",
				name: "children",
				type: "uiBlocks",
				helperText: "Drag and drop additional components onto the Button Group",
			},
		],
	},
};
