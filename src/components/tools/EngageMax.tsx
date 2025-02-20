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
import { Users, BarChart3, Mail } from "lucide-react";

import { TalentCard } from "@/components/cards/talent.card";
import { ContentCard } from "@/components/cards/content.card";

const EngageMax = () =>
{
  const fanSegments = [
    { name: "VIP Fans", count: 120, engagement: "High" },
    { name: "Casual Followers", count: 340, engagement: "Medium" },
    { name: "Inactive Fans", count: 215, engagement: "Low" },
  ];

  const mockTalent = {
    avatar: "/talent/Carla_Avatar.jpg",
    name: "Carla",
    category: "Model",
    bio: "A rising star in the modeling industry.",
    earnings: 15000,
    agent: "Agent X",
    talentManager: "Manager A",
    social_links: {
      instagram: "https://instagram.com/carla",
      twitter: "https://twitter.com/carla",
    },
  };

  const mockContent = {
    _id: "content1",
    talent: "Carla",
    type: "video", // ✅ FIXED: Explicitly defined valid type
    engagement: 120,
    campaign: "Campaign Beta",
    fileUrl: "https://example.com/video.mp4",
    description: "A creative video piece.",
    createdBy: "User456",
    createdAt: new Date(),
    updatedAt: new Date(),
  } as const; // ✅ Ensures strict typing


  return (
    <main className="flex-1 p-8 h-full pb-32 overflow-y-auto">
      <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
        <Card className="base-card">
          <CardHeader>
            <CardTitle>
              <TypographyH2 className="card-title">Engage<span className="text-primary">Max</span></TypographyH2>
            </CardTitle>
            <Separator className="my-2 border-b" />
            <CardDescription>
              <TypographyH4 className="card-description">Maximize fan engagement & insights</TypographyH4>
            </CardDescription>
          </CardHeader>
          <CardContent className="base-card-content">
            <h3 className="text-lg font-bold">Fan Segments</h3>
            <ul className="space-y-4">
              { fanSegments.map( ( segment, index ) => (
                <li key={ index } className="bg-popover p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <TypographyP className="text-lg font-bold">{ segment.name }</TypographyP>
                    <TypographyP className="text-sm">{ segment.count } Fans - Engagement: { segment.engagement }</TypographyP>
                  </div>
                  <Users size={ 24 } className="text-primary" />
                </li>
              ) ) }
            </ul>
            <Separator className="my-4" />
            <TalentCard talent={ mockTalent } />
            <Separator className="my-4" />
            <ContentCard content={ mockContent } />
          </CardContent>
          <CardFooter className="card-footer">
            <Button className="base-button-primary">
              <TypographyLarge className="base-button">View Analytics</TypographyLarge>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </main>
  );
};

export default EngageMax;
