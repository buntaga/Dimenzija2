import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
	name: 'deveta-dimenzija', // Can be whatever
	title: 'Deveta Dimenzija', // Can be whatever
	projectId: 'ramiv2jj',
	dataset: 'production',
	plugins: [deskTool()],
	schema: {
		types: schemaTypes,
	},
});
