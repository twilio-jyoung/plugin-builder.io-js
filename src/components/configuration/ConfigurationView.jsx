import { Form, FormControl, FormActions } from "@twilio-paste/core/form";
import { Input } from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import { Button } from "@twilio-paste/core/button";
import { getLocalStorageValue, setLocalStorageValue } from "../../utils/localStorage";
import { Actions } from "@twilio/flex-ui";

const getCurrentConfig = (value, defaultValue) => {
	let return_value = getLocalStorageValue(value) || defaultValue;
};

const handleSubmit = (event) => {
	event.preventDefault();

	let environmentKeyValue = document.getElementById("builder-environment-key").value;
	setLocalStorageValue("builderEnvironmentKey", environmentKeyValue);

	let modelUniqueIdentifierValue = document.getElementById("builder-model-unique-identifier").value;
	setLocalStorageValue("builderModelUniqueIdentifier", modelUniqueIdentifierValue);

	window.location.reload();
};

const handleCancel = (event) => {
	event.preventDefault();
	if (confirm("Are you sure you want to cancel?")) {
		Actions.invokeAction("NavigateToView", { viewName: "agent-desktop" });
	}
};

const ConfigurationView = () => {
	let environmentKeyDefaultValue =
		getLocalStorageValue("builderEnvironmentKey") || process.env.FLEX_BUILDERIO_API_KEY;

	let modelUniqueIdentifierDefaultValue =
		getLocalStorageValue("builderModelUniqueIdentifier") ||
		process.env.FLEX_BUILDERIO_MODEL_UNIQUE_IDENTIFIER;

	return (
		<div style={{ margin: 20, minWidth: 300 }}>
			<Form action="">
				<FormControl>
					<Label htmlFor="builder-environment-key">Builder Environment Key</Label>
					<Input
						id="builder-environment-key"
						type="text"
						defaultValue={environmentKeyDefaultValue}
					/>
					<br />
					<Label htmlFor="builder-model-unique-identifier">Builder Model Unique Identifier</Label>
					<Input
						id="builder-model-unique-identifier"
						type="text"
						defaultValue={modelUniqueIdentifierDefaultValue}
					/>
				</FormControl>
				<FormActions>
					<Button variant="primary" onClick={handleSubmit} type="submit">
						Update
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
