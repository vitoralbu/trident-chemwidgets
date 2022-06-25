import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MoleculeDrawing } from '../../components';

export default {
  title: 'Drawings/MoleculeDrawing',
  component: MoleculeDrawing,
} as ComponentMeta<typeof MoleculeDrawing>;

const Template: ComponentStory<typeof MoleculeDrawing> = (args) => (
  <MoleculeDrawing {...args} />
);

export const SimpleMoleculeDrawing = Template.bind({});
SimpleMoleculeDrawing.args = {
  width: 300,
  height: 300,
  smiles: 'CCCCCCCC',
};
