"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select } from "@/components/ui/select";


// Schema for Manager operations
const managerSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll"]),
  id: z.string().optional(),
  name: z.string().min(2).optional(),
  managed_talent: z.array(z.string()).optional(),
  commission_rate: z.number().min(0).max(100).optional(),
  PP: z.string().optional(),
});

export function ManagerForm() {
  const form = useForm({
    resolver: zodResolver(managerSchema),
    defaultValues: { operation: "create" },
  });

interface ManagerFormValues {
    operation: "create" | "update" | "delete" | "get" | "getAll";
    id?: string;
    name?: string;
    managed_talent?: string[];
    commission_rate?: number;
    PP?: string;
}

const onSubmit = async (values: ManagerFormValues) => {
    console.log("Submitting Manager form", values);
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
              <FormLabel>Manager ID</FormLabel>
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
            <FormField control={form.control} name="managed_talent" render={({ field }) => (
              <FormItem>
                <FormLabel>Managed Talent IDs (comma separated)</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter talent IDs separated by commas" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="commission_rate" render={({ field }) => (
              <FormItem>
                <FormLabel>Commission Rate (%)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="PP" render={({ field }) => (
              <FormItem>
                <FormLabel>Privacy Policy URL</FormLabel>
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
