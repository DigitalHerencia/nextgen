"use client";

import { useState } from "react";
import Image from "next/image";
import { TypographyH2 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileVideo, Heart, Newspaper } from "lucide-react";
import "@/app/globals.css";

interface Talent {
  name: string;
  bio: string;
  category: string;
  earnings: number;
  avatar?: string | null;
  agent?: string | null;
  social_links?: {
    instagram?: string;
    twitter?: string;
  };
  talentManager?: string | null;
}

interface ScoutHubProps {
  talents: Talent[];
}

const TalentCard = ({ talent }: { talent: Talent }) => (
  <div className="w-full flex items-center bg-sidebar rounded-lg shadow-lg p-6">
    <Image
      src={talent.avatar || "/assets/example-profile-pic.jpg"}
      alt={`${talent.name} Profile`}
      width={208}
      height={208}
      className="rounded-lg shadow-lg"
    />
    <div className="ml-6 w-full">
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold text-foreground">{talent.name}</p>
        <p className="text-pink-400 text-sm">{talent.category}</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4 text-pink-400 text-sm text-center">
        <div className="flex flex-col items-center bg-hover p-3 rounded-lg">
          <FileVideo size={20} />
          <span>Earnings: ${talent.earnings}</span>
        </div>
        <div className="flex flex-col items-center bg-hover p-3 rounded-lg">
          <Heart size={20} />
          <span>{talent.social_links?.instagram ? "Instagram Linked" : "No IG"}</span>
        </div>
        <div className="flex flex-col items-center bg-hover p-3 rounded-lg">
          <FileVideo size={20} />
          <span>{talent.social_links?.twitter ? "Twitter Linked" : "No Twitter"}</span>
        </div>
        <div className="flex flex-col items-center bg-hover p-3 rounded-lg">
          <Newspaper size={20} />
          <span>Manager: {talent.talentManager || "N/A"}</span>
        </div>
      </div>
    </div>
  </div>
);

const ScoutHub: React.FC<ScoutHubProps> = ({ talents }) => {
  const [search, setSearch] = useState("");

  const filteredTalents = talents.filter(talent =>
    talent.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="flex justify-between items-center pb-6">
        <TypographyH2>
          Scout<span className="text-primary">Hub</span>
        </TypographyH2>
      </header>

      {/* Search bar */}
      <div className="flex justify-center w-full mb-8">
        <div className="flex w-full max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="@Talent Username"
            className="flex-1 px-4 py-2 rounded-l-lg bg-popover text-popover-foreground placeholder-muted"
          />
          <Button
            variant="default"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-r-lg font-semibold"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Scrollable talent cards */}
      <ScrollArea className="h-[600px] rounded-lg border border-gray-700 p-4">
        <div className="space-y-4">
          {filteredTalents.length > 0 ? (
            filteredTalents.map((talent, index) => (
              <TalentCard key={index} talent={talent} />
            ))
          ) : (
            <p className="text-muted-foreground text-center">No talents found</p>
          )}
        </div>
      </ScrollArea>
    </main>
  );
};

export default ScoutHub;
