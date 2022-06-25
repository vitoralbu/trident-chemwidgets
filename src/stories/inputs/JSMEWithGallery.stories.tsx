import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSMEWithGallery } from '../../components';

export default {
  title: 'Inputs/JSMEWIthGallery',
  component: JSMEWithGallery,
} as ComponentMeta<typeof JSMEWithGallery>;

const Template: ComponentStory<typeof JSMEWithGallery> = (args) => (
  <JSMEWithGallery {...args} />
);

export const SimpleJSMEWithGallery = Template.bind({});
SimpleJSMEWithGallery.args = {
  baseSmiles: 'CCCCCCCC',
};
