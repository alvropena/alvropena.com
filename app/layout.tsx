import type { Metadata } from "next";
import "./globals.css";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

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
      <body className="font-['-apple-system','SF_Pro_Display','SF_Pro_Text','Helvetica_Neue','Helvetica','Arial',sans-serif] antialiased min-h-screen flex flex-col justify-between p-4">
        <div />
        <main className="flex items-center justify-center w-full">
          {children}
        </main>
        <footer className="text-sm text-gray-500 w-full text-center space-y-2">
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/alvropena"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              <GitHubLogoIcon width={20} height={20} />
            </a>
            <a
              href="https://linkedin.com/in/alvropena"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              <LinkedInLogoIcon width={20} height={20} />
            </a>
            <a
              href="https://twitter.com/alvropena"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              <TwitterLogoIcon width={20} height={20} />
            </a>
          </div>
          <div>© {new Date().getFullYear()} Alvaro Peña</div>
        </footer>
      </body>
    </html>
  );
}
