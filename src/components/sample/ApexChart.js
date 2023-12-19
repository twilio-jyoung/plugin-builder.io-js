// command + shift + L to update all instances of word at once
import React from "react";
import Chart from "react-apexcharts";

const sampleData = {
	series: [56249, 48023, 10342, 10643, 30349],
	options: {
		stroke: {
			colors: ["#fff"],
		},
		fill: {
			opacity: 0.8,
		},
		labels: [
			"twilio.flex",
			"twilio.voice",
			"twilio.verify",
			"twilio.sms",
			"twilio.segment.connections",
		],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],
	},
};

const PolarAreaApexChart = () => {
	return (
		<div id="chart">
			<Chart {...sampleData} type="polarArea" />
		</div>
	);
};

export const PolarAreaApexChartComponent = {
	component: PolarAreaApexChart,
	componentOptions: {
		name: "Charts - Polar Area",
		image:
			"https://raw.githubusercontent.com/tabler/tabler-icons/ffed949675ec8b825e7a6eaa45166a83bc6f8ff8/packages/icons/icons/chart-donut-4.svg",
	},
};
