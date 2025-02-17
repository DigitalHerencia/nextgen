"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Schema for Talent operations
const talentSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll"]),
  id: z.string().optional(),
  name: z.string().min(2).optional(),
  bio: z.string().min(10).optional(),
  category: z.string().min(2).optional(),
  earnings: z.number().min(0).optional(),
  talentManager: z.string().optional(),
  agent: z.string().optional(),
  avatar: z.string().optional(),
  social_links: z.object({
    instagram: z.string().optional(),
    twitter: z.string().optional()
  }).optional(),
});

export function TalentForm() {
  const form = useForm({
    resolver: zodResolver(talentSchema),
    defaultValues: { operation: "create" },
  });

interface TalentFormValues {
    operation: "create" | "update" | "delete" | "get" | "getAll";
    id?: string;
    name?: string;
    bio?: string;
    category?: string;
    earnings?: number;
    talentManager?: string;
    agent?: string;
    avatar?: string;
    social_links?: {
        instagram?: string;
        twitter?: string;
    };
}

const onSubmit = async (values: TalentFormValues) => {
    console.log("Submitting Talent form", values);
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
              <FormLabel>Talent ID</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        )}

        {(form.watch("operation") === "create" || form.watch("operation") === "update") && (
          <>
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="bio" render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="category" render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="earnings" render={({ field }) => (
              <FormItem>
                <FormLabel>Earnings ($)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="talentManager" render={({ field }) => (
              <FormItem>
                <FormLabel>Talent Manager ID</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
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
            <FormField control={form.control} name="avatar" render={({ field }) => (
              <FormItem>
                <FormLabel>Avatar URL</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
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
