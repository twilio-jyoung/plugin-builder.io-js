const component = (props) => {
	return <iframe src={props.src} width={props.width || "100%"} height={props.height || "800px"} />;
};

export const IFrameComponent = {
	component: component,
	componentOptions: {
		name: "iFrame Container",
		image: `https://raw.githubusercontent.com/tabler/tabler-icons/ffed949675ec8b825e7a6eaa45166a83bc6f8ff8/packages/icons/icons/frame.svg`,
		inputs: [
			{
				friendlyName: "iFrame URL",
				name: "src",
				type: "text",
				defaultValue: "https://bing.com",
				required: true,
			},
			{
				friendlyName: "Width",
				name: "width",
				type: "text",
				defaultValue: "100%",
				required: true,
			},
			{
				friendlyName: "Height",
				name: "height",
				type: "text",
				defaultValue: "800px",
				required: true,
			},
		],
	},
};
