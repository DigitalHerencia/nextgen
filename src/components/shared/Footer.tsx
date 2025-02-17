'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-black/80 py-4 backdrop-blur-sm">
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
          <Link href="#" className="text-sm text-gray-300 hover:text-white">
            Contact
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white">
            Docs
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
