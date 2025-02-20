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
import { TypographyH2, TypographyH4, TypographyP, TypographyLarge } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface Campaign
{
  _id: string;
  title: string;
  budget: number;
  metrics: number;
  performanceData: Record<string, any>;
  brand: string;
  manager: string; // For display purposes (assumed resolved)
  agent: string; // For display purposes (assumed resolved)
  startDate?: Date;
  endDate?: Date;
  status: "active" | "completed" | "pending" | "cancelled";
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export function CampaignCard ( { campaign, onClick }: { campaign: Campaign; onClick?: () => void } )
{
  return (
    <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
      <Card className="base-card">
        <CardHeader>
          <CardTitle>
            <TypographyH2 className="card-title">
              <span className="text-primary">{ campaign.brand }</span>{ " " }
              <span className="text-secondary">Campaign</span>
            </TypographyH2>
          </CardTitle>
          <Separator className="my-2 border-b" />
          <CardDescription>
            <TypographyH4 className="card-description">
              Status: { campaign.status.toUpperCase() }
            </TypographyH4>
          </CardDescription>
        </CardHeader>
        <CardContent className="base-card-content">
          <TypographyP className="card-content">
            <strong>Title:</strong> { campaign.title }
          </TypographyP>
          <TypographyP className="card-content">
            <strong>Budget:</strong> ${ campaign.budget }
          </TypographyP>
          <TypographyP className="card-content">
            <strong>Metrics:</strong> { campaign.metrics }
          </TypographyP>
          <TypographyP className="card-content">
            <strong>Manager ID:</strong> { campaign.manager }
          </TypographyP>
          <TypographyP className="card-content">
            <strong>Agent ID:</strong> { campaign.agent }
          </TypographyP>
          { campaign.startDate && (
            <TypographyP className="card-content">
              <strong>Start Date:</strong> { new Date( campaign.startDate ).toLocaleDateString() }
            </TypographyP>
          ) }
          { campaign.endDate && (
            <TypographyP className="card-content">
              <strong>End Date:</strong> { new Date( campaign.endDate ).toLocaleDateString() }
            </TypographyP>
          ) }
        </CardContent>
        <CardFooter className="card-footer">
          <Button onClick={ onClick } className="base-button-primary">
            <TypographyLarge className="base-button">
              View Campaign
            </TypographyLarge>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
