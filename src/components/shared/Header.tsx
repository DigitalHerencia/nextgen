"use client"

{/* IMPORTS */ }

import React, { type JSX } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Newspaper, FileVideo, } from 'lucide-react'

{/* VARIABLES */ }

{/* DEFAULT FUNCTION COMPONENT */ }

export default function TopNav ()
{

  {/* STATE */ }

  const [ searchInput, setSearchInput ] = React.useState( "" )
  const [ searchResult, setSearchResult ] = React.useState<JSX.Element | null>( null );

  {/* SIMULATED SEARCH LOGIC */ }

  function handleSearch ()
  {
    if ( searchInput === "@KAZZANDRA" )
    {
      setSearchResult(
        // TALENT CARD  
        <div className="flex items-center bg-sidebar b-border rounded-lg shadow-lg p-6">
          <Image
            src="/assets/Kazzandra_Avatar.jpg"
            alt="Kazzandra Profile"
            width={ 208 }  // w-52
            height={ 208 } // h-52
            className="rounded-lg shadow-lg"
          />
          <div className="ml-6 w-full">
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold text-input tracking-wide">@Kazzandra</p>
              <p className="text-primary text-sm">10.6K Subscribers</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4 text-input text-lg text-center">
              <div className="flex flex-col items-center p-3 rounded-lg bg-popover">
                <FileVideo size={ 20 } />
                <span className="text-primary">629 Photos</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-popover">
                <Heart size={ 20 } />
                <span className="text-primary">5.9K Likes</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-popover">
                <FileVideo size={ 20 } />
                <span className="text-primary">141 Videos</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-popover">
                <Newspaper size={ 20 } />
                <span className="text-primary">131 Posts</span>
              </div>
            </div>
          </div>
        </div>
      )
    } else
    {
      setSearchResult( <p className="text-primary mt-4">User not found. Try another username.</p> )
    }
  }  

  {/* MAIN RETURN */ }

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full h-20 md:bg-background md:backdrop-blur-md px-11 py-2 bg-background">

        {/* Logo */ }

        <div className="flex items-center px-4 py-2">
          <Image
            src="/assets/Main_Black.png"
            alt="NextGen Management Logo"
            width={ 135 }
            height={ 135 }
            priority
          />
      </div>


        {/* SEARCH BAR */ }

        <div className="fixed right-12 top-6">
          <input
            type="text"
            className="p-1 px-4 w-64 bg-hover text-border rounded-lg"
            placeholder="@OnlyFans Username"
            value={ searchInput }
            onChange={ ( e ) => setSearchInput( e.target.value ) }
          />
          <Button
            variant="default"
            className="ml-4 px-6 py-2 bg-accent text-border text-lg font-bold rounded-lg hover:bg-secondary"
            onClick={ handleSearch }
          >
            Search
          </Button>
      </div>
      </div>

      {/* SEARCH RESULTS */ }

      <div className="fixed z-50 top-32 left-80">
        { searchResult }
      </div>
    </>
  )
}

