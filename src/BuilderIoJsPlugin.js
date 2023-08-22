import React from 'react';
import builder from "@builder.io/react";
import { FlexPlugin } from '@twilio/flex-plugin';
import BuilderIOPanel2 from './components/BuilderIOPanel2';
import BuilderIOPanel2Container from './components/BuilderIOPanel2.Container';

const PLUGIN_NAME = 'BuilderIoJsPlugin';

export default class BuilderIoJsPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  async init(flex, manager) {
    builder.init(process.env.FLEX_BUILDERIO_API_KEY);

    flex.AgentDesktopView.Panel2.Content.replace(<BuilderIOPanel2 key="builder-io-panel2" />);
    // flex.AgentDesktopView.Panel2.Content.replace(<BuilderIOPanel2Container key="builder-io-panel2-container" />);
  }
}
