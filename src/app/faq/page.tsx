import BreadCrumbs from "@/components/BreadCrumbs";
import FaqTabs from "@/components/FaqTabs";


export default function FaqPage() {
  return (
    <>
      <BreadCrumbs links={[{name: "Home", href: "/"}, {name: "FAQ"}]} />
      <FaqTabs />
    </>
  );
}
