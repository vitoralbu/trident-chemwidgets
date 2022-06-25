import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MoleculeDrawingHighlight } from '../../components';

export default {
  title: 'Drawings/MoleculeDrawingHighlight',
  component: MoleculeDrawingHighlight,
} as ComponentMeta<typeof MoleculeDrawingHighlight>;

const Template: ComponentStory<typeof MoleculeDrawingHighlight> = (args) => (
  <MoleculeDrawingHighlight {...args} />
);

export const SimpleMoleculeDrawingHighlight = Template.bind({});
SimpleMoleculeDrawingHighlight.args = {
  width: 300,
  height: 300,
  smiles: 'CCCCCCCC',
};
