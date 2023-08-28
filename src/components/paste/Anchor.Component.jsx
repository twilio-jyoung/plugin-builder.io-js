import React from "react";
import { Anchor } from "@twilio-paste/core";

export const TextAnchor = (props) => {
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
