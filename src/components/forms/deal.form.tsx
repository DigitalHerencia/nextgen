"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select } from "@/components/ui/select";

// Schema for Deal operations
const dealSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll"]),
  id: z.string().optional(),
  talent: z.string().optional(),
  agent: z.string().optional(),
  brand: z.string().min(2, "Brand name must be at least 2 characters").optional(),
  offer_amount: z.number().min(1, "Offer amount must be greater than zero").optional(),
  status: z.enum(["pending", "accepted", "declined", "completed"]).optional(),
});

export function DealForm() {
  const form = useForm({
    resolver: zodResolver(dealSchema),
    defaultValues: { operation: "create" },
  });

interface DealFormValues {
    operation: "create" | "update" | "delete" | "get" | "getAll";
    id?: string;
    talent?: string;
    agent?: string;
    brand?: string;
    offer_amount?: number;
    status?: "pending" | "accepted" | "declined" | "completed";
}

const onSubmit = async (values: DealFormValues) => {
    console.log("Submitting Deal form", values);
    // Call API based on operation
};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="operation" render={({ field }) => (
          <FormItem>
            <FormLabel>Operation</FormLabel>
            <FormControl>
              <Select {...field}>
                <option value="create">Create</option>
                <option value="update">Update</option>
                <option value="delete">Delete</option>
                <option value="get">Get by ID</option>
                <option value="getAll">Get All</option>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {form.watch("operation") !== "getAll" && (
          <FormField control={form.control} name="id" render={({ field }) => (
            <FormItem>
              <FormLabel>Deal ID</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        )}

        {(form.watch("operation") === "create" || form.watch("operation") === "update") && (
          <>
            <FormField control={form.control} name="talent" render={({ field }) => (
              <FormItem>
                <FormLabel>Talent ID</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="agent" render={({ field }) => (
              <FormItem>
                <FormLabel>Agent ID</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField control={form.control} name="brand" render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="offer_amount" render={({ field }) => (
              <FormItem>
                <FormLabel>Offer Amount ($)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="status" render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <option value="pending">Pending</option>
                    <option value="accepted">Accepted</option>
                    <option value="declined">Declined</option>
                    <option value="completed">Completed</option>
                  </Select>
                </FormControl>
              </FormItem>
            )} />
          </>
        )}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}