import {
	DescriptionList,
	DescriptionListSet,
	DescriptionListTerm,
	DescriptionListDetails,
} from "@twilio-paste/core";

const component = (props) => {
	if (props.terms == null || props.terms?.length == 0) {
		return <>Edit to Add Items to the Description List</>;
	}

	return (
		<DescriptionList>
			{props.terms?.map((term, termIndex) => {
				// default empty value
				let details = <DescriptionListDetails>-</DescriptionListDetails>;

				// edge case where binding was done at the details (plural) level rather than the detail (singular) level
				if (typeof term.details === "string" || term.details instanceof String) {
					details = (
						<DescriptionListDetails>
							You should not bind at the details level (plural), instead bind at the detail level
							(singular). Remove the binding from the details level and add it to the detail level.
						</DescriptionListDetails>
					);
				} else {
					// by default, details is an array of objects which can be set manually or via binding
					let hasDetails = term.details?.length > 0;

					if (hasDetails) {
						details = term.details.map((detail, detailIndex) => {
							return (
								<DescriptionListDetails key={detailIndex}>{detail.detail}</DescriptionListDetails>
							);
						});
					}
				}

				return (
					<DescriptionListSet key={termIndex} id={termIndex.toString()}>
						<DescriptionListTerm>{term.term}</DescriptionListTerm>
						{details}
					</DescriptionListSet>
				);
			})}
		</DescriptionList>
	);
};

export const DescriptionListComponent = {
	component: component,
	componentOptions: {
		name: "Paste Description List",
		image:
			"https://raw.githubusercontent.com/tabler/tabler-icons/ffed949675ec8b825e7a6eaa45166a83bc6f8ff8/packages/icons/icons/list-details.svg",
		docsLink: "https://paste.twilio.design/components/description-list",
		inputs: [
			{
				name: "terms",
				type: "list",
				subFields: [
					{
						name: "term",
						type: "text",
						defaultValue: "Term",
					},
					{
						name: "details",
						type: "list",
						subFields: [
							{
								name: "detail",
								type: "text",
							},
						],
						defaultValue: [
							{
								detail: "-",
							},
						],
					},
				],
				defaultValue: [
					{
						term: "Term",
						details: [
							{
								detail: "-",
							},
						],
					},
				],
			},
		],
	},
};
