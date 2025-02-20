"use client";

import { motion } from "framer-motion";
import
  {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "@/components/ui/card";
import { TypographyH2, TypographyH4, TypographyP } from "@/components/ui/typography";
import Image from "next/image";

interface Agent {
  clerkId: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  bio?: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
      <Card className="base-card">
        <CardHeader className="flex items-center gap-4">
          <Image
            src={ agent.avatar }
            alt={ agent.name }
            width={ 80 }
            height={ 80 }
            className="rounded-full border-2 border-secondary"
          />
          <div>
            <CardTitle>
              <TypographyH2 className="card-title">{ agent.name }</TypographyH2>
            </CardTitle>
            <CardDescription>
              <TypographyH4 className="card-description">{ agent.role }</TypographyH4>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="base-card-content">
          <TypographyP className="card-content">
            <strong>Email:</strong> { agent.email }
          </TypographyP>
          <TypographyP className="card-content">
            <strong>Status:</strong> { agent.status }
          </TypographyP>
          { agent.bio && (
            <TypographyP className="card-content">
              <strong>Bio:</strong> { agent.bio }
            </TypographyP>
          ) }
        </CardContent>
      </Card>
    </motion.div>
  );
}
