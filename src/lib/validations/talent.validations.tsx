import { z } from "zod";

export const talentSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll"]),
  id: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  bio: z.string().min(10, "Bio must be at least 10 characters").optional(),
  category: z.string().min(2, "Category must be at least 2 characters").optional(),
  earnings: z.number().min(0, "Earnings cannot be negative").optional(),
  talentManager: z.string().optional(),
  agent: z.string().optional(),
  avatar: z.string().optional(),
  social_links: z.object({
    instagram: z.string().optional(),
    twitter: z.string().optional()
  }).optional(),
});
