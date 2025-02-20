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

interface Content {
  _id: string;
  talent: string; // For display purposes (assumed resolved)
  type: "video" | "photo" | "audio" | "text";
  engagement: number;
  campaign: string; // For display purposes (assumed resolved)
  fileUrl?: string;
  description?: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export function ContentCard ( { content, onClick }: { content: Content; onClick?: () => void } )
{
  return (
    <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
      <Card className="base-card">
        <CardHeader>
          <CardTitle>
            <TypographyH2 className="card-title">
              <span className="text-primary">{ content.type.toUpperCase() }</span>{ " " }
              <span className="text-secondary">Content</span>
            </TypographyH2>
          </CardTitle>
          <Separator className="my-2 border-b" />
          <CardDescription>
            <TypographyH4 className="card-description">
              Engagement: { content.engagement }
            </TypographyH4>
          </CardDescription>
        </CardHeader>
        <CardContent className="base-card-content">
          <TypographyP className="card-content">
            <strong>Talent ID:</strong> { content.talent }
          </TypographyP>
          <TypographyP className="card-content">
            <strong>Campaign ID:</strong> { content.campaign }
          </TypographyP>
          { content.description && (
            <TypographyP className="card-content">
              <strong>Description:</strong> { content.description }
            </TypographyP>
          ) }
          { content.fileUrl && (
            <TypographyP className="card-content">
              <strong>File URL:</strong> { content.fileUrl }
            </TypographyP>
          ) }
        </CardContent>
        <CardFooter className="card-footer">
          <Button onClick={ onClick } className="base-button-primary">
            <TypographyLarge className="base-button">
              View Content
            </TypographyLarge>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
