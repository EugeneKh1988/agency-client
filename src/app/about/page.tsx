import BreadCrumbs from "@/components/BreadCrumbs";
import Experience from "@/components/Experience";


export default function About() {
  return (
    <>
      <BreadCrumbs links={[{name: "Home", href: "/"}, {name: "About us"}]} />
      <Experience />
    </>
  );
}
