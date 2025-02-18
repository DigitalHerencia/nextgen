"use client";

/* IMPORTS */
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { TypographyH1 } from "@/components/ui/typography";
import { motion } from "framer-motion";
import {
  HandHeart,
  Repeat,
  UserRoundCheck,
  UserRoundPlus,
  UserRoundSearch,
} from "lucide-react";

/* TOOL COMPONENT IMPORTS */
import ScoutHub from "@/components/tools/ScoutHub";
import OnBoarderPro from "@/components/tools/OnBoarderPro";
import CreateFlow from "@/components/tools/CreateFlow";
import SocialBoost from "@/components/tools/SocialBoost";
import EngageMax from "@/components/tools/EngageMax";

/* VARIABLES */
const Buttons = motion(Button);

export default function ToolsDashboard() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Track which tool is selected
  const [selectedTool, setSelectedTool] = React.useState("ScoutHub");

  /* SIMULATED DATA */
  const currentUser = {
    name: "Alex Morgan",
    role: "Talent Agent",
    src: "/assets/example-profile-pic.jpg",
  };

  return (
    <div className="flex min-h-screen backdrop-blur-sm text-input">
      {/* SIDEBAR */}
      <aside className="w-64 bg-sidebar p-6 flex flex-col space-y-6">
        {/* ACTIVE TOOL INDICATOR */}
        <div className="font-bold text-primary mx-auto mt-16">
          {selectedTool === "ScoutHub" && (
            <TypographyH1 className="mt-4">
              Scout<span className="text-secondary">Hub</span>
            </TypographyH1>
          )}
          {selectedTool === "OnBoarderPro" && (
            <TypographyH1 className="mt-4">
              Onboarder<span className="text-secondary">Pro</span>
            </TypographyH1>
          )}
          {selectedTool === "CreateFlow" && (
            <TypographyH1 className="mt-4">
              Create<span className="text-secondary">Flow</span>
            </TypographyH1>
          )}
          {selectedTool === "SocialBoost" && (
            <TypographyH1 className="mt-4">
              Social<span className="text-secondary">Boost</span>
            </TypographyH1>
          )}
          {selectedTool === "EngageMax" && (
            <TypographyH1 className="mt-4">
              Engage<span className="text-secondary">Max</span>
            </TypographyH1>
          )}
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-col space-y-2">
          {/* SCOUTHUB */}
          <button
            onClick={() => setSelectedTool("ScoutHub")}
            className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-lg transition
              ${
                selectedTool === "ScoutHub"
                  ? "bg-primary text-secondary font-bold"
                  : "bg-transparent text-border hover:bg-secondary hover:text-primary hover:italic"
              }
            `}
          >
            <UserRoundSearch size={20} />
            <span>ScoutHub</span>
          </button>

          {/* ONBOARDERPRO */}
          <button
            onClick={() => setSelectedTool("OnBoarderPro")}
            className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-lg transition
              ${
                selectedTool === "OnBoarderPro"
                  ? "bg-primary text-secondary font-bold"
                  : "bg-transparent text-border hover:bg-secondary hover:text-primary hover:italic"
              }
            `}
          >
            <UserRoundCheck size={20} />
            <span>OnboarderPro</span>
          </button>

          {/* CREATEFLOW */}
          <button
            onClick={() => setSelectedTool("CreateFlow")}
            className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-lg transition
              ${
                selectedTool === "CreateFlow"
                  ? "bg-primary text-secondary font-bold"
                  : "bg-transparent text-border hover:bg-secondary hover:text-primary hover:italic"
              }
            `}
          >
            <Repeat size={20} />
            <span>CreateFlow</span>
          </button>

          {/* ENGAGEMAX */}
          <button
            onClick={() => setSelectedTool("EngageMax")}
            className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-lg transition
              ${
                selectedTool === "EngageMax"
                  ? "bg-primary text-secondary font-bold"
                  : "bg-transparent text-border hover:bg-secondary hover:text-primary hover:italic"
              }
            `}
          >
            <HandHeart size={20} />
            <span>EngageMax</span>
          </button>

          {/* SOCIALBOOST */}
          <button
            onClick={() => setSelectedTool("SocialBoost")}
            className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-lg transition
              ${
                selectedTool === "SocialBoost"
                  ? "bg-primary text-secondary font-bold"
                  : "bg-transparent text-border hover:bg-secondary hover:text-primary hover:italic"
              }
            `}
          >
            <UserRoundPlus size={20} />
            <span>SocialBoost</span>
          </button>
        </nav>

        {/* CURRENT USER */}
        <div className="fixed bottom-24 left-12 flex items-center">
          <Image
            src={currentUser.src}
            alt="User Avatar"
            width={48}
            height={48}
            className="rounded-full border-2 border-accent cursor-pointer"
          />
          <div className="flex flex-col items-left ml-4">
            <p className="text-lg font-semibold">{currentUser.name}</p>
            <p className="text-sm text-primary">{currentUser.role}</p>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-input focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </Button>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } fixed top-0 left-0 w-full z-0 min-h-screen bg-card p-4 md:fixed md:top-0 md:block md:w-auto md:bg-transparent md:p-0`}
          >
            <div className="mt-4 flex items-center space-x-2 md:mt-0">
              <Buttons
                variant="default"
                className="text-secondary rounded-lg text-lg hover:bg-secondary hover:text-primary"
              >
                Login
              </Buttons>
              <Buttons className="bg-secondary text-background rounded-lg text-lg hover:bg-primary hover:text-secondary">
                Sign Up
              </Buttons>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="p-8 overflow-y-clip relative w-full">
        {/* TOOL RENDER CONTAINER */}
        <div
          className={`absolute bg-transparent overflow-hidden transition-all duration-300
            top-[8rem]
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
