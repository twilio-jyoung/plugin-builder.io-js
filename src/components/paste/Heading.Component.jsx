import React from "react";
import { Heading } from "@twilio-paste/core";

export const PasteHeading = (props) => (
	<Heading
		as={props.as}
		variant={props.variant}
		marginBottom={props.marginBottom}
	>
		{props.text}
	</Heading>
);
