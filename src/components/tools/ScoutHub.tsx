"use client";

{/* IMPORTS */ }

import Image from "next/image";
import { FileVideo, Heart, Newspaper } from "lucide-react";
import "@/app/globals.css";

{/* SIMULATED DATA */ }

const talent = {
  name: `Kazzandra`,
  category: `Influencer`,
  avatar: `/talent/Kazzandra_Avatar.jpg`,
  earnings: 10000,
  social_links: {
    instagram: true,
    twitter: false,
  },
  talentManager: `Alex Morgan`,
};

{/* DEFAULT FUNCTION COMPONENT */ }

export default function ScoutHub ()
{

  {/* MAIN RETURN */ }

  return (
    <main className="flex-1 p-8 overflow-y-auto">

      {/* TALENT CARD */ }

      <div className="w-full flex items-center bg-sidebar rounded-lg shadow-lg p-6">
        <Image
          src={ talent.avatar || "/talent/Goji_Avatar.jpg" }
          alt={ `${ talent.name } Profile` }
          width={ 208 }
          height={ 208 }
          className="rounded-lg shadow-lg"
        />



        <div className="ml-6 w-full">
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold text-foreground">{ talent.name }</p>
            <p className="text-primary text-sm">{ talent.category }</p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4 text-sidebar text-sm text-center">
            <div className="flex flex-col items-center bg-hover p-3 rounded-lg">
              <FileVideo size={ 20 } />
              <span>Earnings: ${ talent.earnings }</span>
            </div>
            <div className="flex flex-col items-center bg-hover p-3 rounded-lg">
              <Heart size={ 20 } />
              <span>{ talent.social_links?.instagram ? "Instagram Linked" : "No IG" }</span>
            </div>
            <div className="flex flex-col items-center bg-hover p-3 rounded-lg">
              <FileVideo size={ 20 } />
              <span>{ talent.social_links?.twitter ? "Twitter Linked" : "No Twitter" }</span>
            </div>
            <div className="flex flex-col items-center bg-hover p-3 rounded-lg">
              <Newspaper size={ 20 } />
              <span>Manager: { talent.talentManager || "N/A" }</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

