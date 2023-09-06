import { Builder } from "@builder.io/react";

export default function configureBuilderUI(components) {
	Builder.register("editor.settings", {
		customInsertMenu: true,
		// hideStyleTab: false, // Hide the style tab
		// hideMainTabs: false, // Hide all main tabs
		// hideDataTab: false, // Hide the data tab
		// hideOptionsTab: false, // Hide the options tab
		// hideToolbar: false, // Hide the main toolbar
		hideHeatMap: true, // Hide the heatmap button
		// hidePageUrlEditor: false, // Hide the page URL editor
		hideAnimateTab: true, // Hide the animate tab
		// hideInsertTab: false, // Hide the insert tab
		// hideTargeting: false, // Hide the targeting UI
		// hideHelpWidget: false, // Hide help widget
		// hideCommentsTab: true, // Hide the comments tab
	});

	// i want paste components to be added in a specific order
	// but if we forget to add a new paste component to the ordered list, it wont be displayed in this bucket, which would be bad
	let orderedPasteComponents = [
		// txt
		{ name: "Paste Text" },
		{ name: "Paste Heading" },
		{ name: "Paste Paragraph" },
		// txt2
		{ name: "Paste Anchor" },
		{ name: "Paste Badge" },
		{ name: "Paste Separator" },
		// advanced txt
		{ name: "Paste Alert" },
		{ name: "Paste Callout" },
		{ name: "Paste Description List" },
		// containers
		{ name: "Paste Card" },
		{ name: "Paste Tabs" },
		{ name: "Paste Stack" },
		// icons / images
		{ name: "Paste Button" },
		{ name: "Paste Icon" },
		{ name: "Paste Avatar" },
		//
		{ name: "Paste Icon Button" },
	];

	// to get around this, we need to do a series of annoying steps.
	// first, we'll take the ordered list and get just the names of the components rather than the full object and stuff into an array
	let orderedPasteComponentNames = orderedPasteComponents.map((x) => x.name);

	// next, we'll get the list of all paste components and stuff those into an array
	let allPasteComponentNames = components
		.filter((x) => x.componentOptions.name.startsWith("Paste"))
		.map((x) => x.componentOptions.name);

	// then we'll find the list of paste components that are not in the ordered list
	let nonOrderedPasteComponentNames = allPasteComponentNames.filter(
		(x) => !orderedPasteComponentNames.includes(x)
	);

	// then we'll take that list, and convert it back to the full object necessary to add to the insert menu
	let nonOrderedPasteComponents = nonOrderedPasteComponentNames.map((x) => ({ name: x }));

	// then we'll build a combined array with the ordered list first, and the non-ordered list second
	let pasteComponents = [...orderedPasteComponents, ...nonOrderedPasteComponents];

	Builder.register("insertMenu", {
		name: "Twilio Paste Components",
		items: pasteComponents,
	});

	// dynamically add all components without a Paste prefix to a Custom Components bucket
	Builder.register("insertMenu", {
		name: "Twilio Custom Components",
		items: components
			.filter((x) => x.componentOptions.name.startsWith("Paste") === false)
			.map((x) => ({ name: x.componentOptions.name })),
	});

	// manually put builder components into a bucket rather than spread accross multiple meaningless buckets
	Builder.register("insertMenu", {
		name: "Builder Components",
		items: [
			// built-ins
			{ name: "Columns" },
			{ name: "Box" },
			{ name: "Section" },
			{ name: "Text" },
			{ name: "Image" },
			{ name: "Video" },
			{ name: "Embed" },
			{ name: "Slot" },
			{ name: "Symbol" },
			{ name: "Custom Code" },
			// widgets
			{ name: "Builder:Carousel" },
			{ name: "Builder:Masonry" },
			{ name: "Builder:Accordion" },
		],
	});

	// manually create a new bucket for builder's native form components, less commonly used than the other buckets
	// but maybe eventually useful...
	Builder.register("insertMenu", {
		name: "Builder Form Components",
		items: [
			// built-ins
			{ name: "Form:Form" },
			{ name: "Form:Label" },
			{ name: "Form:Input" },
			{ name: "Form:Select" },
			{ name: "Form:TextArea" },
			{ name: "Form:SubmitButton" },
		],
	});
}
