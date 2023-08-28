import { CodeBlock } from "@twilio-paste/core/code-block";
import { withTaskContext } from "@twilio/flex-ui";
import { cleanTaskObject } from "../../utils/flexObjectCleaner";

const TaskAttributes = (props) => {
	return (
		<CodeBlock
			variant="multi-line"
			language="json"
			code={JSON.stringify(cleanTaskObject(props.task), null, 2)}
		/>
	);
};

export default withTaskContext(TaskAttributes);
