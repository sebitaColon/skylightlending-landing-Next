import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Skyligth Lending",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>
        <Toaster position="bottom-center" />
        {children}
        </body>
    </html>
  );
}
