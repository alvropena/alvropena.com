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
      <body className="font-['-apple-system','SF_Pro_Display','SF_Pro_Text','Helvetica_Neue','Helvetica','Arial',sans-serif] antialiased">
        {children}
        <footer className="text-sm text-gray-500 w-full text-center mb-4">
          © {new Date().getFullYear()} Alvaro Peña
        </footer>
      </body>
    </html>
  );
}
