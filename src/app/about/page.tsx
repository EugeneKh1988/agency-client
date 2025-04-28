import BreadCrumbs from "@/components/BreadCrumbs";


export default function About() {
  return (
    <>
      <BreadCrumbs links={[{name: "Home", href: "/"}, {name: "About us"}]} />
    </>
  );
}
