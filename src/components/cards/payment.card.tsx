"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {  TypographyH4 } from "@/components/ui/typography";

interface Payment {
  id: number;
  amount: number;
  recipient: string;
  status: string;
}

export function PaymentCard({ payment }: { payment: Payment }) {
    return (
      <Card className="p-4 text-input bg-transparent">
        <CardHeader>
          <TypographyH4 className="font-bold">Payment #{payment.id}</TypographyH4>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm"><strong>Amount:</strong> ${payment.amount}</p>
          <p className="text-sm"><strong>Recipient:</strong> {payment.recipient}</p>
          <p className="text-sm"><strong>Status:</strong> {payment.status}</p>
        </CardContent>
      </Card>
    );
  }