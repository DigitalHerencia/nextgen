import React from "react";

interface SidebarProps {
  activeTool: string;
  setActiveTool: (tool: string) => void;
}

const tools = ["ScoutHub", "OnboardPro", "CreateFlow", "EngageMax", "SocialBoost"];

const Sidebar: React.FC<SidebarProps> = ({ activeTool, setActiveTool }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Tools</h2>
      <nav className="space-y-2">
        {tools.map((tool) => (
          <button 
            key={tool} 
            onClick={() => setActiveTool(tool)}
            className={`block w-full text-left px-4 py-2 rounded ${activeTool === tool ? 'bg-primary' : 'hover:bg-gray-700'}`}
          >
            {tool}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
