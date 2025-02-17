import { z } from "zod";

export const paymentSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll"]),
  id: z.string().optional(),
  amount: z.number().min(1, "Amount must be greater than zero").optional(),
  recipient: z.string().optional(),
  status: z.enum(["pending", "completed", "failed"]).optional(),
});
