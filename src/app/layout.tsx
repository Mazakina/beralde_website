import type { Metadata } from "next";
import "./globals.css";
import { interFont } from "@/ui/fonts";
import { Header } from "@/components/Header";
import favicon from "@/public/favicon.ico";

export const metadata: Metadata = {
  title: "Beralde Verduras",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
      </head>
      <body
        className={` w-full overflow-x-hidden  antialiased ${interFont}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
