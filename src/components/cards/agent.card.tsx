"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH4 } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Agent {
  avatar: string;
  name: string;
  role: string;
  email: string;
  commission_rate: number;
}

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Card className="p-4 text-input bg-popover">
      <CardHeader className="flex items-center gap-4">
        <Image src={agent.avatar} alt={agent.name} width={80} height={80} className="rounded-full border-2 border-secondary" />
        <div>
          <TypographyH4 className="font-bold">{agent.name}</TypographyH4>
          <Badge variant="outline" className="text-sm">{agent.role}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm"><strong>Email:</strong> {agent.email}</p>
        <p className="text-sm"><strong>Commission Rate:</strong> {agent.commission_rate}%</p>
      </CardContent>
    </Card>
  );
}
