'use client'

{/* IMPORTS */ }

import Image from 'next/image'
import Link from 'next/link'

{/* DEFAULT FUNCTION COMPONENT */ }

export default function Footer() {

  { /* MAIN RETURN */ }

  return (
    <footer className="fixed bottom-0 w-full bg-background py-2 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-4 px-6 md:flex-row md:space-y-0">

        {/* LEFT: MARK & COPY */ }

        <div className="flex items-center space-x-2">
          <Image
            src="/branding/Mark_Black.png"
            alt="NGMA Mark"
            width={32}
            height={32}
          />
          <span className="text-sm text-input">
            © {new Date().getFullYear()} NextGen Management Agency
          </span>
        </div>

        {/* RIGHT: FOOTER LINKS */ }

        <div className="flex items-center space-x-4">
          <Link href="#" className="text-sm text-input hover:text-primary">
            Docs
          </Link>
          <Link href="#" className="text-sm text-input hover:text-primary">
            Contact
          </Link>
          <Link href="#" className="text-sm text-input hover:text-primary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
