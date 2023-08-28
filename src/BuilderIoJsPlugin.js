import React from 'react';
import builder from "@builder.io/react";
import { FlexPlugin } from '@twilio/flex-plugin';
import BuilderIOPanel2 from './components/BuilderIOPanel2';
import {
	CustomizationProvider
} from "@twilio-paste/core/customization";

import registerComponentsWithBuilderIO from "./utils/registerComponentsWithBuilderIO";

const PLUGIN_NAME = 'BuilderIoJsPlugin';

export default class BuilderIoJsPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  async init(flex, manager) {
		// sets paste as a theme provider so all components inherit styles and update on token / theme changes.
		flex.setProviders({
			CustomProvider: (RootComponent) => (props) => {
				const pasteProviderProps = {
					baseTheme: props.theme?.isLight ? "default" : "dark",
					theme: props.theme?.tokens,
					style: { minWidth: "100%", height: "100%" },
				};
				return (
					<CustomizationProvider {...pasteProviderProps}>
						<RootComponent {...props} />
					</CustomizationProvider>
				);
			},
		});

    // initiates builder.io with the api key from the environment variables
    builder.init("c5310efc89784d769e28606b3fb27442"); // process.env.FLEX_BUILDERIO_API_KEY

    // register a few twilio paste components with builder.io
    registerComponentsWithBuilderIO();

    // replaces the panel 2 content with the builder.io component
    flex.AgentDesktopView.Panel2.Content.replace(<BuilderIOPanel2 key="builder-io-panel2" />);

    // sets some default props for the agent desktop view so that we are able to use the maximum amount of real estate in builder
		flex.AgentDesktopView.Panel1.defaultProps.splitterOrientation = flex.SplitterOrientation.vertical;
		flex.AgentDesktopView.defaultProps.splitterOptions = {
			minimumFirstPanelSize: "400px",
			initialFirstPanelSize: "400px",
		}
  }
}
