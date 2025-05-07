import BreadCrumbs from "@/components/BreadCrumbs";
import Faq from "@/components/Faq";
import Project from "@/components/Projects";
import Trusted from "@/components/Trusted";

export default function ProjectsPage() {
  return (
    <>
      <BreadCrumbs links={[{name: "Home", href: "/"}, {name: "Our Projects"}]} />
      <Project />
      <Trusted />
      <Faq />
    </>
  );
}
