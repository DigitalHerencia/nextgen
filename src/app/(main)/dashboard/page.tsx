"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/shared/SideBar";
import Header from "@/components/shared/Header";
import OnboardPro from "@/components/tools/OnBoarderPro";
import CreateFlow from "@/components/tools/CreateFlow";
import EngageMax from "@/components/tools/EngageMax";
import SocialBoost from "@/components/tools/SocialBoost";
import "@/app/globals.css";



interface Agent {
  value: string;
  label: string;
  avatar: string;
}

const ToolsDashboard = () => {
  const [activeTool, setActiveTool] = useState("ScoutHub");
  const [agent, setAgent] = useState<Agent | null>({
    value: "Alex Morgan",
    label: "Talent Agent",
    avatar: "/assets/example-profile-pic.jpg",
  });


  useEffect(() => {
    async function loadTalents() {
      try {
        
      } catch (error) {
        console.error("Error fetching talents:", error);
      }
    }
    loadTalents();
  }, []);

  const renderActiveTool = () => {
    switch (activeTool) {
      case "ScoutHub":
      
      case "OnboardPro":
        return <OnboardPro />;
      case "CreateFlow":
        return <CreateFlow />;
      case "EngageMax":
        return <EngageMax />;
      case "SocialBoost":
        return <SocialBoost />;
      default:
        
    }
  };

  return (
    <div className="flex min-h-screen overflow-hidden bg-background text-foreground">
      <Sidebar activeTool={activeTool} setActiveTool={setActiveTool} />
      <div className="flex-1 flex flex-col">
        <Header agent={agent} setAgent={setAgent} activeTool={activeTool} />
        <main className="p-8 overflow-y-auto">{renderActiveTool()}</main>
      </div>
    </div>
  );
};

export default ToolsDashboard;
