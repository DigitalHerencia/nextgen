"use client";

import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { WalletCards, BriefcaseBusiness, Rss } from "lucide-react";
import "../globals.css";
import { motion } from "framer-motion";


const MotionButton = motion( Button );
const MotionLink = motion( Link );

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-background text-foreground px-6 md:px-12 lg:px-24">
      {/* Background */ }
      <div className="absolute inset-0">
        <Image
          src="/assets/Shapes_Black.png"
          alt="NextGen Management"
          fill
          className="object-cover opacity-85"
          priority
        />
      </div>

      {/* Content */ }
      <div className="relative z-10 w-full max-w-3xl text-center">
        {/* Logo - Reduced size */ }
        <Image
          src="/assets/Main_Black.png"
          alt="NextGen Management Logo"
          width={ 300 }
          height={ 300 }
          className="mx-auto mb-4"
          priority
        />

        {/* Text - More compact */ }
        <TypographyH1 className="text-2xl text-foreground tracking-wide text-center md:text-4xl">
          Take the <span className="text-primary">Next</span> Step to <span className="text-secondary">Elevate</span> Your <span className="text-primary">Career</span>
        </TypographyH1>
        <TypographyP className="text-xl text-input text-center mx-6">
          Join a platform designed to streamline talent management, boost growth, and deliver outstanding results. Discover how we can help you grow your audience and maximize your potential.
        </TypographyP>


        {/* Buttons - More compact layout */ }
        <div className="flex justify-center gap-3 mt-5">
          <SignInButton>
            <MotionButton
              whileHover={ { scale: 1.1 } }
              transition={ { type: "spring", stiffness: 300 } } variant="default" className="hover:bg-gradient hover:text-secondary-foreground px-4 py-2 rounded-lg text-lg">LOGIN
            </MotionButton>
          </SignInButton>
          <SignUpButton>
            <MotionButton
              whileHover={ { scale: 1.1 } }
              transition={ { type: "spring", stiffness: 300 } }
              variant="secondary" className="hover:bg-gradient hover:text-foreground px-4 py-2 rounded-lg text-lg">SIGNUP
            </MotionButton>
          </SignUpButton>
        </div>
      </div>

      {/* Footer - Unchanged */ }
      <footer className="absolute bottom-3 left-4 right-4 flex justify-center space-x-6 text-lg text-input">
        <MotionLink
          whileHover={ { scale: 1.1 } }
          transition={ { type: "spring", stiffness: 300 } }
          href="/services" className="flex items-center gap-1 hover:text-primary">
          <BriefcaseBusiness size={ 16 } />
          <span>Services</span>
        </MotionLink>
        <MotionLink
          whileHover={ { scale: 1.1 } }
          transition={ { type: "spring", stiffness: 300 } }
          href="/pricing" className="flex items-center gap-1 hover:text-primary">
          <WalletCards size={ 16 } />
          <span>Pricing</span>
        </MotionLink>
        <MotionLink
          whileHover={ { scale: 1.1 } }
          transition={ { type: "spring", stiffness: 300 } }
          href="/blog" className="flex items-center gap-1 hover:text-primary">
          <Rss size={ 16 } />
          <span>Blog</span>
        </MotionLink>
      </footer>
    </main>
  );
}
