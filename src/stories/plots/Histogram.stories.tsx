import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Histogram, HistogramProps } from '../../components';

export default {
  title: 'Plots/Histogram',
  component: Histogram,
} as ComponentMeta<typeof Histogram>;

const Template: ComponentStory<typeof Histogram> = (args) => <Histogram {...args} />;

export const SimpleHistogram = Template.bind({});

const mockedData: HistogramProps['data'] = {
  points: new Array(100).fill(undefined).map(() => ({
    smiles: 'CCCC',
    x: Math.random(),
    y: Math.random()
  })),
}

SimpleHistogram.args = {
  data: mockedData
};

