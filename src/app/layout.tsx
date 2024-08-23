import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SessionWrapper from "@/app/components/SessionWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agent Co-Pilot",
  description: "Agent Co-Pilot for Space Verse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body className={inter.className} suppressHydrationWarning >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SessionWrapper>
            {children}
          </SessionWrapper>
        </ThemeProvider>
      </body>


    </html>
  );
}
