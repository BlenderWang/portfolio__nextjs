import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "@/app/providers";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Shirley Wang",
  description:
    "Latest portfolio built with NextJs, TailwindCSS/Tailwind UI and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-ash font-condensed dark:bg-primary">
        <Providers>
          <div className="relative flex w-full flex-col">
            <Hero />
            <Header />
            <main className="flex-auto">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
