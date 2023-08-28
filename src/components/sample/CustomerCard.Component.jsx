import React from "react";
import {
	Avatar,
	Box,
	Button,
	Card,
	Column,
	Grid,
	Heading,
	ListItem,
	Flex as PasteFlex,
	SkeletonLoader,
	Stack,
	Text,
	Tooltip,
	UnorderedList,
} from "@twilio-paste/core";
import { EmailIcon } from "@twilio-paste/icons/cjs/EmailIcon";
import { CallIcon } from "@twilio-paste/icons/esm/CallIcon";
import { CopyIcon } from "@twilio-paste/icons/esm/CopyIcon";
import { StarIcon } from "@twilio-paste/icons/esm/StarIcon";
import { withTaskContext } from "@twilio/flex-ui";

const CustomerCard = (props) => {
	let customerCardContent = null;

	let { task } = props;

	let customerData = task?.attributes?.customers;

	if (customerData !== undefined) customerCardContent = createCustomerCardContent(customerData);

	return (
		<Box width="space120">
			<Card padding="space70">{customerData ? customerCardContent : skeleton}</Card>
		</Box>
	);
};

export default withTaskContext(CustomerCard);

const skeleton = () => {
	return (
		<Grid gutter="space60">
			<Column span={2}>
				<SkeletonLoader size="sizeIcon100" borderRadius="borderRadiusCircle" />
			</Column>

			<Column span={10}>
				<Box>
					<SkeletonLoader height="32px" width="100px" />
				</Box>
				<Box marginTop="space30">
					<Stack orientation="vertical" spacing="space20">
						<SkeletonLoader />
						<SkeletonLoader />
						<SkeletonLoader />
						<SkeletonLoader />
					</Stack>
				</Box>
			</Column>
		</Grid>
	);
};

const createCustomerCardContent = (customer) => {
	const copylink = async () => {
		if (customer.id) {
			await navigator.clipboard.writeText(customer.id);
		}
	};

	// extract relevant fields from customer object, set defaults if they don't exist
	let customerName = customer.customer_name ?? "Jane Doe";
	let customerEmail = customer.email ?? "jdoe@twilio.com";
	let customerPhone = customer.phone ?? "+13173678384";

	return (
		<PasteFlex>
			<Grid gutter="space60">
				<Column span={2}>
					<Avatar size="sizeIcon100" name={customerName} />
				</Column>

				<Column span={10}>
					<Box display="flex" marginLeft="space60" justifyContent="space-between">
						<Heading as="h2" variant="heading30" marginBottom="space0">
							{customerName}
						</Heading>
						<Box>
							<Tooltip text="Copy Segment ID.">
								<Button variant="secondary" size="small" onClick={copylink}>
									<CopyIcon decorative />
								</Button>
							</Tooltip>
						</Box>
					</Box>
					<UnorderedList marginBottom="space0" listStyleType="">
						<ListItem>
							<PasteFlex vAlignContent="center">
								<StarIcon decorative={false} title="Description of icon" />
								<Text as={"div"} marginLeft="space30">
									Gold member
								</Text>
							</PasteFlex>
						</ListItem>
						<ListItem>
							<PasteFlex>
								<EmailIcon decorative />
								<Text as={"div"} marginLeft="space30">
									{customerEmail}
								</Text>
							</PasteFlex>
						</ListItem>

						<ListItem>
							<PasteFlex>
								<CallIcon decorative />
								<Text as={"div"} marginLeft="space30">
									{customerPhone}
								</Text>
							</PasteFlex>
						</ListItem>
					</UnorderedList>
				</Column>
			</Grid>
		</PasteFlex>
	);
};
