import React from "react";
import Image from "next/image";
import { AgentComboBox } from "@/components/shared/AgentComboBox";

interface Agent {
  value: string;
  label: string;
  avatar: string;
}

interface HeaderProps {
  activeTool: string | null;
  agent: Agent | null;
  setAgent: React.Dispatch<React.SetStateAction<Agent | null>> | null;
}

const Header: React.FC<HeaderProps> = ({ activeTool, agent, setAgent }) => {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-transparent">
      {/* Left: Active tool name or a placeholder */}
      <div>
        <span className="text-xl font-bold text-foreground">
          {activeTool ?? "No Tool Selected"}
        </span>
      </div>

      {/* Right: User dropdown and avatar */}
      <div className="flex items-center space-x-4">
        {agent && setAgent ? (
          <>
            <AgentComboBox
              selectedAgent={agent}
              onSelectAgent={() => {
                // Handle user options (for example, "Profile", "Settings", etc.)
                setAgent((prev) =>
                  prev
                    ? {
                        ...prev,
                        // In this example we keep the same data
                        value: prev.value,
                        label: prev.label,
                      }
                    : null
                );
              }}
            />
            <Image
              src={agent.avatar}
              alt={`${agent.value} Avatar`}
              width={48}
              height={48}
              className="rounded-full border-2 border-primary"
            />
          </>
        ) : (
          <span className="text-gray-400">Not logged in</span>
        )}
      </div>
    </header>
  );
};

export default Header;
