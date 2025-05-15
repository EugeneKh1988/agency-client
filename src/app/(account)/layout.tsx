import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard page",
  };

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav activeMenuName="Auth" />
      {children}
      <Footer />
    </>
  );
}
