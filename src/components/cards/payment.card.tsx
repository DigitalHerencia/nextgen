"use client";

import { motion } from "framer-motion";
import
  {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "@/components/ui/card";
import { TypographyH1, TypographyH4, TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface Payment
{
  amount: number;
  recipient: string;
  recipientModel: "Agent" | "Talent" | "Manager";
  status: "pending" | "rejected" | "completed";
  transactionId?: string;
  method?: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export function PaymentCard ( { payment, onButtonClick }: { payment: Payment; onButtonClick?: () => void } )
{
  return (
    <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
      <Card className="base-card">
        <CardHeader>
          <CardTitle className="flex flex-row items-center justify-between">
            <TypographyH1 className="card-title">
              Payment to { payment.recipientModel }
            </TypographyH1>
            <Badge variant="default" className="mb-8">
              { payment.status.toUpperCase() }
            </Badge>
          </CardTitle>
          <Separator className="my-2 border-b" />
          <CardDescription className="card-description">
            <TypographyH4>
              Method: { payment.method || "N/A" }
            </TypographyH4>
          </CardDescription>
        </CardHeader>
        <CardContent className="base-card-content">
          <TypographyH1 className="text-secondary card-title">${ payment.amount }</TypographyH1>
          <TypographySmall className="text-primary card-text">Amount</TypographySmall>
          <ul className="mt-4 space-y-1 text-base text-input">
            <li>• Recipient: { payment.recipient }</li>
            { payment.transactionId && <li>• Transaction ID: { payment.transactionId }</li> }
            <li>• Created by: { payment.createdBy }</li>
            <li>• Created on: { new Date( payment.createdAt ).toLocaleDateString() }</li>
          </ul>
        </CardContent>
        <CardFooter className="card-footer">
          <Button onClick={ onButtonClick } className="base-button-primary">
            <TypographyLarge className="base-button">View Payment</TypographyLarge>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
