import { useState } from "react";
import { Tab, TabList, Tabs } from "@twilio-paste/core";
import { BuilderBlocks } from "@builder.io/react";

const component = (props) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Tabs orientation={props.vertical ? "vertical" : "horizontal"}>
			<TabList aria-label="My tabs">
				{props.tabs?.map((item, index) => {
					return (
						<Tab key={index} id={index.toString()} onClick={() => setActiveTab(index)}>
							{item.label}
						</Tab>
					);
				})}
			</TabList>

			{props.tabs?.length && (
				// <TabPanels paddingTop="space20">
				<BuilderBlocks
					parentElementId={props.builderBlock?.id}
					dataPath={`component.options.tabs.${activeTab}.content`}
					blocks={props.tabs[activeTab].content}
				/>
				// </TabPanels>
			)}
		</Tabs>
	);
};

export const TabsComponent = {
	component: component,
	componentOptions: {
		name: "Paste Tabs",
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/folder.png",
		docsLink: "https://paste.twilio.design/components/tabs",
		inputs: [
			{
				name: "tabs",
				type: "list",
				subFields: [
					{
						name: "label",
						type: "text",
						defaultValue: "New tab",
					},
					{
						name: "content",
						type: "uiBlocks",
						defaultValue: [],
					},
				],
				defaultValue: [
					{
						label: "Tab 1",
						content: [],
					},
				],
			},
			{
				friendlyName: "Is Vertical Tabs?",
				name: "vertical",
				type: "boolean",
				defaultValue: false,
				helperText: "Changing this setting will require you to refresh the preview window.",
			},
		],
	},
};
