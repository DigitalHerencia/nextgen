import { z } from "zod";

export const dealSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll"]),
  id: z.string().optional(),
  talent: z.string().optional(),
  agent: z.string().optional(),
  brand: z.string().min(2, "Brand name must be at least 2 characters").optional(),
  offer_amount: z.number().min(1, "Offer amount must be greater than zero").optional(),
  status: z.enum(["pending", "accepted", "declined", "completed"]).optional(),
});
