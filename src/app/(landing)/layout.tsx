import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const BebasNeue = Bebas_Neue( { weight: '400', subsets: [ 'latin' ] } );

export const metadata: Metadata = {
  title: 'NextGen',
  description: 'Take your career to the next level',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
} )
{
  return (
    <ClerkProvider
      appearance={ {
        baseTheme: dark,
      } }>
      <html lang="en">
        <body className={ BebasNeue.className }>
          { children }
        </body>
      </html>
    </ClerkProvider>

    );
  }