import React from "react";

import { SideLink, Actions } from "@twilio/flex-ui";

const ConfigurationSideLink = (props) => {
	if (props == null || props === undefined) {
		return <></>;
	}

	return (
		<SideLink
			icon="Settings"
			iconActive="SettingsBold"
			isActive={props.activeView === "builder-config"}
			onClick={() => Actions.invokeAction("NavigateToView", { viewName: "builder-config" })}
		>
			Builder.io Configuration
		</SideLink>
	);
};

export default ConfigurationSideLink;
