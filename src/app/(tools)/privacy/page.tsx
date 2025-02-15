import Image from 'next/image'
// Example from shadcn/ui
import { Button } from '@/components/ui/button'
import { Heart, Newspaper, Search, FileVideo } from 'lucide-react'
import React from 'react';

export default function ToolsDashboard() {
  // Simulate data
  const currentUser = {
    name: "Alex Morgan - Talent Agent",
    src: 'https://raw.githubusercontent.com/DigitalHerencia/NextGenManagementAgency/refs/heads/master/public/assets/example%20profile%20pic.jpg'
  }

  // For the search input
  const [searchInput, setSearchInput] = React.useState("")
  const [searchResult, setSearchResult] = React.useState<JSX.Element | null>(null)

  function handleSearch() {
    if (searchInput === "@Kazzandra") {
      setSearchResult(
        <div className="w-full flex items-center bg-sidebar rounded-lg shadow-lg p-6">
          <Image
            src="https://raw.githubusercontent.com/DigitalHerencia/NextGenManagementAgency/refs/heads/master/public/assets/kazzandraavatar.jpg"
            alt="Kazzandra Profile"
            width={208}  // w-52
            height={208} // h-52
            className="rounded-lg shadow-lg"
          />
          <div className="ml-6 w-full">
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold text-foreground">@Kazzandra</p>
              <p className="text-pink-400 text-sm">10.6K Subscribers</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4 text-pink-400 text-sm text-center">
              <div className="flex flex-col items-center bg-hover p-3 rounded-lg">
                <FileVideo size={20} />
                <span>629 Photos</span>
              </div>
              <div className="flex flex-col items-center bg-hover p-3 rounded-lg">
                <Heart size={20} />
                <span>5.9K Likes</span>
              </div>
              <div className="flex flex-col items-center bg-hover p-3 rounded-lg">
                <FileVideo size={20} />
                <span>141 Videos</span>
              </div>
              <div className="flex flex-col items-center bg-hover p-3 rounded-lg">
                <Newspaper size={20} />
                <span>131 Posts</span>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      setSearchResult(<p className="text-error mt-4">User not found. Try another username.</p>)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* SIDEBAR */}
      <aside className="w-64 bg-sidebar p-6 flex flex-col space-y-6">
        <Image
          src="/assets/Main_Black.png"
          alt="NGMA Logo"
          width={160}
          height={60}
          className="mx-auto"
        />

        {/* Example nav items */}
        <nav className="flex flex-col space-y-4">
          {/* Active or default */}
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-accent text-black hover:bg-accentHover transition">
            <Search />
            <span>ScoutHub</span>
          </button>
          {/* Inactive nav items */}
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-hover transition">
            <span>OnboardPro</span>
          </button>
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-hover transition">
            <span>CreateFlow</span>
          </button>
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-hover transition">
            <span>EngageMax</span>
          </button>
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-hover transition">
            <span>SocialBoost</span>
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center pb-6 border-b border-border">
          <h1 className="text-3xl font-bold">ScoutHub</h1>
          <div className="flex items-center space-x-4">
            <p className="text-lg font-semibold">{currentUser.name}</p>
            <Image
              src={currentUser.src}
              alt="User Avatar"
              width={48}
              height={48}
              className="rounded-full border-2 border-accent cursor-pointer"
            />
          </div>
        </header>

        {/* Search Section */}
        <div className="mt-6">
          <input
            type="text"
            className="p-2 rounded bg-hover text-white w-64 border border-border"
            placeholder="Enter OnlyFans username"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button
            variant="default"
            className="ml-4 px-6 py-2 bg-accent text-black font-bold rounded-lg hover:bg-accentHover transition"
            onClick={handleSearch}
          >
            Search
          </Button>

          <div className="mt-4">{searchResult}</div>
        </div>
      </main>
    </div>
  )
}