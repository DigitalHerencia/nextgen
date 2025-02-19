"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"
import { motion } from "framer-motion"

const Buttons = motion.create( Button );

export default function TopNav() {
  const [ menuOpen, setMenuOpen ] = React.useState( false )

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full md:bg-background  px-6 py-2 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}

        <div className="flex items-center space-x-2">
          <Image
              src="/branding/Main_Black.png"
            alt="NextGen Management Logo"
            width={ 125 }
            height={ 125 }
            priority
          />
        </div>

        {/* Mobile Menu Toggle */ }
        <Button
          onClick={ () => setMenuOpen( !menuOpen ) }
          className="flex items-center justify-center rounded-lg p-2 text-input focus:outline-none md:hidden"
          aria-label="Toggle Menu"
        >
          { menuOpen ? <CloseIcon size={ 20 } /> : <MenuIcon size={ 20 } /> }
        </Button>

        {/* Nav + Auth Actions (Desktop & Mobile) */ }
        <div
          className={ `${ menuOpen ? "block" : "hidden"
            } fixed top-[62] left-0 w-full z-0 bg-card p-4 md:static md:block md:w-auto md:bg-transparent md:p-0` }
        >
          <nav className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-6">
            {/* Navigation Menu */ }
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="text-input text-base hover:text-primary"
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/pricing"
                      className="text-input text-base hover:text-primary"
                    >
                      Pricing
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services"
                      className="text-input text-base hover:text-primary"
                    >
                      Services
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Auth Actions */ }
            <div className="mt-4 flex items-center space-x-2 md:mt-0">
              <Buttons
                variant="default"
                className="text-secondary rounded-lg text-lg hover:bg-secondary hover:text-primary"
              >
                Login
              </Buttons>
              <Buttons className="bg-secondary text-background rounded-lg text-lg hover:bg-primary hover:text-secondary">
                Sign Up
              </Buttons>
            </div>
          </nav>
        </div>
      </div>
      </div>
    </>
  )
}
