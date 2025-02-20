"use client";

import { TalentCard } from "@/components/cards/talent.card";
import { TypographyH1 } from "../ui/typography";

const talentList = [
  {
    name: "Carla",
    category: "Model",
    avatar: "/talent/Carla_Avatar.jpg",
    bio: "A rising star in the modeling industry.",
    earnings: 15000,
    agent: "Agent X",
    talentManager: "Manager A",
    social_links: {
      instagram: "https://instagram.com/carla",
      twitter: "https://twitter.com/carla",
    },
  },
  {
    name: "Goji",
    category: "Musician",
    avatar: "/talent/Goji_Avatar.jpg",
    bio: "A talented musician redefining hip-hop.",
    earnings: 20000,
    agent: "Agent Y",
    talentManager: "Manager B",
    social_links: {
      instagram: "https://instagram.com/goji",
      twitter: "https://twitter.com/goji",
    },
  },
  {
    name: "Juan",
    category: "Actor",
    avatar: "/talent/Juan_Avatar.jpg",
    bio: "Award-winning actor with a growing fanbase.",
    earnings: 18000,
    agent: "Agent Z",
    talentManager: "Manager C",
    social_links: {
      instagram: "https://instagram.com/juan",
      twitter: "https://twitter.com/juan",
    },
  },
  {
    name: "Kazzandra",
    category: "Influencer",
    avatar: "/talent/Kazzandra_Avatar.jpg",
    bio: "Fashion influencer and digital creator.",
    earnings: 12000,
    agent: "Agent M",
    talentManager: "Manager D",
    social_links: {
      instagram: "https://instagram.com/kazzandra",
      twitter: "https://twitter.com/kazzandra",
    },
  },
  {
    name: "Regina",
    category: "Fitness Coach",
    avatar: "/talent/Regina_Avatar.jpg",
    bio: "Leading fitness coach empowering people daily.",
    earnings: 25000,
    agent: "Agent N",
    talentManager: "Manager E",
    social_links: {
      instagram: "https://instagram.com/regina",
      twitter: "https://twitter.com/regina",
    },
  },
  {
    name: "Scarlett",
    category: "Photographer",
    avatar: "/talent/Scarlett_Avatar.jpg",
    bio: "Capturing moments that last forever.",
    earnings: 14000,
    agent: "Agent O",
    talentManager: "Manager F",
    social_links: {
      instagram: "https://instagram.com/scarlett",
      twitter: "https://twitter.com/scarlett",
    },
  },
];

export default function ScoutHub ()
{
  return (
    <main className="flex-1 p-8 overflow-y-auto max-h-[80vh] pb-16">
      <TypographyH1 className="text-input card-title">ScoutHub: Talent Discovery</TypographyH1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6   p-4">
        { talentList.map( ( talent, index ) => (
          <TalentCard key={ index } talent={ talent } />
        ) ) }
      </div>
    </main>
  );
}
