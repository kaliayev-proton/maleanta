import { defineCollection, z } from "astro:content";

const books = defineCollection({
	schema: z.object({
		title: z.string(),
		author: z.string(),
		year: z.number(),
	}),
});

export const collections = { books };
