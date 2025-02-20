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

interface Deal
{
  talent: string;
  agent: string;
  brand: string;
  dealAmount: number;
  status: "pending" | "accepted" | "rejected" | "completed";
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export function DealCard ( { deal, onButtonClick }: { deal: Deal; onButtonClick?: () => void } )
{
  return (
    <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
      <Card className="base-card">
        <CardHeader>
          <CardTitle className="flex flex-row items-center justify-between">
            <TypographyH1 className="card-title">Deal with { deal.brand }</TypographyH1>
            <Badge variant="default" className="mb-8">
              { deal.status.toUpperCase() }
            </Badge>
          </CardTitle>
          <Separator className="my-2 border-b" />
          <CardDescription className="card-description">
            <TypographyH4>
              Talent: { deal.talent } | Agent: { deal.agent }
            </TypographyH4>
          </CardDescription>
        </CardHeader>
        <CardContent className="base-card-content">
          <TypographyH1 className="text-secondary card-title">${ deal.dealAmount }</TypographyH1>
          <TypographySmall className="text-primary card-text">Deal Amount</TypographySmall>
          <ul className="mt-4 space-y-1 text-base text-input">
            <li>• Created by: { deal.createdBy }</li>
            <li>• Created on: { new Date( deal.createdAt ).toLocaleDateString() }</li>
          </ul>
        </CardContent>
        <CardFooter className="card-footer">
          <Button onClick={ onButtonClick } className="base-button-primary">
            <TypographyLarge className="base-button">View Deal</TypographyLarge>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
