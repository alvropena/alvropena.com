import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

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
        <body className="font-['-apple-system','SF_Pro_Display','SF_Pro_Text','Helvetica_Neue','Helvetica','Arial',sans-serif] antialiased min-h-screen flex flex-col p-4">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />

            <main className="flex flex-col items-center w-full flex-1 mt-1">
              <div className="w-full max-w-3xl mx-auto flex flex-col h-full">
                <div className="flex-1 h-full flex flex-col">{children}</div>
              </div>
            </main>

            <Footer />
          </ThemeProvider>
        </body>
      </html>
      <Analytics />
    </>
  );
}
