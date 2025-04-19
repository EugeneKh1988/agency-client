import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Nav activeMenuName="Home" />
      <Hero />
      <Services />
    </>
  );
}
