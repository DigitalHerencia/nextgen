"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select } from "@/components/ui/select";

// Schema for Content operations
const contentSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll"]),
  id: z.string().optional(),
  talent: z.string().optional(),
  type: z.enum(["photo", "video"]).optional(),
  engagement: z.number().min(0, "Engagement cannot be negative").optional(),
  campaign: z.string().optional(),
});

export function ContentForm() {
  const form = useForm({
    resolver: zodResolver(contentSchema),
    defaultValues: { operation: "create" },
  });

interface ContentFormValues {
    operation: "create" | "update" | "delete" | "get" | "getAll";
    id?: string;
    talent?: string;
    type?: "photo" | "video";
    engagement?: number;
    campaign?: string;
}

const onSubmit = async (values: ContentFormValues) => {
    console.log("Submitting Content form", values);
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
              <FormLabel>Content ID</FormLabel>
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
            <FormField control={form.control} name="type" render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <option value="photo">Photo</option>
                    <option value="video">Video</option>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="engagement" render={({ field }) => (
              <FormItem>
                <FormLabel>Engagement Score</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="campaign" render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign ID</FormLabel>
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
