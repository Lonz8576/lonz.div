import type { Metadata } from "next";

import 'tailwindcss'
import "app/globals.css"



import { navItems } from "./components"
import { FloatingNav } from "./components/FloatingNav"

export const metadata: Metadata = {
  title: "Nic's Portfolio",
  description: "Frontend developer portfolio created with Next.js",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='justify-center'>
          <FloatingNav navItems={navItems}  />
        {children}
      </body>
    </html>
  );
}
