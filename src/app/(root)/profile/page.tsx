"use client";

{/* IMPORTS */}

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import React from 'react';
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"
import { TypographyH1 } from '@/components/ui/typography';
import { motion } from "framer-motion"
import { HandHeart, Repeat, UserRoundCheck, UserRoundPlus, UserRoundSearch } from 'lucide-react';

{/* VARIABLES */}

const Buttons = motion( Button );
  
  {/* DEFAULT FUNCTION COMPONENT */}
  
  export default function ToolsDashboard() {
    const [ menuOpen, setMenuOpen ] = React.useState( false )
    
    {/* SIMULATED DATA */}
    
    const currentUser = {
      name: `Alex Morgan`,
      role: `Talent Agent`,
      src: "/assets/example-profile-pic.jpg",
    }

  {/* MAIN RETURN */}
    
  return (
    <div className="flex min-h-screen backdrop-blur-sm text-input">
      
      {/* SIDEBAR */}
      
      <aside className="w-64  bg-sidebar p-6 flex flex-col space-y-6">
        
        {/* ACTIVE TOOL INDICATOR */}
        
        <div className="font-bold text-primary mx-auto mt-16">
        <TypographyH1 className='mt-4'>Scout<span className='text-secondary'>Hub</span></TypographyH1>
        </div>
        
        {/* NAVIGATION */}
        
        <nav className="flex flex-col space-y-2">
          
          {/* ACTIVE OR DEFAULT */}
          
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-accent text-border text-lg hover:bg-accentHover transition">
            <UserRoundSearch size={20} />
            <span>ScoutHub</span>
          </button>
          
          {/* INACTIVE */}
          
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-hover transition">
            <UserRoundCheck size={20} />
            <span>OnboardPro</span>
          </button>
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-hover transition">
            <Repeat size={20} />
            <span>CreateFlow</span>
          </button>
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-hover transition">
            <HandHeart size={20} />  
            <span>EngageMax</span>
          </button>
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-hover transition">
            <UserRoundPlus size={20} />
            <span>SocialBoost</span>
          </button>
        </nav>
        
        {/* Nav + Auth Actions (Desktop & Mobile) */ }
        
        {/* CURRENT USER */}
        
        <div className="fixed bottom-24 left-12 flex justify-between items-center  ">
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
        
        {/* Mobile Menu Toggle */ }

        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Button
          onClick={ () => setMenuOpen( !menuOpen ) }
          className="flex items-center justify-center rounded-lg p-2 text-input focus:outline-none md:hidden"
          aria-label="Toggle Menu"
          >
          { menuOpen ? <CloseIcon size={ 20 } /> : <MenuIcon size={ 20 } /> }
          </Button>
          <div
            className={ `${ menuOpen ? "block" : "hidden"
            } fixed top-0 left-0 w-full z-0 min-h-screen bg-card p-4 md:fixed md:top-0 md:block md:w-auto md:bg-transparent md:p-0` }
          >
            
          {/* Auth Actions */ }
            
            <div className="mt-4 flex items-center space-x-2 md:mt-0">
              <Buttons
                variant="default"
                className="text-secondary rounded-lg text-lg hover:bg-secondary hover:text-primary"
              >
                Login
              </Buttons>
              <Buttons className="bg-secondary text-background rounded-lg text-lg hover:bg-primary hover:text-secondary"
              >
                Sign Up
              </Buttons>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      
      <main className=" p-8 overflow-y-clip">
              
      </main>
    </div>
  )
}