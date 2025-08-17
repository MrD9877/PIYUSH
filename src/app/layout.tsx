import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Anonymous_Pro } from "next/font/google";
import "./globals.css";
import Curtain from "@/components/Curtain";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const popins = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight: ["600", "900"],
});
const anonymous = Anonymous_Pro({
  variable: "--font-anonymous",
  subsets: ["greek"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dhuruv Bansal -Full-Stack",
  description: "This is my  portfolio showing my projects and skill tree for anyone intrested world wide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </head>
      <body style={{ fontWeight: 500, lineHeight: 1, letterSpacing: "-0.025rem" }} className={`${geistSans.variable} ${geistMono.variable} antialiased ${popins.variable} ${anonymous.variable}`}>
        <>
          <div>
            <Curtain />
            {children}
          </div>
        </>
      </body>
    </html>
  );
}
