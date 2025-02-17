"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Schema for Campaign operations
const campaignSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll"]),
  id: z.string().optional(),
  title: z.string().min(2, "Title must be at least 2 characters").optional(),
  budget: z.number().min(1, "Budget must be greater than zero").optional(),
  metrics: z.string().optional(),
  performance_data: z.string().optional(),
  marketingDirector: z.string().optional(),
  talent: z.string().optional(),
});

export function CampaignForm() {
  const form = useForm({
    resolver: zodResolver(campaignSchema),
    defaultValues: { operation: "create" },
  });

interface CampaignFormValues {
    operation: "create" | "update" | "delete" | "get" | "getAll";
    id?: string;
    title?: string;
    budget?: number;
    metrics?: string;
    performance_data?: string;
    marketingDirector?: string;
    talent?: string;
}

const onSubmit = async (values: CampaignFormValues) => {
    console.log("Submitting Campaign form", values);
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
              <FormLabel>Campaign ID</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        )}

        {(form.watch("operation") === "create" || form.watch("operation") === "update") && (
          <>
            <FormField control={form.control} name="title" render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="budget" render={({ field }) => (
              <FormItem>
                <FormLabel>Budget ($)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="metrics" render={({ field }) => (
              <FormItem>
                <FormLabel>Metrics (JSON)</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField control={form.control} name="performance_data" render={({ field }) => (
              <FormItem>
                <FormLabel>Performance Data (JSON)</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField control={form.control} name="marketingDirector" render={({ field }) => (
              <FormItem>
                <FormLabel>Marketing Director ID</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )} />
            <FormField control={form.control} name="talent" render={({ field }) => (
              <FormItem>
                <FormLabel>Talent ID</FormLabel>
                <FormControl>
                  <Input {...field} />
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
