import { z } from "astro:schema";

export interface SEO {
  title?: string;
  description?: string;
  ogImage?: string;
}

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  created: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
  series: z.array(z.string()).optional(),
  slug: z.string(),
});

export type Post = z.infer<typeof postSchema>;

// to not importing CollectionEntry from astro:content
export type PostData = {
  id: string;
  slug: string;
  body: string;
  collection: "posts";
  data: Post;
};
