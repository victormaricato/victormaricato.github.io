import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    url: z.string().url().optional(),
    pdf: z.string().url().optional(),
    citations: z.number().optional(),
    selected: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    company: z.string(),
    url: z.string().url().optional(),
    start: z.string(),
    end: z.string().optional(),
    location: z.string().optional(),
    order: z.number(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    blurb: z.string(),
    status: z.enum(['live', 'beta', 'archived']).default('live'),
    order: z.number().default(100),
  }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    date: z.string(),
    url: z.string().url().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const gallery = defineCollection({
  type: 'content',
  schema: z.object({
    album: z.string(),
    date: z.string(),
    location: z.string().optional(),
    photos: z.array(z.object({ src: z.string(), caption: z.string().optional() })),
  }),
});

export const collections = { publications, experience, projects, talks, blog, gallery };
