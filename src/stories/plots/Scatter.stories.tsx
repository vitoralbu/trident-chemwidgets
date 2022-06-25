import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Scatter, ScatterProps } from '../../components';

export default {
  title: 'Plots/Scatter',
  component: Scatter,
} as ComponentMeta<typeof Scatter>;

const Template: ComponentStory<typeof Scatter> = (args) => <Scatter {...args} />;

export const SimpleHistogram = Template.bind({});

const mockedData: ScatterProps['data'] = {
  points: new Array(100).fill(undefined).map(() => ({
    smiles: 'CCCC',
    x: Math.random(),
    y: Math.random()
  })),
}

SimpleHistogram.args = {
  data: mockedData
};

