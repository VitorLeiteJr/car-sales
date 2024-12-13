import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_sections/navbar";
import Footer from "./_sections/footer";
import { Toaster } from "./_components/ui/toaster";

export const metadata: Metadata = {
  title: "Car Sales",
  description: "Car Sales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased bg-whit font-sans`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <Toaster/>
      </body>
    </html>
  );
}