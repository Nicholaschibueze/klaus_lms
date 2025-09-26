import { z } from 'zod';

export const courseLevel = ['Beginner', 'Intermediate', 'Advance'] as const;

export const courseStatus = ['Draft', 'Published', 'Archived'] as const;

export const courseCategory = [
  'Development',
  'Science',
  'Physics',
  'Art',
  'Business',
  'Finance',
  'Robotics',
  'IT and Software',
  'Office Productivity',
  'Personal Development',
  'Design',
  'Marketing',
  'Health and Fitness',
  'Animation',
  'Teaching and Academics',
] as const;

export const courseSchema = z.object({
  title: z.string().min(4, { message: "Title must be at least 4 characters long" }).max(100, {
    message: "Title must be at most 100 characters long",
  }),
  description: z.string().min(4, { message: "Description must be at least 4 characters long" }),
  fileKey: z.string().min(1, { message: "File is required" }),
  price: z.number().min(1, { message: "Price must be a positive number" }),
  duration: z.number().min(1, { message: "Duration must be at least 1 hour" }).max(500, {
    message: "Duration must be at most 500 hours",
  }),
  level: z.enum(courseLevel, { message: "Level is required" }),
  category: z.enum(courseCategory, { message: "Category is required" }),
  smallDescription: z.string().min(3, {
    message: "Small Description must be at least 3 characters long",
  }).max(150, { message: "Small description must be at most 150 characters" }),
  slug: z.string().min(3, { message: "Slug must be at least 3 characters" }),
  status: z.enum(courseStatus, { message: "Status is required" }),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;