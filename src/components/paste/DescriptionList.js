import {
	DescriptionList,
	DescriptionListSet,
	DescriptionListTerm,
	DescriptionListDetails,
} from "@twilio-paste/core";

const component = (props) => {
	return (
		<DescriptionList>
			{props.terms?.map((item, index) => {
				return (
					<DescriptionListSet key={index} id={index.toString()}>
						<DescriptionListTerm>{item.term}</DescriptionListTerm>
						<DescriptionListDetails>{item.detail}</DescriptionListDetails>
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
		image: "https://tabler-icons.io/static/tabler-icons/icons-png/list-details.png",
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
						name: "detail",
						type: "text",
						defaultValue: "Detail",
					},
				],
				defaultValue: [
					{
						term: "Term",
						detail: "Detail",
					},
				],
			},
		],
	},
};
