import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auth",
    description: "Auth page",
  };

export default function AuthLayout({
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
