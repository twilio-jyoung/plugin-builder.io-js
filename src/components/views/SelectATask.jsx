import { Card, Heading, Paragraph } from "@twilio-paste/core";

export const SelectATask = () => {
	return (
		<>
			<div style={{ width: "500px", margin: "auto" }}>
				<Card>
					<Heading as="h2" variant="heading20">
						Select a Task!
					</Heading>
					<Paragraph>
						You have been assigned a task, but have not accepted it yet. Please accept the task by
						pressing the accept button.
					</Paragraph>
				</Card>
			</div>
			<div style={{ width: "500px", alignSelf: "end", margin: "50px" }}>
				<img
					src="https://d3cy9zhslanhfa.cloudfront.net/media/EAB34822-838D-4D91-B78F0F74BAE60E33/95F4622C-A01D-4D3A-84DE0C1E62614EE4/webimage-B1A6F431-6426-43AD-8C8250C96DFEC930.png"
					width="100%"
				/>
			</div>
		</>
	);
};
