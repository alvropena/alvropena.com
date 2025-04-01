import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alvaro Peña",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-['-apple-system','SF_Pro_Display','SF_Pro_Text','Helvetica_Neue','Helvetica','Arial',sans-serif] antialiased h-screen flex flex-col items-center justify-center p-4">
        <div className="flex-1 flex items-center">
          {children}
        </div>
        <footer className="text-sm text-gray-500 w-full text-center mt-8">
          © {new Date().getFullYear()} Alvaro Peña
        </footer>
      </body>
    </html>
  );
}
