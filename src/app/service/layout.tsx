import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Works from "@/components/Works";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Service",
  description: "Generated by create next app",
};

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav activeMenuName="Service" className="bg-zircon" />
      {children}
      <Works />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
