import React from "react";
import { Button } from "@twilio-paste/core";
import { IconLoader } from "../../utils/IconLoader";

export const ButtonWithIcon = (props) => {
	let decorative = props.size !== "icon";

	let title = decorative ? props.text : props.icon;

	return (
		<Button size={props.size} variant={props.variant}>
			{(props.icon !== "" || props.icon !== "undefined") && (
				<IconLoader icon={props.icon} decorative={decorative} title={title} />
			)}

			{!decorative && <React.Fragment>{props.text}</React.Fragment>}
		</Button>
	);
};
