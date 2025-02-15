import '../globals.css'
import { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import TopNav from '@/components/shared/TopNav'
import Footer from '@/components/shared/Footer'
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";



const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  title: 'NextGen Management Agency',
  description: 'Take the next step to elevate your career',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
          >
    <html lang="en" className={`${bebas.variable}`}>
      <body
        className="bg-[#0a0a0a] text-white antialiased"
        style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
      >
        {/* Fixed background image */}
        <div
          className="fixed top-0 left-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: 'url("/assets/Shapes_Black.png")' }}
        />

        {/* Top Navigation (shared) */}
        <TopNav />

        {/* Main Content */}
        <main className="min-h-screen w-full pt-16">{children}</main>

        {/* Footer (shared) */}
        <Footer />
      </body>
    </html>
  </ClerkProvider>
  )
}
