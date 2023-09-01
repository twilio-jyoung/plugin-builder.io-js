import { sizings, spacings } from "@twilio-paste/design-tokens";

export default function sortOptionNames(obj) {
	let result = Object.keys(obj).sort(function (a, b) {
		return a.localeCompare(b, undefined, {
			numeric: true,
			sensitivity: "base",
		});
	});

	return result;
}

export const iconSizes = Object.keys(sizings)
	.filter((key) => key.includes("sizeIcon"))
	.sort(function (a, b) {
		return a.localeCompare(b, undefined, {
			numeric: true,
			sensitivity: "base",
		});
	});

export const spacingSizes = Object.keys(spacings).sort(function (a, b) {
	return a.localeCompare(b, undefined, {
		numeric: true,
		sensitivity: "base",
	});
});
