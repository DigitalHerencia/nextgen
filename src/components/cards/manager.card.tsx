"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {  TypographyH4 } from "@/components/ui/typography";

interface Manager {
  name: string;
  commission_rate: number;
  managed_talent?: string[];
}

export function ManagerCard({ manager }: { manager: Manager }) {
  return (
    <Card className="p-4 text-input bg-transparent">


      <CardHeader className="flex items-center gap-4">
        <TypographyH4 className="font-bold">{manager.name}</TypographyH4>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm"><strong>Commission Rate:</strong> {manager.commission_rate}%</p>
        <p className="text-sm"><strong>Managed Talent:</strong> {manager.managed_talent?.join(", ")}</p>
      </CardContent>
    </Card>
  );
}