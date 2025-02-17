import { z } from "zod";

export const contentSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll"]),
  id: z.string().optional(),
  talent: z.string().optional(),
  type: z.enum(["photo", "video"]).optional(),
  engagement: z.number().min(0, "Engagement cannot be negative").optional(),
  campaign: z.string().optional(),
});
