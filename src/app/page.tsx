import Choose from "@/components/Choose";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Project from "@/components/Projects";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
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
      <Testimonials />
      <Faq />
    </>
  );
}
