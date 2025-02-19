import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {  TypographyH4 } from "@/components/ui/typography";

interface Content {
  id: number;
  type: string;
  engagement: string;
  campaign: string;
}

export function ContentCard({ content }: { content: Content }) {
    return (
      <Card className="p-4 text-input bg-transparent">


        <CardHeader>
          <TypographyH4 className="font-bold">Content #{content.id}</TypographyH4>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm"><strong>Type:</strong> {content.type}</p>
          <p className="text-sm"><strong>Engagement:</strong> {content.engagement}</p>
          <p className="text-sm"><strong>Associated Campaign:</strong> {content.campaign}</p>
        </CardContent>
      </Card>
    );
  }