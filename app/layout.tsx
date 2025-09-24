import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Maruf Hasan",
  description: "Maruf Hasan's portfolio",
};

const junicode = localFont({
  src: [
    {
      path: "../public/fonts/JunicodeVF-Roman-subset.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-junicode",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${junicode.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            staticity={50}
            color="#ffffff"
            size={0.8}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
