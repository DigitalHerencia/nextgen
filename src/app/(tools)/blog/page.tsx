import Image from "next/image"
import { Heart, Newspaper, FileVideo } from "lucide-react"


export default function ToolsDashboard() {
  // Current user info remains the same
  const currentUser = {
    name: "Alex Morgan - Talent Agent",
    src: "/assets/example profile pic.jpg"
  };

  const resultContent = (
    <div className="w-full flex items-center bg-sidebar rounded-lg shadow-lg p-6">
      <Image
        src="/assets/kazzandraavatar.jpg"
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
  );

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
        {/* Navigation Items */}
        <nav className="flex flex-col space-y-4">
          <button className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-accent text-black hover:bg-accentHover transition">
            <span>ScoutHub</span>
          </button>
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

        {/* Directly render the result */}
        <div className="mt-6">
          {resultContent}
        </div>
      </main>
    </div>
  );
}