import type { Metadata } from "next";
import "./globals.css";
import { interFont } from "@/ui/fonts";
import { Header } from "@/components/Header";


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
      <body
        className={` w-full overflow-x-hidden  antialiased ${interFont}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
