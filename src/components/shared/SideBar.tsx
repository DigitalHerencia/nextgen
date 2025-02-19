"use client";

import React from "react";
import Image from "next/image";
import
{
  HandHeart,
  Repeat,
  UserRoundCheck,
  UserRoundPlus,
  UserRoundSearch,
} from "lucide-react";

interface SideBarProps
{
  selectedTool: string;
  setSelectedTool: ( tool: string ) => void;
}

const SideBar: React.FC<SideBarProps> = ( { selectedTool, setSelectedTool } ) =>
{
  /* SIMULATED DATA */
  const currentUser = {
    name: "Alex Morgan",
    role: "Talent Agent",
    src: "/agents/CarterPP.jpg",
  };

  return (
    <aside className="w-64 bg-sidebar p-6 flex flex-col space-y-6">
      {/* ACTIVE TOOL INDICATOR */ }
      <div className="font-bold text-primary mx-auto mt-16">
        <h1 className="mt-4 text-2xl">
          { selectedTool.replace( /([A-Z])/g, " $1" ).trim() }
        </h1>
      </div>

      {/* NAVIGATION */ }
      <nav className="flex flex-col space-y-2">
        { [
          { name: "ScoutHub", icon: <UserRoundSearch size={ 20 } /> },
          { name: "OnBoarderPro", icon: <UserRoundCheck size={ 20 } /> },
          { name: "CreateFlow", icon: <Repeat size={ 20 } /> },
          { name: "EngageMax", icon: <HandHeart size={ 20 } /> },
          { name: "SocialBoost", icon: <UserRoundPlus size={ 20 } /> },
        ].map( ( { name, icon } ) => (
          <button
            key={ name }
            onClick={ () => setSelectedTool( name ) }
            className={ `flex items-center space-x-3 px-4 py-2 rounded-lg text-lg transition
              ${ selectedTool === name
                ? "bg-primary text-secondary font-bold"
                : "bg-transparent text-input hover:bg-secondary hover:text-primary hover:italic"
              }
            `}
          >
            { icon }
            <span>{ name }</span>
          </button>
        ))}
      </nav>

      {/* CURRENT USER */ }
      <div className="fixed bottom-24 left-12 flex items-center">
        <Image
          src={ currentUser.src }
          alt="User Avatar"
          width={ 48 }
          height={ 48 }
          className="rounded-full border-2 border-accent cursor-pointer"
        />
        <div className="flex flex-col items-left ml-4">
          <p className="text-lg font-semibold">{ currentUser.name }</p>
          <p className="text-sm text-primary">{ currentUser.role }</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
