import { defineField, defineType } from 'sanity';

export const articleType = defineType({
	name: 'article',
	title: 'Article',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
		},
		{
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
			},
			validation: (rule) => rule.required(),
		},
	],
});
