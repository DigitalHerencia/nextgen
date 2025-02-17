"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select } from "@/components/ui/select";

// Schema for Payment operations
const paymentSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll"]),
  id: z.string().optional(),
  amount: z.number().min(1, "Amount must be greater than zero").optional(),
  recipient: z.string().optional(),
  status: z.enum(["pending", "completed", "failed"]).optional(),
});

export function PaymentForm() {
  const form = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: { operation: "create" },
  });

interface PaymentFormValues {
    operation: "create" | "update" | "delete" | "get" | "getAll";
    id?: string;
    amount?: number;
    recipient?: string;
    status?: "pending" | "completed" | "failed";
}

const onSubmit = async (values: PaymentFormValues) => {
    console.log("Submitting Payment form", values);
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
              <FormLabel>Payment ID</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        )}

        {(form.watch("operation") === "create" || form.watch("operation") === "update") && (
          <>
            <FormField control={form.control} name="amount" render={({ field }) => (
              <FormItem>
                <FormLabel>Amount ($)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="recipient" render={({ field }) => (
              <FormItem>
                <FormLabel>Recipient ID</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField control={form.control} name="status" render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="failed">Failed</option>
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
