import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { WalletCards, Mail, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-black text-white px-6 md:px-12 lg:px-24">
      {/* Background */ }
      <div className="absolute inset-0">
        <Image
          src="/assets/Shapes_Black.png"
          alt="NextGen Management"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Content */ }
      <div className="relative z-10 w-full max-w-3xl text-left">
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
        <TypographyH1 className="text-2xl tracking-wide text-center md:text-4xl">
          Take the Next Step to Elevate Your Career
        </TypographyH1>
        <TypographyP className="text-lg text-gray-300 text-center mx-6">
          Join a platform designed to streamline talent management, boost growth, and deliver outstanding results. Discover how we can help you grow your audience and maximize your potential.
        </TypographyP>


        {/* Buttons - More compact layout */ }
        <div className="flex justify-center gap-3 mt-5">
          <SignInButton>
            <Button variant="default" className="px-4 py-2 text-sm">LOGIN</Button>
          </SignInButton>
          <SignUpButton>
            <Button variant="secondary" className="px-4 py-2 text-sm">SIGNUP</Button>
          </SignUpButton>
        </div>
      </div>

      {/* Footer - Unchanged */ }
      <footer className="absolute bottom-4 left-4 right-4 flex justify-center space-x-6 text-sm text-gray-300">
        <Link href="/level-up" className="flex items-center gap-1 hover:text-white">
          <Mail size={ 16 } />
          <span>Learn More</span>
        </Link>
        <Link href="/pricing" className="flex items-center gap-1 hover:text-white">
          <WalletCards size={ 16 } />
          <span>Pricing</span>
        </Link>
        <Link href="/privacy" className="flex items-center gap-1 hover:text-white">
          <Shield size={ 16 } />
          <span>Privacy Policy</span>
        </Link>
      </footer>
    </main>
  );
}
