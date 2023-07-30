import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import TopLoader from "@/components/providers/top-loader";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "usufdev.com",
  description: "Dasturlash va Startuplar haqida suhbatlashamiz!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TopLoader />
          <Navbar />
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
