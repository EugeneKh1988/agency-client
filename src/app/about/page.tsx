import BreadCrumbs from "@/components/BreadCrumbs";
import Experience from "@/components/Experience";
import Growth from "@/components/Growth";


export default function About() {
  return (
    <>
      <BreadCrumbs links={[{name: "Home", href: "/"}, {name: "About us"}]} />
      <Experience />
      <Growth />
    </>
  );
}
