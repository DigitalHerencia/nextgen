/* IMPORTS */
import "../globals.css";
import { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import Footer from "@/components/shared/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Header from "@/components/shared/Header";

/* VARIABLES */
const BebasNeue = Bebas_Neue( { weight: "400", subsets: [ "latin" ] } );

export const metadata: Metadata = {
  title: "NextGen Management Agency",
  description: "Take the next step to elevate your career",
};

export default function RootLayout ( { children }: { children: React.ReactNode } )
{
  return (
    <html lang="en">
      {/* Optionally, you can include a <head> section here */ }
      <head />
      <body className={ BebasNeue.className }>
        {/* Wrap your application in ClerkProvider inside the body */ }
        <ClerkProvider appearance={ { baseTheme: dark } }>
          {/* HEADER COMPONENT */ }
          <Header />

          {/* MAIN CONTENT */ }
          <div className="min-h-screen w-full">
            {/* BACKGROUND IMAGE */ }
            <div className="fixed top-0 left-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat bg-fixed background-image" />
            { children }
          </div>

          {/* FOOTER COMPONENT */ }
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
