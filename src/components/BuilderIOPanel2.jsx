import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { Manager, withTaskContext, Actions } from "@twilio/flex-ui";
import { cleanTaskObject, cleanWorkerObject } from "../utils/flexObjectCleaner";
import { getLocalStorageValue } from "../utils/localStorage";
import { NoTasks } from "./views/NoTasks";
import { SelectATask } from "./views/SelectATask";

const BuilderIOPanel2 = (props) => {
	const [builderContentJson, setBuilderContentJson] = useState();
	const [worker, setWorker] = useState();
	const isPreviewing = useIsPreviewing();

	const manager = Manager.getInstance();
	let workerClient = manager.workerClient;

	//#region useEffect hooks
	useEffect(() => {
		let builderModelUniqueIdentifier = getLocalStorageValue("builderModelUniqueIdentifier");

		if (!builderModelUniqueIdentifier) {
			builderModelUniqueIdentifier = process.env.FLEX_BUILDERIO_MODEL_UNIQUE_IDENTIFIER;
		}

		builder
			.get(builderModelUniqueIdentifier, {
				url: location.pathname,
				cachebust: true,
				cacheSeconds: 60,
				userAttributes: {
					// set attributes that builder.io should use for targeting
					// this can be data from the task attributes, worker attributes, or hardcoded values
					demo: "se-poc",
				},
			})
			.toPromise()
			.then((content) => setBuilderContentJson(content));
	}, []);

	useEffect(() => {
		workerClient?.on("activityUpdated", (worker) => {
			setWorker(cleanWorkerObject(worker));
		});

		setWorker(cleanWorkerObject(workerClient));
	}, []);
	//#endregion

	if (!builderContentJson) {
		return <React.Fragment />;
	} else {
		// assemble data to pass to builder.io
		let data = {};

		// pass a couple of boolean helpers which make it easier to conditionally render content in builder.io
		data.hasTasks = props.tasks?.size !== undefined && props.tasks.size > 0;
		data.hasSelectedTask = props.selectedTaskSid !== undefined;

		// pass theme data (using withTheme helper):
		// https://www.twilio.com/docs/flex/developer/ui/add-component-context#add-theme-data-to-a-custom-component
		data.theme = props.theme;

		// pass the id of the selected task (using withTaskContext helper):
		// https://www.twilio.com/docs/flex/developer/ui/add-component-context#add-task-data-to-a-custom-component
		data.selectedTaskSid = data.hasSelectedTask ? props.selectedTaskSid : "";

		// pass a cleaned up copy of task data (using withTaskContext helper) minus cyclical references
		data.task = data.hasSelectedTask ? cleanTaskObject(props.task) : null;

		// pass a cleaned up copy of worker data
		data.worker = worker;

		// to simplify builder development, create static screens which will be rendered in panel2 when there are no tasks or no selected task
		if (props.tasks?.size === undefined || props.tasks.size === 0) {
			return <NoTasks />;
		}
		if (props.tasks.size > 0 && !props.selectedTaskSid) {
			return <SelectATask />;
		}

		return (
			<React.Fragment>
				{builderContentJson && (
					<BuilderComponent
						model="panel-2"
						content={isPreviewing ? null : builderContentJson}
						data={data}
						context={{
							invokeAction: async (action, payload) => {
								console.log(`${action} Action invoked from builder.io with payload:`, payload);
								await Actions.invokeAction(action, payload);
							},
						}}
					/>
				)}
			</React.Fragment>
		);
	}
};

export default withTaskContext(BuilderIOPanel2);
