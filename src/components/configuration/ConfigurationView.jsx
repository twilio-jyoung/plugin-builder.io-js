import {
	Form,
	FormSection,
	FormSectionHeading,
	FormControl,
	FormActions,
} from "@twilio-paste/core/form";
import { Input } from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import { Button } from "@twilio-paste/core/button";
import { getLocalStorageValue, setLocalStorageValue } from "../../utils/localStorage";
import { Actions } from "@twilio/flex-ui";

const handleSubmit = (event) => {
	event.preventDefault();
	let value = document.getElementById("builder-environment-key").value;
	setLocalStorageValue("builderEnvironmentKey", value);
	window.location.reload();
};

const handleCancel = (event) => {
	event.preventDefault();
	if (confirm("Are you sure you want to cancel?")) {
		Actions.invokeAction("NavigateToView", { viewName: "agent-desktop" });
	}
};

const ConfigurationView = () => {
	let defaultValue = getLocalStorageValue("builderEnvironmentKey");

	if (!defaultValue) {
		defaultValue = process.env.FLEX_BUILDERIO_API_KEY;
	}

	return (
		<div style={{ margin: 20, minWidth: 300 }}>
			<Form action="">
				<FormControl>
					<Label htmlFor="builder-environment-key">Builder Environment Key</Label>
					<Input id="builder-environment-key" type="text" defaultValue={defaultValue} />
				</FormControl>
				<FormActions>
					<Button variant="primary" onClick={handleSubmit} type="submit">
						Submit
					</Button>
					<Button variant="secondary" onClick={handleCancel}>
						Cancel
					</Button>
				</FormActions>
			</Form>
		</div>
	);
};

export default ConfigurationView;
