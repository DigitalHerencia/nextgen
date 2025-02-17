import { z } from "zod";

export const managerSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll"]),
  id: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  managed_talent: z.array(z.string()).optional(),
  commission_rate: z.number().min(0).max(100, "Commission must be between 0-100").optional(),
  PP: z.string().optional(),
});
