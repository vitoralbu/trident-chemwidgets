import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSME } from '../../components';

export default {
  title: 'Inputs/JSME',
  component: JSME,
} as ComponentMeta<typeof JSME>;

const Template: ComponentStory<typeof JSME> = (args) => <JSME {...args} />;

export const SimpleJSME = Template.bind({});
SimpleJSME.args = {
  width: '300px',
  height: '300px',
  smiles: 'CCCCCCCC',
};
