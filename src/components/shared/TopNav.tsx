'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu' // Adjust import path
import { Button } from '@/components/ui/button'

export default function TopNav() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/80 px-6 py-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/Main_Black.png"
            alt="NextGen Management Logo"
            width={48}
            height={48}
            priority
          />
          <span className="text-2xl text-white">NextGen Management</span>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white">Go Home</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white">View Plans</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/additional-revenue" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white">Revenue Streams</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Actions (Clerk or custom) */}
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="border-white/50 text-white hover:bg-white/10">
            Login
          </Button>
          <Button className="bg-[#ff00ff] text-black hover:opacity-90">Sign Up</Button>
        </div>
      </div>
    </header>
  )
}
