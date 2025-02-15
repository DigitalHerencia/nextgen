'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-black/80 py-6 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-4 px-6 md:flex-row md:space-y-0">
        {/* Left: Mark & Copy */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/Mark_Black.png"
            alt="NGMA Mark"
            width={32}
            height={32}
          />
          <span className="text-sm text-gray-300">
            © {new Date().getFullYear()} NextGen Management Agency
          </span>
        </div>

        {/* Right: Footer Links */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            Contact
          </a>
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
