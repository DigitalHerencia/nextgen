import "../globals.css";
import { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import Footer from "@/components/shared/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import TopNav from "@/components/shared/TopNav";

{/* VARIABLES */ }

const BebasNeue = Bebas_Neue( { weight: "400", subsets: [ "latin" ] } );

export const metadata: Metadata = {
  title: "NextGen Management Agency",
  description: "Take the next step to elevate your career",
};

{/* DEFAULT FUNCTION COMPONENT */ }

export default function RootLayout ( { children }: { children: React.ReactNode } )
{

  {/* MAIN RETURN */ }

  return (
    <ClerkProvider appearance={ { baseTheme: dark } }>
      <html lang="en">
      
        {/* TOPBAR COMPONENT */ }
      
        <TopNav />

          {/* Main Content */ }
    
          <body className={ BebasNeue.className }>
          
          <div className="min-h-screen w-full">
          
            {/* BACKGROUND IMAGE */ }
          
            <div className="fixed top-0 left-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat bg-fixed background-image" />
            { children }
          </div>
          
          {/* FOOTER COMPONENT*/ }

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
