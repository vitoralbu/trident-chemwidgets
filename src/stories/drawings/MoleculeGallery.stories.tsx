import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MoleculeGallery } from '../../components';

export default {
  title: 'Drawings/MoleculeGallery',
  component: MoleculeGallery,
} as ComponentMeta<typeof MoleculeGallery>;

const Template: ComponentStory<typeof MoleculeGallery> = (args) => (
  <MoleculeGallery {...args} />
);

export const SimpleMoleculeGallery = Template.bind({});
SimpleMoleculeGallery.args = {
  selected: [
    { smiles: 'CCCCCCCC', x: 0, y: 0 },
    { smiles: 'CCCCCCCC', x: 20, y: 20 },
    { smiles: 'CCCCCCCC', x: 40, y: 40 },
    { smiles: 'CCCCCCCC', x: 40, y: 40 },
  ],
};
