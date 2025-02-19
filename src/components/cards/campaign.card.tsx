"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH4 } from "@/components/ui/typography";


interface Deal {
  brand: string;
  talent: string;
  agent: string;
  offer_amount: number;
  status: string;
}

export function DealCard({ deal }: { deal: Deal }) {
  return (
    <Card className="p-4 text-input bg-transparent">
      <CardHeader>
        <TypographyH4 className="font-bold">Deal with {deal.brand}</TypographyH4>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm"><strong>Talent:</strong> {deal.talent}</p>
        <p className="text-sm"><strong>Agent:</strong> {deal.agent}</p>
        <p className="text-sm"><strong>Offer Amount:</strong> ${deal.offer_amount}</p>
        <p className="text-sm"><strong>Status:</strong> {deal.status}</p>
      </CardContent>
    </Card>
  );
}


