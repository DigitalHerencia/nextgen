import "../globals.css";
import { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import Footer from "@/components/shared/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Header from "@/components/shared/Header";

const BebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextGen Management Agency",
  description: "Take the next step to elevate your career",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={BebasNeue.className}>
          <div className="fixed top-0 left-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat bg-fixed background-image" />

          {/* Topbar */}
          <Header activeTool={"ScoutHub"} agent={null} setAgent={null} />

          {/* Main Content */}
          <main className="min-h-screen w-full">{children}</main>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
