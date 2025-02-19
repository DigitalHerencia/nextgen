"use client";

/* IMPORTS */
import React from "react";


/* TOOL COMPONENT IMPORTS */
import ScoutHub from "@/components/tools/ScoutHub";
import OnBoarderPro from "@/components/tools/OnBoarderPro";
import CreateFlow from "@/components/tools/CreateFlow";
import SocialBoost from "@/components/tools/SocialBoost";
import EngageMax from "@/components/tools/EngageMax";

/* SHARED COMPONENTS */
import SideBar from "@/components/shared/SideBar";

/* VARIABLES */

export default function ToolsDashboard() {
  const [ menuOpen ] = React.useState( false );

  // Track which tool is selected
  const [selectedTool, setSelectedTool] = React.useState("ScoutHub");

  return (
    <div className="flex min-h-screen backdrop-blur-sm text-input">
      {/* SIDEBAR COMPONENT */ }
      <SideBar selectedTool={ selectedTool } setSelectedTool={ setSelectedTool } />

      {/* MAIN CONTENT AREA */}
      <main className="p-8 overflow-y-clip relative w-full">
        {/* TOOL RENDER CONTAINER */}
        <div
          className={`absolute bg-transparent overflow-hidden transition-all duration-300
            top-[5rem]
            ${menuOpen ? "left-[20rem]" : "left-[calc(20rem-20rem)]"}
            right-0 bottom-0
          `}
        >
          {selectedTool === "ScoutHub" && <ScoutHub />}
          {selectedTool === "OnBoarderPro" && <OnBoarderPro />}
          {selectedTool === "CreateFlow" && <CreateFlow />}
          {selectedTool === "SocialBoost" && <SocialBoost />}
          {selectedTool === "EngageMax" && <EngageMax />}
        </div>
      </main>
    </div>
  );
}
