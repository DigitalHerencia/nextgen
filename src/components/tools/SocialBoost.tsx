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
import { UserPlus, Heart, MessageCircle } from "lucide-react";

import { TalentCard } from "@/components/cards/talent.card";
import { CampaignCard } from "@/components/cards/campaign.card";

const SocialBoost = () =>
{
  const activityFeed = [
    { user: "JohnDoe23", action: "subscribed", icon: <UserPlus size={ 20 } />, time: "2h ago" },
    { user: "FanGirl99", action: "liked a post", icon: <Heart size={ 20 } />, time: "4h ago" },
    { user: "CreatorX", action: "commented: 'Great content!'", icon: <MessageCircle size={ 20 } />, time: "6h ago" },
  ];

  const mockTalent = {
    avatar: "/talent/Scarlett_Avatar.jpg",
    name: "Scarlett",
    category: "Photographer",
    bio: "Capturing moments that last forever.",
    earnings: 14000,
    agent: "Agent O",
    talentManager: "Manager F",
    social_links: {
      instagram: "https://instagram.com/scarlett",
      twitter: "https://twitter.com/scarlett",
    },
  };

  const mockCampaign = {
    _id: "campaign1",
    title: "Brand Awareness Campaign",
    budget: 25000,
    metrics: 85,
    performanceData: {},
    brand: "FashionX",
    manager: "Manager G",
    agent: "Agent H",
    startDate: new Date(),
    endDate: new Date(),
    status: "active", // ✅ Fixed: Now explicitly set as a valid union value
    createdBy: "User789",
    createdAt: new Date(),
    updatedAt: new Date(),
  } as const; // ✅ Enforces strict typing to match the expected `Campaign` type

  return (
    <main className="flex-1 p-8 h-full pb-32 overflow-y-auto">
      <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
        <Card className="base-card">
          <CardHeader>
            <CardTitle>
              <TypographyH2 className="card-title">Social<span className="text-primary">Boost</span></TypographyH2>
            </CardTitle>
            <Separator className="my-2 border-b" />
            <CardDescription>
              <TypographyH4 className="card-description">Boost campaigns and track social media activity</TypographyH4>
            </CardDescription>
          </CardHeader>
          <CardContent className="base-card-content">
            <h3 className="text-lg font-bold">Latest Social Media Activity</h3>
            <div className="bg-popover p-6 rounded-lg">
              <ul className="space-y-4">
                { activityFeed.map( ( activity, index ) => (
                  <li key={ index } className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                    <span className="text-primary">{ activity.icon }</span>
                    <TypographyP className="text-popover-foreground">
                      <strong>{ activity.user }</strong> { activity.action }
                    </TypographyP>
                    <span className="text-muted-foreground text-sm">{ activity.time }</span>
                  </li>
                ) ) }
              </ul>
            </div>
            <Separator className="my-4" />
            <TalentCard talent={ mockTalent } />
            <Separator className="my-4" />
            <CampaignCard campaign={ mockCampaign } />
          </CardContent>
          <CardFooter className="card-footer">
            <Button className="base-button-primary">
              <TypographyLarge className="base-button">View Campaign Stats</TypographyLarge>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </main>
  );
};

export default SocialBoost;
