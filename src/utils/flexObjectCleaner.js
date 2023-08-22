export function cleanTaskObject(task) {
	if (task) {
		let result = {
			addOns: task.addOns,
			age: task.age,
			attributes: task.attributes,
			channelType: task.channelType,
			conference: task.conference,
			dateCreated: task.dateCreated,
			dateUpdated: task.dateUpdated,
			defaultFrom: task.defaultFrom,
			formattedAttributes: task.formattedAttributes,
			incomingTransferObject: task.incomingTransferObject,
			outgoingTransferObject: task.outgoingTransferObject,
			priority: task.priority,
			queueName: task.queueName,
			queueSid: task.queueSid,
			reason: task.reason,
			routingTarget: task.routingTarget,
			sid: task.sid,
			status: task.status,
			taskChannelSid: task.taskChannelSid,
			taskChannelUniqueName: task.taskChannelUniqueName,
			taskSid: task.taskSid,
			taskStatus: task.taskStatus,
			timeout: task.timeout,
			workerSid: task.workerSid,
			workflowName: task.workflowName,
			workflowSid: task.workerSid,
			// omit these two attributes as they create circular references
			// which builder.io cannot work with.  never seen these actually used before.

			// source: task.source,
			// sourceObject: task.sourceObject,
		};

		return result;
	} else {
		return undefined;
	}
}

export function cleanWorkerObject(worker) {
	if (worker) {
		let result = {
			sid: worker.sid,
			name: worker.name,
			friendlyName: worker.friendlyName,
			attributes: worker.attributes,
			activity: {
				available: worker.activity.available,
				isCurrent: worker.activity.isCurrent,
				name: worker.activity.name,
				sid: worker.activity.sid,
			},
		};
		return result;
	} else {
		return undefined;
	}
}
