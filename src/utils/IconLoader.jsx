import { Spinner } from "@twilio-paste/core/spinner";
import { ErrorIcon } from "@twilio-paste/icons/esm/ErrorIcon";
import React, { Component, lazy, ReactNode, Suspense } from "react";

class IconErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<ErrorIcon
					title="an error occurred"
					color="colorTextError"
					size="sizeIcon40"
					decorative
				/>
			);
		}

		return this.props.children;
	}
}

const IconLoader = React.memo(
	({ icon, ...iconProps }) => {
		const AsyncIcon = lazy(() =>
			import(
				/* webpackMode: "eager" */ `@twilio-paste/icons/esm/${icon}.js`
			).then((c) => ({
				default: c[icon],
			}))
		);
		return (
			<IconErrorBoundary>
				<Suspense
					fallback={
						<Spinner
							size="sizeIcon30"
							{...iconProps}
							title={"Loading"}
							decorative
						/>
					}
				>
					<AsyncIcon icon={icon} {...iconProps} />
				</Suspense>
			</IconErrorBoundary>
		);
	}
);
export { IconLoader };
