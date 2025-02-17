import { z } from "zod";

export const campaignSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll"]),
  id: z.string().optional(),
  title: z.string().min(2, "Title must be at least 2 characters").optional(),
  budget: z.number().min(1, "Budget must be greater than zero").optional(),
  metrics: z.string().optional(),
  performance_data: z.string().optional(),
  marketingDirector: z.string().optional(),
  talent: z.string().optional(),
});
