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
import Image from "next/image";

interface Manager {
  clerkId: string;
  name: string;
  managedTalent: string[]; // Assuming these are already resolved names or identifiers
  commission: number;
  avatar?: string;
  bio?: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}

export function ManagerCard ( { manager, onClick }: { manager: Manager; onClick?: () => void } )
{
  return (
    <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
      <Card className="base-card">
        <CardHeader>
          <div className="flex items-center gap-4">
            { manager.avatar && (
              <Image
                src={ manager.avatar }
                alt={ manager.name }
                width={ 80 }
                height={ 80 }
                className="rounded-full border-2 border-secondary"
              />
            ) }
            <div>
              <CardTitle>
                <TypographyH2 className="card-title">{ manager.name }</TypographyH2>
              </CardTitle>
              <CardDescription>
                <TypographyH4 className="card-description">
                  { manager.status.toUpperCase() }
                </TypographyH4>
              </CardDescription>
            </div>
          </div>
          <Separator className="my-2 border-b" />
        </CardHeader>

        <CardContent className="base-card-content">
          <TypographyP className="card-content">
            <strong>Commission:</strong> { manager.commission }%
          </TypographyP>
          <TypographyP className="card-content">
            <strong>Managed Talent:</strong> { manager.managedTalent.join( ", " ) }
          </TypographyP>
          { manager.bio && (
            <TypographyP className="card-content">
              <strong>Bio:</strong> { manager.bio }
            </TypographyP>
          ) }
        </CardContent>

        <CardFooter className="card-footer">
          <Button onClick={ onClick } className="base-button-primary">
            <TypographyLarge className="base-button">
              View Profile
            </TypographyLarge>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
