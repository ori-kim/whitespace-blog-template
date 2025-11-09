import { defineCollection } from "astro:content";
import { postSchema } from "~/lib/types";
import { glob } from "astro/loaders";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "content/posts" }),
  schema: postSchema,
});

export const collections = {
  posts: postsCollection,
};
