import {z, defineCollection} from 'astro:content'

const postCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.optional(z.string()),
        category: z.string(),
        tags: z.array(z.string()),
        hidden: z.boolean().optional(),
        draft: z.boolean().optional(),
    }),
});

export const collections = {
    'posts': postCollection,
};
