"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH4 } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

interface Talent {
  avatar: string;
  name: string;
  category: string;
  bio: string;
  earnings: number;
  agent: string;
  talentManager: string;
  social_links?: {
    instagram?: string;
    twitter?: string;
  };
}

// Talent Card Component
export function TalentCard({ talent }: { talent: Talent }) {
  return (
    <Card className="rounded-lg p-4 bg-primary-foreground text-primary shadow-lg">
      <CardHeader className="flex items-center gap-4">
        <Image src={talent.avatar} alt={talent.name} width={80} height={80} className="rounded-full border-2 border-primary" />
        <div>
          <TypographyH4 className="font-bold">{talent.name}</TypographyH4>
          <Badge variant="secondary" className="text-sm">{talent.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{talent.bio}</p>
        <Separator />
        <p className="text-sm"><strong>Earnings:</strong> ${talent.earnings}</p>
        <p className="text-sm"><strong>Agent:</strong> {talent.agent}</p>
        <p className="text-sm"><strong>Manager:</strong> {talent.talentManager}</p>
        <Separator />
        <div className="flex gap-2">
          <Link href={talent.social_links?.instagram || "#"} className="text-sm text-primary">Instagram</Link>
          <Link href={talent.social_links?.twitter || "#"} className="text-sm text-primary">Twitter</Link>
        </div>
      </CardContent>
    </Card>
  );
}
