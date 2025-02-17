"use client";

import { useState } from "react";
import Image from "next/image";
import { TypographyH2 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { AgentComboBox } from "@/components/shared/AgentComboBox";
import { Users, BarChart3, Mail } from "lucide-react";
import "@/app/globals.css";

const fanSegments = [
  { name: "VIP Fans", count: 120, engagement: "High" },
  { name: "Casual Followers", count: 340, engagement: "Medium" },
  { name: "Inactive Fans", count: 215, engagement: "Low" },
];

const EngageMax = () => {
  const [agent, setAgent] = useState({
    value: "Alex Morgan",
    label: "Talent Agent",
    avatar: "/assets/example-profile-pic.jpg",
  });

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="flex justify-between items-center pb-6">
        <TypographyH2>
          Engage<span className="text-primary">Max</span>
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
        <h2 className="text-xl font-semibold mb-4">Fan Segments</h2>
        <ul className="space-y-4">
          {fanSegments.map((segment, index) => (
            <li key={index} className="bg-popover p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="text-lg font-bold text-popover-foreground">{segment.name}</p>
                <p className="text-sm text-muted-foreground">{segment.count} Fans - Engagement: {segment.engagement}</p>
              </div>
              <Users size={24} className="text-primary" />
            </li>
          ))}
        </ul>
        <h3 className="text-lg font-bold mt-6">CRM Actions</h3>
        <div className="flex space-x-4 mt-4">
          <Button className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg">
            <BarChart3 size={20} />
            <span>Analytics</span>
          </Button>
          <Button className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg">
            <Mail size={20} />
            <span>Send Campaign</span>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default EngageMax;
