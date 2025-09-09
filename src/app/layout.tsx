import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import PageTransitionWrapper from "@/app/components/PageTransitionWrapper";
import Chatbot from "@/app/components/Chatbot";
import { defaultMetadata } from "@/app/metadata";

const satoshiFont = localFont({
  src: [
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Italic.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Bold.otf",
      weight: "500",
      style: "medium",
    },
  ],
});

export const metadata = defaultMetadata;




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${satoshiFont.className}`}
      >
        <Navbar />
        <Chatbot />
        <PageTransitionWrapper>
          {children}
        </PageTransitionWrapper>
      </body>
    </html>
  );
}
