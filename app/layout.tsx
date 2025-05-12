import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { BottomNav } from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Alvaro Peña",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>
              <div>
                <div className="pb-20">{children}</div>
              </div>
            </main>
            <BottomNav />
          </ThemeProvider>
        </body>
      </html>
      <Analytics />
    </>
  );
}
