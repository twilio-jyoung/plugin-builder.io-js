import { Card, Heading, Paragraph } from "@twilio-paste/core";

export const NoTasks = () => {
	return (
		<>
			<div style={{ width: "500px", margin: "auto" }}>
				<Card>
					<Heading as="h2" variant="heading20">
						No active tasks
					</Heading>
					<Paragraph>
						Customer centricity, as the name implies, is creating an organization that constantly
						self-corrects to put customers at the center of our decisions. Like a gyroscope that
						resists being moved off-center, a customer-centric organization resists the many forces
						that attempt to deprioritize customers.
					</Paragraph>
					<Paragraph>-- Jeff Lawson, Ask Your Developer</Paragraph>
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
