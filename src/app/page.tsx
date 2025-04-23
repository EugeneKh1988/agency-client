import Choose from "@/components/Choose";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Project from "@/components/Projects";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <Nav activeMenuName="Home" />
      <Hero />
      <Services />
      <Works />
      <Team />
      <Choose />
      <Project />
      <Pricing />
    </>
  );
}
