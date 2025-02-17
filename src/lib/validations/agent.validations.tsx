import { z } from "zod";

export const agentSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll", "getDetails"]),
  id: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  email: z.string().email("Invalid email address").optional(),
  role: z.enum(["Manager", "Talent Agent", "Marketing Director", "Admin"]).optional(),
  commission_rate: z.number().min(0).max(100, "Commission must be between 0-100").optional(),
  avatar: z.string().optional(),
  PP: z.string().optional(),
  admin_key: z.string().optional(),
});