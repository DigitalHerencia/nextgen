"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select } from "@/components/ui/select";

// Schema for all operations
const agentSchema = z.object({
  operation: z.enum(["create", "update", "delete", "get", "getAll", "getDetails"]),
  id: z.string().optional(),
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  role: z.enum(["Manager", "Talent Agent", "Marketing Director", "Admin"]).optional(),
  commission_rate: z.number().min(0).max(100).optional(),
  avatar: z.string().optional(),
  PP: z.string().optional(),
  admin_key: z.string().optional(),
});

export function AgentForm() {
  const form = useForm({
    resolver: zodResolver(agentSchema),
    defaultValues: { operation: "create" },
  });

  interface AgentFormValues {
    operation: "create" | "update" | "delete" | "get" | "getAll" | "getDetails";
    id?: string;
    name?: string;
    email?: string;
    role?: "Manager" | "Talent Agent" | "Marketing Director" | "Admin";
    commission_rate?: number;
    avatar?: string;
    PP?: string;
    admin_key?: string;
  }

  const onSubmit = async (values: AgentFormValues) => {
    console.log("Submitting form", values);
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
                <option value="getDetails">Get Details</option>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {form.watch("operation") !== "getAll" && (
          <FormField control={form.control} name="id" render={({ field }) => (
            <FormItem>
              <FormLabel>Agent ID</FormLabel>
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
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="role" render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <option value="Manager">Manager</option>
                    <option value="Talent Agent">Talent Agent</option>
                    <option value="Marketing Director">Marketing Director</option>
                    <option value="Admin">Admin</option>
                  </Select>
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
          </>
        )}

        {form.watch("operation") === "delete" && (
          <FormField control={form.control} name="admin_key" render={({ field }) => (
            <FormItem>
              <FormLabel>Admin Key</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        )}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
