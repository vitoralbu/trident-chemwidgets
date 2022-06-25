import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSME } from '../../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/JSME',
  component: JSME,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof JSME>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof JSME> = (args) => <JSME {...args} />;

export const SimpleJSME = Template.bind({});
SimpleJSME.args = {
  width: '300px',
  height: '300px',
  smiles: 'CCCCCCCC',
};
