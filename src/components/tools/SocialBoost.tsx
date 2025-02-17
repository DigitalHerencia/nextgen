"use client";

import { useState } from "react";
import Image from "next/image";
import { TypographyH2 } from "@/components/ui/typography";
import { AgentComboBox } from "@/components/shared/AgentComboBox";
import { UserPlus, Heart, MessageCircle } from "lucide-react";
import "@/app/globals.css";

const activityFeed = [
  { user: "JohnDoe23", action: "subscribed", icon: <UserPlus size={20} />, time: "2h ago" },
  { user: "FanGirl99", action: "liked a post", icon: <Heart size={20} />, time: "4h ago" },
  { user: "CreatorX", action: "commented: 'Great content!'", icon: <MessageCircle size={20} />, time: "6h ago" },
  { user: "SocialBoostFan", action: "liked a post", icon: <Heart size={20} />, time: "8h ago" },
  { user: "NewSub456", action: "subscribed", icon: <UserPlus size={20} />, time: "10h ago" },
];

const SocialBoost = () => {
  const [agent, setAgent] = useState({
    value: "Alex Morgan",
    label: "Talent Agent",
    avatar: "/assets/example-profile-pic.jpg",
  });

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="flex justify-between items-center pb-6">
        <TypographyH2>
          Social<span className="text-primary">Boost</span>
        </TypographyH2>
        <div className="flex items-center space-x-4">
          <AgentComboBox selectedAgent={agent} onSelectAgent={setAgent} />
          <Image
            src={agent.avatar}
            alt={`${agent.value} Avatar`}
            width={48}
            height={48}
            className="rounded-full border-2 border-primary"
          />
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Latest Social Media Activity</h2>
        <div className="bg-popover p-6 rounded-lg">
          <ul className="space-y-4">
            {activityFeed.map((activity, index) => (
              <li key={index} className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                <span className="text-primary">{activity.icon}</span>
                <p className="text-popover-foreground">
                  <strong>{activity.user}</strong> {activity.action}
                </p>
                <span className="text-muted-foreground text-sm">{activity.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default SocialBoost;
