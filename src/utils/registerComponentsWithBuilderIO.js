import { Builder, withChildren } from "@builder.io/react";
import configureBuilderUI from "./configureBuilderUI";
import { AlertComponent } from "../components/paste/Alert";
import { AnchorComponent } from "../components/paste/Anchor";
import { AvatarComponent } from "../components/paste/Avatar";
import { BadgeComponent } from "../components/paste/Badge";
import { ButtonComponent } from "../components/paste/Button";
import { ButtonWithIconComponent } from "../components/paste/ButtonWithIcon";
// import { ButtonGroupComponent } from "../components/paste/ButtonGroup";
import { CalloutComponent } from "../components/paste/Callout";
import { CardComponent } from "../components/paste/Card";
import { DescriptionListComponent } from "../components/paste/DescriptionList";
import { HeadingComponent } from "../components/paste/Heading";
import { IconComponent } from "../components/paste/Icon";
import { ParagraphComponent } from "../components/paste/Paragraph";
import { SeparatorComponent } from "../components/paste/Separator";
import { StackComponent } from "../components/paste/Stack";
import { TabsComponent } from "../components/paste/Tabs";
import { TextComponent } from "../components/paste/Text";
import { PolarAreaApexChartComponent } from "../components/sample/ApexChart";
import { ChromeDinoGameComponent } from "../components/sample/ChromeDinoGame";
import { TaskAttributesComponent } from "../components/sample/TaskAttributes";
import { IFrameComponent } from "../components/sample/IFrame";

function registerListOfComponents(customComponents) {
	customComponents.forEach((customComponent) => {
		Builder.registerComponent(
			customComponent.componentOptions.canHaveChildren
				? withChildren(customComponent.component)
				: customComponent.component,

			customComponent.componentOptions
		);
	});
}

export default function registerComponentsWithBuilderIO() {
	const components = [
		// paste components
		AlertComponent,
		AnchorComponent,
		AvatarComponent,
		BadgeComponent,
		// ButtonGroupComponent,
		ButtonComponent,
		ButtonWithIconComponent,
		CalloutComponent,
		CardComponent,
		DescriptionListComponent,
		HeadingComponent,
		IconComponent,
		ParagraphComponent,
		SeparatorComponent,
		StackComponent,
		TabsComponent,
		TextComponent,

		// custom components
		PolarAreaApexChartComponent,
		ChromeDinoGameComponent,
		TaskAttributesComponent,
		IFrameComponent,
	];

	registerListOfComponents(components);

	// configure builder UI to organize components into logical buckets
	configureBuilderUI(components);
}
